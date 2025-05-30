// src/data/features/index.ts

import { FeaturePageData } from '@/src/types/feature';
import { EasyTemplatingPageData } from './easy-templating';
import { CreativeAutomationPageData } from './creative-automation';
import { WorkflowAutomationPageData } from './workflow-automation';
import { LibrariesAndAssetManagementPageData } from './libraries-and-assetmanagement';
import { PerformanceAndInsightsPageData } from './performance-and-insights';

export const featureDataBySlug: Record<string, FeaturePageData> = {
  'easy-templating': EasyTemplatingPageData,
  'creative-automation': CreativeAutomationPageData,
  'workflow-automation': WorkflowAutomationPageData,
  'libraries-and-asset-management': LibrariesAndAssetManagementPageData,
  'performance-insights': PerformanceAndInsightsPageData,
};

export type FeatureSlug = keyof typeof featureDataBySlug;