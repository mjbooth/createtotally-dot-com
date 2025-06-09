import { TbTextSize } from "react-icons/tb";
import { MdTextFields, MdOutlineRuleFolder } from "react-icons/md";
import { HiOutlineAdjustments } from "react-icons/hi";
import { PiPaletteBold } from "react-icons/pi";
import { FiType } from "react-icons/fi";
import { BsCollectionPlay } from "react-icons/bs";

export const features = [
  {
    title: "Fine-tuned typography control",
    description: "Character styles can be applied dynamically, with precise spacing, alignment, and style rules",
    icon: TbTextSize
  },
  {
    title: "Smart text behaviour",
    description: "Text can auto-shrink, reflow, or raise a flag based on the logic you define",
    icon: MdTextFields
  },
  {
    title: "Alpha channel precision",
    description: "Perfect cropping for product shots, people, or anything with transparency – no repetitive masking",
    icon: HiOutlineAdjustments
  },
  {
    title: "Dynamic colour updates",
    description: "Swap out spot colour swatches instantly for seasonal campaigns or regional palettes",
    icon: PiPaletteBold
  },
  {
    title: "Centralised font management",
    description: "Fonts managed in one place with automatic fallbacks and full style fidelity",
    icon: FiType
  },
  {
    title: "Outputs for every channel",
    description: "Generate CMYK-ready PDFs with bleed and trim or digital assets with custom file size limits",
    icon: BsCollectionPlay
  },
  {
    title: "Clean fallbacks",
    description: "Set rules to skip, hide, or replace empty content automatically",
    icon: MdOutlineRuleFolder
  }
];

export const featureBlocks = [
  {
    heading: "Endless approval loops",
    text: "You're sending follow-up after follow-up while deadlines inch closer. Your creative team spends more time managing approvals than creating, and stakeholders feel constantly pestered for feedback they've already given.",
    image: "/feature-placeholder-FiPenTool-sqr.jpg"
  },
  {
    heading: "Version confusion",
    text: "Stakeholders review outdated files, leaving conflicting feedback across platforms. Files named \"final_v7_ACTUALLY_FINAL.pdf\" still somehow end up with different edits from different reviewers—all working on different versions.",
    image: "/feature-placeholder-FiPenTool-sqr.jpg"
  },
  {
    heading: "Missed delivery deadlines",
    text: "Manual file preparation creates last-minute scrambles that delay campaigns. Your team wastes precious hours reformatting assets, renaming files to match conventions, and manually uploading to various systems—all when you should be launching.",
    image: "/feature-placeholder-FiPenTool-sqr.jpg"
  }
];

export const HowItWorksSteps = [
  {
    step: "one",
    title: "Connect your existing tools",
    description: "We integrate seamlessly with Workfront, Monday.com, and the platforms you already use.",
    image: "/feature-placeholder-FiPenTool-sqr.jpg"
  },
  {
    step: "two",
    title: "Design your approval flow",
    description: "Define who approves what and when, with conditional paths for different asset types.",
    image: "/feature-placeholder-FiPenTool-sqr.jpg"
  },
  {
    step: "three",
    title: "Let the system take over",
    description: "Automatic notifications, timely reminders, and intelligent asset routing keep everything moving.",
    image: "/feature-placeholder-FiPenTool-sqr.jpg"
  },
  {
    step: "four",
    title: "Receive production-ready output",
    description: "Final assets delivered in precisely the format you need, exactly where you need them.",
    image: "/feature-placeholder-FiPenTool-sqr.jpg"
  }
];

export const heroSectionData = {
  featureGroup: "Workflow Automation",
  title: "Stop chasing approvals.\nStart delivering results.",
  subtitle: "Automated workflows that transform creative chaos into organised output—without changing how you work.",
  features: [
    "Something",
    "Something else a bit longer",
    "Something else here",
    "Another word or two",
    "A little bit longer",
    "That's enough to show you"
  ]
};

export const testimonialData = {
  quote: "A lovely quote by the team deliverying Patek Philippe globally",
  author: "David Séal",
  company: "Patek Philippe"
};

export const ctaData = {
  title: "Accelerate your workflow automation with CreateTOTALLY",
  buttonText: "Get started today →"
};