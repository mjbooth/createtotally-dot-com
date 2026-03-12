"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARD_WIDTH = 1152;
const CARD_GAP = 30;

const log = (...args: unknown[]) => {
  if (process.env.NODE_ENV === "development") {
    console.log("[HowItWorks]", ...args);
  }
};

interface UseHorizontalScrollTriggerOptions {
  stepsCount: number;
  isMobile: boolean | undefined;
}

export function useHorizontalScrollTrigger({
  stepsCount,
  isMobile,
}: UseHorizontalScrollTriggerOptions) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const howItWorksWrapperRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const gsapCtxRef = useRef<gsap.Context | null>(null);

  const [currentStep, setCurrentStep] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [maxStepHeight, setMaxStepHeight] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const containerPadding = useBreakpointValue({ base: "0px", md: "calc(50% - 576px)" });

  // Equalize mobile step card heights using minHeight
  useEffect(() => {
    const calculateMaxHeight = () => {
      const heights = stepRefs.current.map((ref) => ref?.offsetHeight || 0);
      const maxHeight = Math.max(...heights);
      setMaxStepHeight(maxHeight);
    };

    calculateMaxHeight();
    window.addEventListener("resize", calculateMaxHeight);
    return () => window.removeEventListener("resize", calculateMaxHeight);
  }, [stepsCount]);

  // Clean up GSAP context
  const cleanupGsap = useCallback(() => {
    if (gsapCtxRef.current) {
      log("Cleaning up GSAP context");
      gsapCtxRef.current.revert();
      gsapCtxRef.current = null;
    }
  }, []);

  // Reset layout for mobile
  const resetLayoutForMobile = useCallback(() => {
    log("Resetting layout for mobile");
    cleanupGsap();

    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.width = "100%";
      scrollContainerRef.current.style.transform = "none";
    }
    if (howItWorksWrapperRef.current) {
      howItWorksWrapperRef.current.style.height = "auto";
      howItWorksWrapperRef.current.style.overflow = "visible";
      howItWorksWrapperRef.current.style.minHeight = "auto";
    }
  }, [cleanupGsap]);

  // Initialize ScrollTrigger for desktop once page layout has settled
  useEffect(() => {
    log("useEffect fired — isMobile:", isMobile, "stepsCount:", stepsCount);

    // Wait for useBreakpointValue to resolve (undefined during hydration)
    if (isMobile === undefined) {
      log("isMobile is undefined (hydrating), skipping");
      return;
    }

    if (isMobile) {
      resetLayoutForMobile();
      setIsReady(true);
      return;
    }

    const wrapper = howItWorksWrapperRef.current;
    const container = scrollContainerRef.current;
    if (!wrapper || !container) {
      log("Missing refs — wrapper:", !!wrapper, "container:", !!container);
      return;
    }

    let cancelled = false;

    log("Waiting for layout to settle before initializing ScrollTrigger");

    const initScrollTrigger = () => {
      if (cancelled) {
        log("Init cancelled, aborting");
        return;
      }

      // Clean up previous context
      cleanupGsap();

      // Compute scroll distance deterministically from known card dimensions
      const wrapperWidth = wrapper.offsetWidth;
      const wrapperHeight = wrapper.clientHeight;
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;

      log("Wrapper measurements:", {
        wrapperWidth,
        wrapperHeight,
        wrapperTop,
        viewportHeight: window.innerHeight,
        documentHeight: document.documentElement.scrollHeight,
        scrollY: window.scrollY,
      });

      if (wrapperWidth === 0) {
        log("wrapperWidth is 0, aborting");
        return;
      }

      const totalWidth = stepsCount * CARD_WIDTH + (stepsCount - 1) * CARD_GAP;
      const paddingValue = Math.max(0, (wrapperWidth - CARD_WIDTH) / 2);
      const scrollDistance = totalWidth + 2 * paddingValue - wrapperWidth;

      log("Scroll distance calc:", {
        stepsCount,
        totalWidth,
        paddingValue,
        scrollDistance,
        containerWidth: totalWidth + 2 * paddingValue,
      });

      if (scrollDistance <= 0) {
        log("scrollDistance <= 0, aborting");
        return;
      }

      // Set container width deterministically
      container.style.width = `${totalWidth + 2 * paddingValue}px`;

      const ctx = gsap.context(() => {
        gsap.set(container, { x: 0 });

        // Timeline: container scrolls across full 0–1 range,
        // heading fades out in 0–0.15 range
        const tl = gsap.timeline();
        tl.to(container, { x: -scrollDistance, ease: "none", duration: 1 }, 0);

        const heading = headingRef.current;
        if (heading) {
          tl.fromTo(
            heading,
            { y: 0, opacity: 1 },
            { y: "-100%", opacity: 0, ease: "none", duration: 0.15 },
            0
          );
        }

        const st = ScrollTrigger.create({
          id: "howItWorks",
          trigger: wrapper,
          start: "top top",
          end: () => `+=${scrollDistance}px`,
          pin: true,
          anticipatePin: 1,
          scrub: 0.5,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          animation: tl,
        });

        log("ScrollTrigger created:", {
          start: st.start,
          end: st.end,
          pinSpacerHeight: (st as unknown as Record<string, HTMLElement>).spacer?.offsetHeight,
        });

        ScrollTrigger.refresh();

        log("ScrollTrigger refreshed, final positions:", {
          start: st.start,
          end: st.end,
        });
      }, wrapper);

      gsapCtxRef.current = ctx;

      log("ScrollTrigger init complete");
      setIsReady(true);
    };

    // Wait for page layout to settle (fonts + visible images) before initializing.
    // The desktop scroll container stays hidden until init completes, preventing
    // absolutely-positioned cards from overlapping content below.
    const waitForLayout = async () => {
      const t0 = performance.now();
      log("waitForLayout started");

      if (document.fonts?.ready) {
        await document.fonts.ready;
        log(`Fonts ready after ${(performance.now() - t0).toFixed(0)}ms`);
      }

      // Wait for non-lazy images so content above settles to final height
      const images = Array.from(document.querySelectorAll("img"));
      const visibleImages = images.filter(
        (img) => img.loading !== "lazy" || img.complete
      );
      const pendingImages = visibleImages.filter((img) => !img.complete);

      log(`Images: ${images.length} total, ${visibleImages.length} visible, ${pendingImages.length} pending`);

      await Promise.all(
        visibleImages.map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise<void>((resolve) => {
            img.onload = () => resolve();
            img.onerror = () => resolve();
            setTimeout(resolve, 3000);
          });
        })
      );

      log(`All images settled after ${(performance.now() - t0).toFixed(0)}ms`);

      if (cancelled) {
        log("Cancelled after image wait");
        return;
      }

      requestAnimationFrame(() => {
        log(`rAF fired after ${(performance.now() - t0).toFixed(0)}ms, calling initScrollTrigger`);
        if (!cancelled) initScrollTrigger();
      });
    };

    waitForLayout();

    return () => {
      cancelled = true;
      cleanupGsap();
    };
  }, [stepsCount, isMobile, cleanupGsap, resetLayoutForMobile]);

  // Touch handlers for mobile carousel
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (touchStart === null) return;

      const currentTouch = e.touches[0].clientX;
      const diff = touchStart - currentTouch;

      if (diff > 50) {
        setCurrentStep((prev) => Math.min(prev + 1, stepsCount - 1));
      }
      if (diff < -50) {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
      }

      setTouchStart(null);
    },
    [touchStart, stepsCount]
  );

  return {
    scrollContainerRef,
    howItWorksWrapperRef,
    headingRef,
    stepRefs,
    currentStep,
    setCurrentStep,
    maxStepHeight,
    handleTouchStart,
    handleTouchMove,
    containerPadding,
    isReady,
  };
}
