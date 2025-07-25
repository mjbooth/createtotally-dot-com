export interface FeaturePageData {
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
        alternates?: {
            canonical?: string;
        };
    };
    heroSectionData: {
        featureGroup: string;
        featureGroupIcon: string;
        title: string;
        subtitle: string;
        features: string[];
    };
    featureBlocks: Array<{
        heading: string;
        text: string;
        image?: string;
        lottie?: string;
        imageAlt: string;
    }>;
    howItWorksHeading: string; // Add this new property
    HowItWorksSteps: Array<{
        step: number;
        label: string;
        title: string;
        description: string;
        image: string;
        imageAlt: string;
    }>;
    testimonialData: {
        quote: string;
        author: string;
        avatar: string;
        role: string;
        company: string;
    };
    ctaData: {
        title: string;
        buttonText: string;
    };
}