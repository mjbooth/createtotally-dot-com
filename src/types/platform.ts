export interface PlatformPageData {
    metadata: {
        title: string;
        description: string;
        openGraph: {
            title: string;
            description: string;
            images: Array<{
                url: string;
                width: number;
                height: number;
                alt: string;
            }>;
        };
    };
    heroSectionData: {
        featureGroup: string;
        featureGroupIcon: string;
        title: string;
        subtitle: string;
        features: string[];
    };
    Feature: {
        title: string;
        description: string;
        icon: string;
    };
    FeatureBlock: {
        heading: string;
        text: string;
        image: string;
    };
    howItWorksHeading: string;
    HowItWorksStep: {
        step: number;
        label: string;
        title: string;
        description: string;
        image: string;
    };
    HeroSectionData: {
        featureGroup: string;
        title: string;
        subtitle: string;
        features: string[];
    };
    TestimonialData: {
        quote: string;
        author: string;
        avatar: string;
        role: string;
        company: string;
    };
    CtaData: {
        title: string;
        buttonText: string;
    }
}