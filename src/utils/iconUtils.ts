import { IconType } from 'react-icons';

export const iconMap: Record<string, IconType | string> = {
  Figma: '/public/Figma.svg',
  InDesign: '/public/InDesign.svg',
  AfterEffects: '/public/AfterEffects.svg',
  EasyTemplating: '/public/PencilRuler.svg',
  CreativeAutomation: '/public/CreativeAutomation.svg',
  WorkflowAutomation: '/public/WorkflowAutomation.svg',
  Libraries: '/public/Libraries.svg',
  Performance: '/public/Performance.svg',
  WaysToEngage: '/public/Star.svg',
  CompareArrows: '/public/CompareArrows.svg',
  Overview: '/public/Eye.svg',
};

export type IconName = keyof typeof iconMap;

export const getIcon = (name?: string): IconType | string | undefined => {
  if (!name || !(name in iconMap)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[iconUtils] Unknown icon: "${name}"`);
    }
    return undefined;
  }
  return iconMap[name as IconName];
};
