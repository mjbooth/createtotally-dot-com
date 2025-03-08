import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion"
import { Container, Box, Heading, VStack } from "@chakra-ui/react"

interface FAQSectionProps {
  title: string;
}

export const FAQ: React.FC<FAQSectionProps> = ({
  title,
}) => {

    return (
        <Box bg="brandNeutral.500" py={12}>
            <Container maxW="container.xl" mx="auto" pt={36} pb={36} color="gray.900">
                <VStack gap={8} align="center">
                <Box textAlign="center">
                    <Heading as="h2" color="gray.900" fontSize="5xl" fontWeight="bold" textAlign="left" lineHeight={1} mb="3">
                        {title}
                    </Heading>
                </Box>
                <AccordionRoot width="4xl" collapsible defaultValue={["a"]}>
                    {items.map((item, index) => (
                        <AccordionItem key={index} value={item.value}>
                            <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                            <AccordionItemContent>{item.text}</AccordionItemContent>
                        </AccordionItem>
                    ))}
                </AccordionRoot>
                </VStack>
            </Container>
        </Box>
    )
}

const items = [
    {
        "value": "a",
        "title": "How does the automation actually work?",
        "text": "Think of CreateTOTALLY as your creative team’s **efficiency powerhouse**. This isn’t AI taking wild guesses, and it’s definitely not another rigid template system.\n\nInstead, we use **intelligent, rule-based automation** that adapts to your exact needs. Here’s the key: we **never** lock down your designs. Unlike other tools, you can **jump in, tweak, and adjust** as needed. No fixed layouts. No loss of creative control. Just **faster, smarter production at scale.**"
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
]  