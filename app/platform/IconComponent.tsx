import React from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { FaSitemap, FaGlobeAmericas } from 'react-icons/fa';
import { TbTypography, TbTextWrapDisabled, TbTextSize } from 'react-icons/tb';
import { MdExtension, MdGridOn, MdTextFields, MdOutlineRuleFolder } from 'react-icons/md';
import { HiOutlinePuzzle, HiOutlineAdjustments } from 'react-icons/hi';
import { BsCameraReels, BsCollectionPlay } from 'react-icons/bs';
import { LuStretchHorizontal, LuLayoutDashboard } from 'react-icons/lu';
import { FiFolderPlus, FiType } from 'react-icons/fi';
import { BiLayerPlus } from 'react-icons/bi';
import { VscFileMedia } from 'react-icons/vsc';
import { PiPaletteBold } from 'react-icons/pi';

const iconMap = {
  AiOutlineFileAdd,
  FaSitemap,
  FaGlobeAmericas,
  TbTypography,
  MdExtension,
  HiOutlinePuzzle,
  BsCameraReels,
  LuStretchHorizontal,
  MdGridOn,
  LuLayoutDashboard,
  TbTextWrapDisabled,
  FiFolderPlus,
  BiLayerPlus,
  VscFileMedia,
  TbTextSize,
  MdTextFields,
  MdOutlineRuleFolder,
  HiOutlineAdjustments,
  PiPaletteBold,
  FiType,
  BsCollectionPlay,
};

export type IconName = keyof typeof iconMap;

interface IconComponentProps extends React.SVGAttributes<SVGElement> {
  name: IconName;
  size?: string | number;
}

const IconComponent: React.FC<IconComponentProps> = ({ name, size = '2rem', ...props }) => {
  const Icon = iconMap[name];
  return Icon ? <Icon size={size} {...props} /> : null;
};

export default IconComponent;

export { iconMap };