// /app/get-started/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get a CreateTOTALLY Demo - Transform Your Creative Workflow',
  description: "Get a personalized CreateTOTALLY demo and discover how to automate creative production. See why world's biggest brands choose our platform.",
  alternates: {
    canonical: 'https://www.createtotally.com/get-started',
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}