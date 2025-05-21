import React from 'react';
import * as GoIcons from "react-icons/go";
import * as HiIcons from "react-icons/hi";
import * as PiIcons from "react-icons/pi";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import * as TbIcons from "react-icons/tb";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as F6Icons from "react-icons/fa6";
import * as BiIcons from "react-icons/bi";
import * as TiIcons from "react-icons/ti";

import { IconType } from 'react-icons';

const iconLibraries: { [key: string]: { [key: string]: IconType } } = {
  Go: GoIcons,
  Hi: HiIcons,
  Pi: PiIcons,
  Md: MdIcons,
  Ri: RiIcons,
  Bs: BsIcons,
  Tb: TbIcons,
  Fa: FaIcons,
  Si: SiIcons,
  F6: F6Icons,
  Bi: BiIcons,
  Ti: TiIcons,
};

export const getIcon = (iconName?: string): IconType | null => {
  if (!iconName) return null;

  const prefix = iconName.slice(0, 2);
  const library = iconLibraries[prefix];

  if (!library) {
    console.warn(`Unknown icon prefix for "${iconName}"`);
    return null;
  }

  const IconComponent = library[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in ${prefix}Icons`);
    return null;
  }

  return IconComponent;
};

export const renderIcon = (iconName?: string) => {
  const IconComponent = getIcon(iconName);
  return IconComponent ? React.createElement(IconComponent) : null;
};