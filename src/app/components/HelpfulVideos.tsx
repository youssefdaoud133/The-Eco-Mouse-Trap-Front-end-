"use client";
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Card } from "flowbite-react";
import { Typography } from '@mui/material';


const YourPage = () => {
  const [alignment, setAlignment] = React.useState('kids'); // Default alignment is 'kids'

  const kidsVideos = [
    { id: '7IwPFXzLH8c', title: 'What is the Greenhouse Effect? - The Environment for Kids (Updated Version)' },
    { id: 'Y3gqoDUtmt4', title: 'Global Warming - The End Game | The Dr. Binocs Show | Best Learning Videos For Kids | Peekaboo Kidz' },
    { id: '5tC8OOxOFEk', title: 'Climate Zones of the Earth - The Dr. Binocs Show | Best Learning Videos For kids | Dr Binocs' },
    { id: 'MhS9FNdcgLU', title: 'The Scary Mr. Greenhouse Gas! | Climate Change | Save the Environment | Pinkfong Songs for Kids' },
    { id: 'qpQPEkc3cVE', title: 'Climate Change Experiments For Kids' },
    { id: '6x8IuJlcXTk', title: 'What If All Trees Were Cut Down? | Earth Without Trees | The Dr Binocs Show | Peekaboo Kidz' },
    { id: '31SCn3bcTHc', title: 'Can We Stop Climate Change? | Global Warming | The Dr Binocs Show | Peekaboo Kidz' },
    { id: 'PBkmOhOk8nk', title: 'Eco-Friendly Habits | What Is Sustainable Living? | The Dr Binocs Show | Peekaboo Kidz' },
    { id: 'QybeIE8eXSs', title: 'What is Earth Day? Education Video for Kids - Kids Academy' },
  ];

  const adultsVideos = [
    { id: 'jAa58N4Jlos', title: 'Climate Change - A Short Film [4K]' },
    { id: 'EvFx7Q3UyP4', title: 'Heavy industry and global greenhouse gas emissions - What does the future hold? | DW Documentary' },
    { id: 'G4H1N_yXBiA', title: 'Causes and Effects of Climate Change | National Geographic' },
    { id: '2Jq23mSDh9U', title: 'Sir David Attenborough Presents: Breaking Boundaries: The Science of Our Planet | Doc Preview' },
    { id: 'a9yO-K8mwL0', title: 'Climate Change: Your carbon footprint explained - BBC News' },
    { id: 'fkX-H24Chfw', title: 'Hydrogen: fuel of the future?' },
    { id: '73npEw0Amhk', title: 'Climate heroes - carbon neutral living | DW Documentary (Environment documentary)' },
    { id: 'afPVy0yiLRw', title: 'The climate crisis: Can smart ideas save the planet? | DW Documentary' },
    { id: 'D9xFFyUOpXo', title: 'Before the Flood - Trailer | National Geographic' },
    { id: '64R2MYUt394', title: 'David Attenborough: A Life on Our Planet | Official Trailer | Netflix' },
  ];
  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  const videosToShow = alignment === 'kids' ? kidsVideos : adultsVideos;

  return (
    <div className="p-6 space-y-12">
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="kids">Kids</ToggleButton>
        <ToggleButton value="adults">Adults</ToggleButton>
      </ToggleButtonGroup>

      <section>
        {/* <h2 className="text-2xl font-bold mb-4">
          {alignment === 'kids' ? 'Kids Videos' : 'Adult Videos'}
        </h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videosToShow.map((video) => (
            <Card
              key={`https://www.youtube.com/embed/${video.id}`}
              id="unity-container"

              className="max-w-sm unity-build-title unity-desktop"
             
            >

              <div className="mt-2 mb-2 unity-build-title unity-desktop">
                <iframe
                  className="w-full h-60 "
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              {/* <Typography 
                  variant="h6" 
                  component="div" 
                  color: theme.palette.text.primary,

                  className="tracking-tight text-gray-900 dark:text-white"
                >
                {video.title}
              </Typography> */}
               <div id="unity-build-title">{video.title}</div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default YourPage;