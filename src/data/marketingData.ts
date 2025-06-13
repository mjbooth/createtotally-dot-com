import { Integration, AccordionItem, Step } from '../types';
import { shuffleArray } from '../utils/helpers';
import { IoCheckboxOutline } from "react-icons/io5";

// Static data that would be used at build time
export function getIntegrations(): Integration[] {
  const integrations = [
    { src: "/adroll.svg", text: "AdRoll", colour: "#00aeef" },
    { src: "/aem.svg", text: "AEM", colour: "rgb(238, 126, 55)" },
    { src: "/brandfolder.svg", text: "Brandfolder", colour: "rgb(110, 206, 241)" },
    { src: "/bynder.svg", text: "Bynder", colour: "#126dfe" },
    { src: "/drive.svg", text: "Google Drive", colour: "#4285f4" },
    { src: "/google-ads.svg", text: "Google Ads", colour: "#fbbc05" },
    { src: "/monday-logo-x2.png", text: "Monday.com", colour: "#6161FF" },
    { src: "/powerbi.svg", text: "Power BI", colour: "#f2c811" },
    { src: "/adobe-workfront.png", text: "Adobe Workfront", colour: "#ff0000" },
    { src: "/box.svg", text: "Box", colour: "#2486FC" },
    { src: "/click-up.svg", text: "ClickUp", colour: "rgba(250, 18, 227, 1)" },
    { src: "/aws-s3.svg", text: "Amazon S3", colour: "rgb(232, 146, 56)" },
    { src: "/Sitecore.svg", text: "Sitecore", colour: "#ff1f38" },
    { src: "/mark-gradient-blue-jira.svg", text: "Jira", colour: "#0146B3" },
    { src: "/YouTube.svg", text: "YouTube", colour: "#ff0000" },
    { src: "/Meta_Platforms_Inc_logo.svg", text: "Meta", colour: "#0082fb" }
  ];
  
  // Shuffle at build time, not client-side
  return shuffleArray(integrations);
}

export function getAccordionItems(): AccordionItem[] {
  return [
    {
        "value": "a", 
        "title": "How does the automation actually work?",
        "text": "Think of CreateTOTALLY as your creative team’s **efficiency powerhouse**. This isn’t AI taking wild guesses, and it’s definitely not another rigid template system.\n\nInstead, we use **intelligent, rule-based automation** that adaptations to your exact needs. Here’s the key: we **never** lock down your designs. Unlike other tools, you can **jump in, tweak, and adjust** as needed. No fixed layouts. No loss of creative control. Just **faster, smarter production at scale.**"
    },
    {
        "value": "b",
        "title": "What types of content does it automate?",
        "text": "Everything. **Yes, everything.**\n\nSocial ads, display banners, print, video, email—you name it, we automate it.\n\nNeed content localised? **Done.** Upload your own translations, or let our **built-in AI translation engine** handle the heavy lifting. No more manual copy-pasting. No more versioning nightmares. Just **high-speed, high-quality global campaigns.**"
    },
    {
        "value": "c",
        "title": "How does it fit within an in-house marketing team?",
        "text": "**We’re not here to replace designers—we’re here to free them up.**\n\nYour team is spending **80% of their time** on repetitive production work. That’s time stolen from strategy, storytelling, and the creative projects that actually move the needle.\n\nWith CreateTOTALLY, resizing, adapting, and duplicating assets happens **instantly**. Your team stays in control—only now, they can **focus on the creative work that actually matters.**"
    },
    {
        "value": "d",
        "title": "How much creative flexibility does it allow?",
        "text": "Automation **shouldn’t limit creativity.** And with CreateTOTALLY, it doesn’t.\n\nUnlike other tools that lock you into predefined templates, every output here is **100% editable.** Need to tweak a layout? No problem. Want to make a quick adjustment? Go ahead.\n\n**If you can do it in Adobe or Figma, you can do it here—just 10x faster.**"
    },
    {
        "value": "e",
        "title": "How complex is the implementation?",
        "text": "**Most teams are fully operational in 30 days.** No IT headaches, no endless onboarding.\n\nSome integrations are **plug-and-play**, while others need a quick mapping to fit into your existing workflow. Either way, our team guides you every step of the way.\n\nBottom line? **You’ll be automating creative production before your next big campaign launches.**"
    }
  ];
}

export function getSteps(): Step[] {
  return [
    { 
        icon: IoCheckboxOutline,
        label: "#1 Start with Figma & Adobe", 
        subLabel: "Upload existing Figma and Adobe design files, prepared using our suite of plugins.", 
        image: "/FigmaPlugin.jpg" 
    },
    { 
        icon: IoCheckboxOutline,
        label: "#2 No-code Templating", 
        subLabel: "Set up templates easily, without writing any code. Just click and customise.", 
        image: "/TemplateDesigner.jpg" 
    },
    { 
        icon: IoCheckboxOutline,
        label: "#3 Content Planning", 
        subLabel: "Choose what you need: sizes, styles, and languages ensuring every adapt is perfect.", 
        image: "/CreateTOTALLY-Content-planning-02-27-2025_04_32_PM.png" 
    },
    { 
        icon: IoCheckboxOutline,
        label: "#4 Approve Without the Back-and-Forth", 
        subLabel: "Share for review in one place. Get feedback, make changes, and approve quickly.", 
        image: "/TaskNotification.jpg" 
    },
    { 
        icon: IoCheckboxOutline,
        label: "#5 Track & Optimise", 
        subLabel: "See what's working, measure results, and improve designs over time.",    
        image: "/CreateTOTALLY-Reports-Campaign-performance-02-20-2025_09_33_PM.png" 
    }
  ];
}
