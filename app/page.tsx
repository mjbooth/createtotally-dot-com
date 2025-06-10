"use client";

import React, { useRef, useState, useLayoutEffect, useEffect, useCallback, lazy } from "react";
import { Box, Container, Flex, Grid, GridItem, Heading, Image, Text, Highlight, Stack, Icon, useBreakpointValue, AspectRatio } from "@chakra-ui/react";
import { FaPencilRuler } from "react-icons/fa";
import { useBackground } from '@/src/context/BackgroundContext';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Vimeo = lazy(() => import('@u-wave/react-vimeo'));

const allClientLogos = [
  { src: "/bacardi_logo.png", alt: "Bacardi" },
  { src: "/vitality-logo.svg", alt: "Vitality" },
  { src: "/Anheuser-Busch_InBev.svg", alt: "Anheuser-Busch InBev" },
  { src: "/googlelogo_clr_74x24px.svg", alt: "Google" },
  { src: "/Logo_NIKE.png", alt: "Nike" },
  { src: "/miele.svg", alt: "Miele" },
  { src: "/patek-philippe-sa-1.svg", alt: "Patek Philippe" },
  { src: "/Allwyn-Logo.png", alt: "Allwyn" },
  { src: "/MSC_Cruises_Logo.png", alt: "MSC Cruises" },
];

const steps = [
  {
    "icon": "IoCheckboxOutline",
    "step": "Step one",
    "feature": "Feature name",
    "headline": "Start with Figma & Adobe",
    "subLabel": "Upload existing Figma and Adobe design files, prepared using our suite of plugins.",
    "image": "/SetUpInFigma.avif",
    "cta": "Explore our design integrations →"
  },
  {
    "icon": "IoCheckboxOutline",
    "step": "Step two",
    "feature": "Feature name",
    "headline": "No-code Templating",
    "subLabel": "Set up templates easily, without writing any code. Just click and customise.",
    "image": "/upload-to-ct.png",
    "cta": "See how templates work →"
  },
  {
    "icon": "IoCheckboxOutline",
    "step": "Step three",
    "feature": "Feature name",
    "headline": "Content Planning",
    "subLabel": "Choose what you need: sizes, styles, and languages ensuring every adapt is perfect.",
    "image": "/content-variations-at-scale.png",
    "cta": "Discover content planning tools →"
  },
  {
    "icon": "IoCheckboxOutline",
    "step": "Step four",
    "feature": "Feature name",
    "headline": "Automate at Scale",
    "subLabel": "The system quickly creates all your designs, perfectly formatted every time.",
    "image": "/format-explosion.png",
    "cta": "Learn about scalable automation →"
  },
  {
    "icon": "IoCheckboxOutline",
    "step": "Step five",
    "feature": "Feature name",
    "headline": "Approve Without the Back-and-Forth",
    "subLabel": "Share for review in one place. Get feedback, make changes, and approve quickly.",
    "image": "/trapped-in-approval-purgatory.png",
    "cta": "View our approval workflows →"
  },
  {
    "icon": "IoCheckboxOutline",
    "step": "Step six",
    "feature": "Feature name",
    "headline": "Deliver Instantly",
    "subLabel": "Send your files where they need to go—no extra steps, no renaming.",
    "image": "/final-assets-delivered.png",
    "cta": "See delivery options →"
  },
  {
    "icon": "IoCheckboxOutline",
    "step": "Step seven",
    "feature": "Feature name",
    "headline": "Track & Optimise",
    "subLabel": "See what's working, measure results, and improve designs over time.",
    "image": "/CreateTOTALLY-Reports-Campaign-performance-02-20-2025_09_33_PM.png",
    "cta": "Explore analytics capabilities →"
  }
];

const CustomCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path d="M10.9976 17.2996L18.6226 9.64961L16.3976 7.37461L10.9976 12.7746L8.42263 10.1996L6.17263 12.4746L10.9976 17.2996ZM12.4726 23.1496C10.9286 23.1496 9.47472 22.8613 8.11088 22.2846C6.74722 21.7078 5.5633 20.9173 4.55913 19.9131C3.55497 18.9089 2.76447 17.725 2.18763 16.3614C1.61097 14.9975 1.32263 13.5436 1.32263 11.9996C1.32263 10.4513 1.61147 8.99753 2.18913 7.63836C2.76697 6.27919 3.56013 5.09636 4.56863 4.08986C5.57713 3.08336 6.76105 2.29169 8.12038 1.71486C9.47988 1.13803 10.9306 0.849609 12.4726 0.849609C14.0208 0.849609 15.4748 1.13786 16.8346 1.71436C18.1945 2.29103 19.3775 3.08244 20.3836 4.08861C21.3898 5.09478 22.1812 6.27803 22.7579 7.63836C23.3344 8.99869 23.6226 10.4531 23.6226 12.0016C23.6226 13.5503 23.3342 15.0024 22.7574 16.3579C22.1805 17.7132 21.3889 18.8951 20.3824 19.9036C19.3759 20.9121 18.193 21.7053 16.8339 22.2831C15.4747 22.8608 14.021 23.1496 12.4726 23.1496ZM12.4669 19.7496C14.6459 19.7496 16.4833 19.0037 17.9791 17.5119C19.4748 16.0199 20.2226 14.1844 20.2226 12.0054C20.2226 9.82636 19.4767 7.98894 17.9849 6.49311C16.4929 4.99744 14.6574 4.24961 12.4784 4.24961C10.2994 4.24961 8.46197 4.99553 6.96613 6.48736C5.47047 7.97936 4.72263 9.81486 4.72263 11.9939C4.72263 14.1729 5.46855 16.0103 6.96038 17.5061C8.45238 19.0018 10.2879 19.7496 12.4669 19.7496Z" fill="#853FCA" />
  </svg>
);
export default function HomePage() {
  const clientLogos = allClientLogos.slice(0, 9);
  const { setBackgroundColor } = useBackground();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const howItWorksWrapperRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [currentStep, setCurrentStep] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const containerPadding = useBreakpointValue({ base: "0px", md: "calc(50% - 576px)" });

  const [maxStepHeight, setMaxStepHeight] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setBackgroundColor("#F4F0EB");
    return () => setBackgroundColor("#FFFCFB");
  }, [setBackgroundColor]);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        heading.classList.add('hidden');
      } else {
        heading.classList.remove('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const calculateMaxHeight = () => {
      const heights = stepRefs.current.map(ref => ref?.offsetHeight || 0);
      const maxHeight = Math.max(...heights);
      setMaxStepHeight(maxHeight);
    };

    calculateMaxHeight();
    window.addEventListener('resize', calculateMaxHeight);

    return () => {
      window.removeEventListener('resize', calculateMaxHeight);
    };
  }, []);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        heading.classList.add('hidden');
      } else {
        heading.classList.remove('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    console.log("[ScrollTrigger] useLayoutEffect start", Date.now());

    const runScrollTrigger = () => {
      console.log("[ScrollTrigger] runScrollTrigger called", Date.now());

      const wrapper = howItWorksWrapperRef.current;
      const container = scrollContainerRef.current;

      if (isMobile) {
        console.log("[ScrollTrigger] Skipped because isMobile === true");
      }
      if (!wrapper || !container || isMobile) {
        console.warn("[ScrollTrigger] Skipped: wrapper or container missing, or mobile");
        return;
      }

      // Early return guard for zero offsetWidth
      if (container.offsetWidth === 0 || wrapper.offsetWidth === 0) {
        console.warn("[ScrollTrigger] Aborted: container or wrapper offsetWidth === 0");
        return;
      }

      // Force container width early
      container.style.width = `${container.scrollWidth}px`;

      const scrollDistance = container.scrollWidth - wrapper.offsetWidth;

      if (scrollDistance <= 0) {
        console.warn("[ScrollTrigger] Aborted: scrollDistance is zero or negative", scrollDistance);
        // Retry once if layout may not have settled
        requestAnimationFrame(() => {
          setTimeout(() => {
            console.log("[ScrollTrigger] Retrying runScrollTrigger after delay");
            runScrollTrigger();
          }, 50);
        });
        return;
      }

      try {
        console.log("[HowItWorks] Creating ScrollTrigger...");
        const ctx = gsap.context(() => {
          // --- Wrapper height diagnostic and guard ---
          const wrapperHeight = wrapper.clientHeight;
          console.log("[ScrollTrigger] Wrapper clientHeight:", wrapperHeight);
          if (wrapperHeight < 200) {
            console.warn("[ScrollTrigger] Aborted: wrapper height too small", wrapperHeight);
            return;
          }

          // Clean up all ScrollTriggers targeting this wrapper
          ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.trigger === wrapper || trigger.vars.id === 'howItWorks') {
              trigger.kill();
            }
          });
          // container.style.transform = "none";
          container.style.transform = "none";
          const pinSpacers = document.querySelectorAll('.pin-spacer');
          pinSpacers.forEach(pinSpacer => {
            const parent = pinSpacer.parentNode;
            while (pinSpacer.firstChild) parent?.insertBefore(pinSpacer.firstChild, pinSpacer);
            parent?.removeChild(pinSpacer);
          });
          gsap.set(container, { x: 0 });

          ScrollTrigger.create({
            id: 'howItWorks',
            trigger: wrapper,
            scroller: window, // explicitly set the scroller
            start: "top top",
            end: () => `+=${scrollDistance}px`,
            pin: true,
            anticipatePin: 1,
            scrub: true,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
            onUpdate: self => {
              gsap.to(container, {
                x: -scrollDistance * self.progress,
                duration: 0,
                overwrite: "auto",
              });
            },
          });
          ScrollTrigger.refresh();
          setTimeout(() => ScrollTrigger.refresh(), 100);
        }, wrapper);
        console.log("[HowItWorks] ScrollTrigger created successfully.");

        return () => {
          ctx.revert();
        };
      } catch (error) {
        console.error("[HowItWorks] ScrollTrigger setup failed:", error);
      }
    };

    if (document?.fonts?.ready) {
      document.fonts.ready.then(() => {
        console.log("[ScrollTrigger] Fonts ready");
        requestAnimationFrame(() => {
          setTimeout(() => {
            runScrollTrigger();
          }, 0);
        });
      });
    } else {
      requestAnimationFrame(() => {
        setTimeout(() => {
          runScrollTrigger();
        }, 0);
      });
    }
  }, [isMobile]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 50) {
      // Swipe left
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }

    if (diff < -50) {
      // Swipe right
      setCurrentStep((prev) => Math.max(prev - 1, 0));
    }

    setTouchStart(null);
  };

  const setupGSAPForDesktop = useCallback(() => {
    const wrapper = howItWorksWrapperRef.current;
    const container = scrollContainerRef.current;
    if (!wrapper || !container || isMobile) return;

    const existingPinSpacer = document.querySelector('.pin-spacer');
    if (existingPinSpacer) {
      const parent = existingPinSpacer.parentNode;
      while (existingPinSpacer.firstChild) parent?.insertBefore(existingPinSpacer.firstChild, existingPinSpacer);
      parent?.removeChild(existingPinSpacer);
    }

    // Calculate scroll distance using scrollWidth and offsetWidth
    const scrollDistance = container.scrollWidth - wrapper.offsetWidth;
    if (!isMobile) {
      container.style.width = `${container.scrollWidth}px`;
    }

    gsap.set(container, { x: 0 });

    //console.log("[GSAP] scrollWidth:", container.scrollWidth);
    //console.log("[GSAP] wrapper.offsetWidth:", wrapper.offsetWidth);
    //console.log("[GSAP] scrollDistance:", scrollDistance);

    ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: () => `+=${scrollDistance}px`,
      pin: true,
      anticipatePin: 1,
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: self => {
        gsap.to(container, {
          x: -scrollDistance * self.progress,
          duration: 0,
          overwrite: "auto",
        });
      },
    });
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      if (isMobile) {
        resetLayoutForMobile();
      } else {
        setupGSAPForDesktop();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, setupGSAPForDesktop]);

  const resetLayoutForMobile = () => {
    // Debug: log before cleanup
    console.log("[ResetMobile] clearing wrapper height:", howItWorksWrapperRef.current?.style.height);
    console.log("[ResetMobile] killing all ScrollTriggers...");
    ScrollTrigger.killAll();

    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.width = '100%';
      scrollContainerRef.current.style.transform = 'none';
    }
    if (howItWorksWrapperRef.current) {
      howItWorksWrapperRef.current.style.height = 'auto';
      howItWorksWrapperRef.current.style.overflow = 'visible';
      howItWorksWrapperRef.current.style.minHeight = 'auto';
    }
    // Remove pin-spacer
    const pinSpacer = document.querySelector('.pin-spacer');
    if (pinSpacer) {
      const parent = pinSpacer.parentNode;
      while (pinSpacer.firstChild) parent?.insertBefore(pinSpacer.firstChild, pinSpacer);
      parent?.removeChild(pinSpacer);
    }
    // Remove any pinned inline styles by targeting .pin-spacer > *
    const pinnedChildren = document.querySelectorAll('.pin-spacer > *');
    pinnedChildren.forEach(el => {
      (el as HTMLElement).style.position = 'relative';
    });
  };

  return (
    <Box bg="brandNeutral.500" pt={{ base: "16", md: "40", lg: "40" }}>
      <Box>
        <Container maxW={{ base: "100%", md: "1152px" }} mx="auto" px={{ base: 4, md: 0 }} zIndex="9999">
          <Box display="flex" justifyContent="center" alignItems="center" pt="5">
            <Stack gap={6} mx="auto" textAlign="center" alignItems="center" pb={{ base: "12", md: "8", lg: "7.5rem" }} >
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "6xl", lg: "8xl" }}
                fontWeight="900"
                lineHeight="1"
                color="brandNavy.500"
                textAlign="center"
                letterSpacing="tight"
                mb="0"
              >
                Cut creative production costs by 65%, <br />instantly.
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "xl" }}
                color="brandNavy.500"
                fontWeight="400"
                maxW={{ base: "full", md: "3xl" }}
              >
                If you make more than 10 print, video, or digital adapts per campaign, our AI automation technology can cut your production costs by 65%. Without sacrificing creative control.
              </Text>
            </Stack>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              w="full"
              maxW="6xl"
              overflow="hidden"
              borderRadius={{ base: "1rem", md: "xxl", lg: "xxl" }}
              borderWidth="1px"
              borderColor="gray.900/10"
              position="relative"
              height="auto"
              aspectRatio="16/9"
            >
              <Vimeo
                video="https://vimeo.com/1054417102"
                responsive={true}
                autopause={false}
                autoplay={false}
                loop={true}
                controls={true}
                muted={true}
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        position="relative"
        bg="brandNeutral.200"
        backgroundImage="url('/bg-top.svg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="top center"
        backgroundSize="100% auto"
        pt={{ base: "2", md: "30" }}
        pb={{ base: "20", md: "30" }}
      >
        <Container maxW="1200px">
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <Box width={{ base: "100%", md: "40%" }} mb={{ base: 8, md: 0 }}>
              <Text color="gray.800" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" textAlign={{ base: "center", md: "left" }} letterSpacing="tight" lineHeight="100%">
                The world&apos;s biggest brands choose CreateTOTALLY
              </Text>
            </Box>
            <Box width={{ base: "100%", md: "55%" }}>
              <Grid templateColumns="repeat(3, 1fr)" gap={{ base: "1", md: "6" }}>
                {clientLogos.map((logo, index) => (
                  <GridItem key={index}>
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      height="100px"
                      borderRadius="md"
                      p={2}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        maxH="80px"
                        maxW="80%"
                        objectFit="contain"
                        filter="grayscale(100%) brightness(0%)"
                      />
                    </Flex>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box
        bg="brandNeutral.500"
        backgroundImage="url('/bg-top-footer.svg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="top center"
        backgroundSize="100% auto"
        pt={{ base: "60px", md: "100px", lg: "100px" }}
        css={{
          transform: 'scaleX(-1)',
          '& > *': {
            transform: 'scaleX(-1)'
          }
        }}
      >
        <Container width={{ base: "100%", md: "90%", lg: "1152px" }} mx="auto" px={{ base: "4", md: "0" }}>
          <Flex gap={{ base: "60px", md: "120px" }} direction="column">
            <Flex direction={{ base: "column", md: "row" }} align={{ base: "stretch", md: "center" }} gap={{ base: "30px", md: "60px" }}>
              <Box flex={{ base: "1 1 100%", md: "1 1 50%" }}>
                <Box bg="brandPurple.600" color="brandNeutral.500" mb="2" px="3" py="2" borderRadius="lg" fontWeight="700" fontSize="md" width="fit-content" mx={{ base: "auto", md: "0" }}>
                  <Flex gap="3" direction="row" alignItems="center">
                    <Icon color="brandNeutral.500" as={FaPencilRuler} fontSize="md" />
                    <Text>Easy templating</Text>
                  </Flex>
                </Box>
                <Flex gap="4" direction="column" align={{ base: "center", md: "flex-start" }}>
                  <Heading as="h2" color="brandNavy.500" fontSize={{ base: "4xl", md: "4xl", lg: "4xl" }} fontWeight="700" textAlign={{ base: "center", md: "left" }} lineHeight="102.811%" mb="0" mt="0">
                    Double Your Output.<br />Zero Trade-offs.
                  </Heading>
                  <Text color="brandNavy.500" fontSize={{ base: "md", md: "md", lg: "lg" }} fontWeight="400" lineHeight="160%" textAlign={{ base: "center", md: "left" }}>
                    Your team relies on Figma and Adobe — so we built automation that works with your native tools, not against them.
                  </Text>
                  <Flex gap="12px" direction="row" pb="1" align="flex-start">
                    <Icon as={CustomCheckIcon} boxSize="1.4rem" mt="1" flexShrink={0} minWidth="1.4rem" />
                    <Text color="brandNavy.500" fontSize={{ base: "md", md: "md", lg: "lg" }} fontWeight="400" lineHeight="160%" textAlign="left">
                      <Highlight query="No switching." styles={{ fontWeight: "bold" }}>No switching. Keep your existing workflows. No proprietary software. No retraining.</Highlight>
                    </Text>
                  </Flex>
                  <Flex gap="12px" direction="row" pb="1" align="flex-start">
                    <Icon as={CustomCheckIcon} boxSize="1.4rem" mt="1" flexShrink={0} minWidth="1.4rem" />
                    <Text color="brandNavy.500" fontSize={{ base: "md", md: "md", lg: "lg" }} fontWeight="400" lineHeight="160%" textAlign="left">
                      <Highlight query="Full creative control." styles={{ fontWeight: "bold" }}>Full creative control. Set design rules, automate, and approve — without losing the craft.</Highlight>
                    </Text>
                  </Flex>
                  <Flex gap="12px" direction="row" pb="1" align="flex-start">
                    <Icon as={CustomCheckIcon} boxSize="1.4rem" mt="1" flexShrink={0} minWidth="1.4rem" />
                    <Text color="brandNavy.500" fontSize={{ base: "md", md: "md", lg: "lg" }} fontWeight="400" lineHeight="160%" textAlign="left">
                      <Highlight query="One-click efficiency." styles={{ fontWeight: "bold" }}>One-click efficiency. Automate without coding. Handle thousands of assets in minutes.</Highlight>
                    </Text>
                  </Flex>
                </Flex>
              </Box>
              <Box flex={{ base: "1 1 100%", md: "2 1 50%" }}>
                <Box width="100%" overflow="hidden">
                  <Image src="/AutomationSuite.svg" alt="Icon" width="100%" borderRadius="4xl" />
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* How it works */}
      <Box position="relative" bg="brandNeutral.200" zIndex="2" backgroundImage="url('/bg-bottom-footer-flip.svg')" backgroundRepeat="no-repeat" backgroundPosition="top center" backgroundSize="100% auto" pt="100px" >
        <Container maxW="100%" px="0" overflow="hidden" position="relative" >
          <Heading as="h2" pt="16" fontSize="3rem" fontWeight="700" textAlign="center" lineHeight="102.811%" color="brandNavy.500" zIndex="10" position="sticky" top="0" ref={headingRef} className="scroll-out-heading" opacity="1" pb="16" >
            How it works
          </Heading>
          <Box
            ref={howItWorksWrapperRef}
            position="relative"
            overflow="hidden"
            height={{ base: "auto", md: "100vh" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* Mobile view */}
            <Box
              display={{ base: "block", md: "none" }}
              width="100%"
              px="4"
              position="relative"
              overflow="hidden"
            >
              <Flex
                direction="row"
                width={`${steps.length * 100}%`}
                transform={`translateX(-${currentStep * (100 / steps.length)}%)`}
                transition="transform 0.3s ease"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
              >
                {steps.map((step, index) => (
                  <Box
                    key={index}
                    width={`${100 / steps.length}%`}
                    flexShrink={0}
                    px="2"
                  >
                    <Box
                      ref={(el: HTMLDivElement | null) => stepRefs.current[index] = el}
                      bg="brandNavy.500"
                      borderRadius="xl"
                      p="6"
                      boxShadow="realistic"
                      height={maxStepHeight > 0 ? `${maxStepHeight}px` : 'auto'}
                      overflowY="auto"
                    >
                      <Flex gap="6" direction="column">
                        <AspectRatio ratio={1 / 1}>
                          <Image
                            src={step.image}
                            alt={`Step ${step.step}`}
                            borderRadius="lg"
                            width="100%"
                            height="auto"
                            objectFit="cover"
                          />
                        </AspectRatio>
                        <Flex gap="3" direction="column">
                          <Flex bg="brandPurple.600" p="3" borderRadius="md" display="inline-flex" alignSelf="flex-start">
                            <Text color="brandNeutral.200" fontWeight="bold" fontSize="md" lineHeight={1} whiteSpace="nowrap">
                              {step.step}
                            </Text>
                          </Flex>
                          <Heading color="brandNeutral.500" as="h3" fontSize="2xl" fontWeight="700">
                            {step.headline}
                          </Heading>
                          <Text color="brandNeutral.500" fontSize="md">
                            {step.subLabel}
                          </Text>
                        </Flex>
                      </Flex>
                    </Box>
                  </Box>
                ))}
              </Flex>
              <Flex justify="center" mt="8" mb="8">
                {steps.map((_, index) => (
                  <Box
                    key={index}
                    w="4"
                    h="4"
                    borderRadius="full"
                    bg={currentStep === index ? "brandPurple.500" : "gray.300"}
                    mx="1"
                    onClick={() => setCurrentStep(index)}
                  />
                ))}
              </Flex>
            </Box>

            {/* Desktop view */}
            {!isMobile && (
              <Flex
                ref={scrollContainerRef}
                position="absolute"
                left="0"
                overflow="visible"
                px={containerPadding}
                height="100%"
                alignItems="center"
              >
                <Flex alignItems="center">
                  {steps.map((step, index) => (
                    <Flex
                      key={index}
                      flexShrink={0}
                      bg="brandNavy.500"
                      borderRadius="xxl"
                      p="15"
                      width="1152px"
                      minW="1152px"
                      mr="30"
                      zIndex="9999"
                      boxShadow="realistic"
                    >
                      <Flex width="100%" gap="15">
                        <Flex width="50%" direction="column" gap="4">
                          <Flex bg="brandPurple.600" p="3" borderRadius="md" display="inline-flex" alignSelf="flex-start" >
                            <Text color="brandNeutral.200" fontWeight="bold" fontSize="2xl" lineHeight={1} whiteSpace="nowrap" >
                              {step.step}
                            </Text>
                          </Flex>
                          <Flex gap="2" direction="column" justify="center" height="100%">
                            <Heading color="brandNeutral.500" as="h3" fontSize={["3xl", "4xl", "5xl"]} fontWeight="700" lineHeight="100%" mt="0" mb="0" letterSpacing="tight" >
                              {step.headline}
                            </Heading>
                            <Text color="brandNeutral.500" fontSize="lg" lineHeight="1.6">
                              {step.subLabel}
                            </Text>
                          </Flex>
                        </Flex>
                        <Flex width="50%">
                          <Image src={step.image} alt={`Step ${step.step}`} borderRadius="xxl" width="100%" height="100%" objectFit="cover" />
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            )}
          </Box>

        </Container>
      </Box>
    </Box>
  );
}