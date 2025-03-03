import React, { useState, ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from "@chakra-ui/react";
import MainMenu from "./components/MainMenu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PricingPage from './pages/PricingPage';
import TemplateContentCreation from './pages/TemplateContentCreation';
import LibrariesAssetManagement from './pages/LibrariesAssetManagement';
import WorkflowAutomation from './pages/WorkflowAutomation';
import PerformanceInsights from './pages/PerformanceInsights';
import AllFeatures from './pages/AllFeatures';
import LandingJoannaWiebe from './pages/LandingConcept';

interface LayoutWrapperProps {
  children: ReactNode;
}

// New LayoutWrapper component
const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <Box position="relative">
      <MainMenu />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, .25)"
        zIndex="1"
        display={isMenuExpanded ? "block" : "none"}
        pointerEvents={isMenuExpanded ? "auto" : "none"}
        onClick={() => setIsMenuExpanded(false)}
      />
      <Box position="relative" zIndex="0">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/template-content-creation" element={<TemplateContentCreation />} />
          <Route path="/libraries-asset-management" element={<LibrariesAssetManagement />} />
          <Route path="/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/performance-insights" element={<PerformanceInsights />} />
          <Route path="/all-features" element={<AllFeatures />} />
          <Route path="/landing-concept" element={<LandingJoannaWiebe />} />
          {/* Add more routes here as you create new pages */}
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;