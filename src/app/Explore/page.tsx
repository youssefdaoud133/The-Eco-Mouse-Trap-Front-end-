"use client"
// components/Explore.tsx
import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';

import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import ChatIcon from '@mui/icons-material/Chat';
import LayersIcon from '@mui/icons-material/Layers';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import type { Router, Navigation } from '@toolpad/core';
// import components
import HelpfulVideos from '@/app/components/HelpfulVideos'; // Your custom components
import Visualization from '@/app/components/Visualization';
import AiChatbot from '@/app/components/AiChatbot';
import DataVisualization from '@/app/components/DataVisualization';
import PublicShare from '@/app/components/PublicShare'
// import DataAnalysis from './components/DataAn alysis';
const COMPONENT_MAP: { [key: string]: React.FC } = {
  '/getting-start/helpful-videos': HelpfulVideos,
  '/getting-start/visualization': Visualization,
  '/getting-start/ai-chatbot': AiChatbot,
  '/data-exploration/data-visualization': DataVisualization,
  // '/data-exploration/data-analysis': DataAnalysis,
  '/community/public-share' : PublicShare,
  // Add other paths with their corresponding components
};

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'getting-start',
    title: 'Getting start',
    icon: <DashboardIcon />,
    children: [
      {
        segment: 'helpful-videos',
        title: 'Helpful Videos',
        icon: <VideoLibraryIcon />,
      },
      {
        segment: 'visualization',
        title: 'Visualization',
        icon: <ThreeDRotationIcon />,
      },   
      {
        segment: 'ai-chatbot',
        title: 'Ai Chatbot',
        icon: <ChatIcon />,
      },
    ],
  },
  {
    segment: 'data-exploration',
    title: 'Data Exploration',
    icon: <StorageRoundedIcon />,
    children: [
      {
        segment: 'data-visualization',
        title: 'Data Visualization',
        icon: <MapRoundedIcon />,
      }, 
      {
        segment: 'data-analysis',
        title: 'Data Analysis',
        icon: <QueryStatsRoundedIcon />,
      },
    ],
  },
  {
    segment: 'community',
    title: 'Community',
    icon: <Diversity3RoundedIcon />,
    children: [
      {
        segment: 'public-share',
        title: 'Public Share',
        icon: <CommentRoundedIcon />,
      }, 
      {
        segment: 'create-issue',
        title: 'Create Issue',
        icon: <AddCircleOutlineRoundedIcon />,
      },
      {
        segment: 'issues',
        title: 'Issues',
        icon: <ReportGmailerrorredRoundedIcon />,
      },
    ],
  },
  // {
  //   kind: 'divider',
  // },
  // {
  //   kind: 'header',
  //   title: 'Analytics',
  // },
  // {
  //   segment: 'reports',
  //   title: 'Reports',
  //   icon: <BarChartIcon />,
  //   children: [
  //     {
  //       segment: 'sales',
  //       title: 'Sales',
  //       icon: <DescriptionIcon />,
  //     },
  //     {
  //       segment: 'traffic',
  //       title: 'Traffic',
  //       icon: <DescriptionIcon />,
  //     },
  //   ],
  // },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  const ComponentToRender = COMPONENT_MAP[pathname] || HelpfulVideos;

  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <ComponentToRender  />
    </Box>
  );
}

const Explore: React.FC = () => {
  const [pathname, setPathname] = React.useState('/dashboard');

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="" alt="" />,
        title: 'The eco mouse trap',
      }}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>
        <DemoPageContent  pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
};

export default Explore;
