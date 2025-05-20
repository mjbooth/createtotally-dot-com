// src/data/platform/index.ts

import { FigmaPageData } from './figma';
import { InDesignPageData } from './indesign';
import { AfterEffectsPageData } from './after-effects';

export const platformDataBySlug = {
  'figma-creative-automation': FigmaPageData,
  'adobe-indesign-automation': InDesignPageData,
  'adobe-after-effects-automation': AfterEffectsPageData,
};

export type PlatformSlug = keyof typeof platformDataBySlug;
export type PlatformPageData = typeof FigmaPageData | typeof InDesignPageData | typeof AfterEffectsPageData;