import { IconType } from 'react-icons';

export interface Integration {
  src: string;
  text: string;
  colour: string;
}

export interface AccordionItem {
  value: string;
  title: string;
  text: string;
}

export interface Step {
  icon: IconType;
  label: string;
  subLabel: string;
  image: string;
}