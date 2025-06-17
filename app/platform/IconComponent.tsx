import React from 'react';
import * as Icons from '@/src/components/Icons';
import { IconProps } from '@chakra-ui/react';

export const iconMap = {
  OutlineFileAdd: Icons.AddDocumentIcon,
  Sitemap: Icons.SitemapIcon,
  Globe: Icons.GlobeIcon,
  Typography: Icons.TypographyIcon,
  Extension: Icons.ExtensionIcon,
  OutlinePuzzle: Icons.OutlinePuzzleIcon,
  CameraReels: Icons.CameraReelsyIcon,
  StretchHorizontal: Icons.StretchHorizontalIcon,
  GridOn: Icons.GridOnIcon,
  LayoutDashboard: Icons.LayoutDashboardIcon,
  TextWrapDisabled: Icons.TextWrapDisabledIcon,
  FolderPlus: Icons.FolderPlusIcon,
  LayerPlus: Icons.LayerPlusIcon,
  FileMedia: Icons.FileMediaIcon,
  TextSize: Icons.TypographyIcon,
  TextFields: Icons.TextFieldsIcon,
  OutlineRuleFolder: Icons.RuleFolderIcon,
  OutlineAdjustments: Icons.OutlineAdjustmentsIcon,
  PaletteBold: Icons.PaletteBoldIcon,
  Type: Icons.TypeIcon,
  CollectionPlay: Icons.CameraReelsyIcon,
  Linked: Icons.LinkedIcon,
  TextTuning: Icons.TextTuningIcon,
};

export type IconName = keyof typeof iconMap;

interface IconComponentProps extends Omit<IconProps, 'name'> {
  name: IconName;
}

const IconComponent: React.FC<IconComponentProps> = ({ name, size = "2rem", ...props }) => {
  const Icon = iconMap[name];
  return Icon ? <Icon fill="brandFuchsia.500" boxSize={size} {...props} /> : null;
};

export default IconComponent;