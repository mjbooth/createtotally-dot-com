export interface PlatformPageData {
    heroSectionData: {
        featureGroup: string;
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
        company: string;
    };
    CtaData: {
        title: string;
        buttonText: string;
    }
}