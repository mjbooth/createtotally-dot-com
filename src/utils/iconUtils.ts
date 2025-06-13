import { IconType } from 'react-icons';
import { SiFigma, SiAdobeindesign, SiAdobeaftereffects, SiAdobephotoshop, SiAdobeillustrator, SiHtml5 } from 'react-icons/si';
import { FaPencilRuler, FaBolt } from 'react-icons/fa';
import { BiSolidImageAdd, BiSolidBarChartAlt2 } from 'react-icons/bi';
import { MdAccountTree, MdViewInAr, MdCompareArrows } from 'react-icons/md';
import { RiFunctionAddFill, RiShieldFlashFill } from 'react-icons/ri';
import { TbCirclePlusFilled } from 'react-icons/tb';
import { TiStarFullOutline } from 'react-icons/ti';

export const iconMap = {
  SiFigma,
  SiAdobeindesign,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiHtml5,
  FaPencilRuler,
  BiSolidImageAdd,
  FaBolt,
  MdAccountTree,
  RiFunctionAddFill,
  BiSolidBarChartAlt2,
  RiShieldFlashFill,
  TbCirclePlusFilled,
  MdViewInAr,
  TiStarFullOutline,
  MdCompareArrows,
};

export type IconName = keyof typeof iconMap;

export const getIcon = (name?: string): IconType | undefined => {
  if (!name || !(name in iconMap)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[iconUtils] Unknown icon: "${name}"`);
    }
    return undefined;
  }
  return iconMap[name as IconName];
};
