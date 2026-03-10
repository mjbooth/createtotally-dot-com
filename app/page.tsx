import { SoftwareApplicationStructuredData } from '@/src/components/StructuredData';
import HomePageClient from './HomePageClient';

const clientLogos = [
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
		"image": "/SetUpInFigma.png",
		"imageAlt": "Interface showing a Figma file uploaded for creative automation. Illustrates seamless setup for design-to-delivery workflows.",
		"cta": "Explore our design integrations →"
	},
	{
		"icon": "IoCheckboxOutline",
		"step": "Step two",
		"feature": "Feature name",
		"headline": "No-code Templating",
		"subLabel": "Set up templates easily, without writing any code. Just click and customise.",
		"image": "/upload-to-ct.png",
		"imageAlt": "Upload UI with a highlighted \"Analyse\" button next to an After Effects project file. Marks the start of the creative automation pipeline.",
		"cta": "See how templates work →"
	},
	{
		"icon": "IoCheckboxOutline",
		"step": "Step three",
		"feature": "Feature name",
		"headline": "Content Planning",
		"subLabel": "Choose what you need: sizes, styles, and languages, ensuring every adapt is perfect.",
		"image": "/content-variations-at-scale.png",
		"imageAlt": "Placement dashboard showing 62 selected adaptations across Meta formats and languages. Highlights content scaling with master templates and cross-channel deployment.",
		"cta": "Discover content planning tools →"
	},
	{
		"icon": "IoCheckboxOutline",
		"step": "Step four",
		"feature": "Feature name",
		"headline": "Automate at Scale",
		"subLabel": "The system quickly creates all your designs, perfectly formatted every time.",
		"image": "/format-explosion.png",
		"imageAlt": "Multilingual creative variants for the same campaign shown in multiple formats and aspect ratios. Highlights creative complexity managed through automation.",
		"cta": "Learn about scalable automation →"
	},
	{
		"icon": "IoCheckboxOutline",
		"step": "Step five",
		"feature": "Feature name",
		"headline": "Approve Without the Back-and-Forth",
		"subLabel": "Share for review in one place. Get feedback, make changes, and approve quickly.",
		"image": "/trapped-in-approval-purgatory.png",
		"imageAlt": "Multi-step reviewer workflow paused at market manager stage. Reflects approval bottlenecks in traditional creative sign-off flows.",
		"cta": "View our approval workflows →"
	},
	{
		"icon": "IoCheckboxOutline",
		"step": "Step six",
		"feature": "Feature name",
		"headline": "Deliver Instantly",
		"subLabel": "Send your files where they need to go—no extra steps, no renaming.",
		"image": "/final-assets-delivered.png",
		"imageAlt": "Google Drive folder with multiple video files titled by language, resolution, and template ID. Represents final creative delivery grouped by format and locale.",
		"cta": "See delivery options →"
	},
	{
		"icon": "IoCheckboxOutline",
		"step": "Step seven",
		"feature": "Feature name",
		"headline": "Track & Optimise",
		"subLabel": "See what's working, measure results, and improve designs over time.",
		"image": "/CreateTOTALLY-Reports-Campaign-performance-02-20-2025_09_33_PM.png",
		"imageAlt": "Campaign performance dashboard showing metrics for Facebook and Instagram including spend, reach, CPC, and CTR. Demonstrates end-to-end performance tracking across creative platforms.",
		"cta": "Explore analytics capabilities →"
	}
];

export default function HomePage() {
	return (
		<>
			<SoftwareApplicationStructuredData />
			<HomePageClient clientLogos={clientLogos} steps={steps} />
		</>
	);
}
