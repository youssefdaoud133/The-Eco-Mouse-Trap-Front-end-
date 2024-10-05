"use client"; // Mark the component as a Client Component

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ImageCard: React.FC<{ imageSrc: string; title: string }> = ({ imageSrc, title }) => (
  <Card className="w-full max-w-2xl mx-auto shadow-lg">
    <img src={imageSrc} alt={title} className="w-full h-96 object-cover rounded-t" />
    <CardContent>
      <Typography variant="h6" component="div" className="text-center">
        {title}
      </Typography>
    </CardContent>
  </Card>
);

const TwoImageDisplay: React.FC = () => {
  const images = [
    {
      src: './1.jpeg', // Replace with your image path
      title: 'Heat map of concentration of co2 over 9 years',
    },
    {
      src: './2.jpeg', // Replace with your image path
      title: 'Heat map of concentration of ch4 over 9 years',
    },
  ];

  return (
    <div className="flex flex-col space-y-8 justify-center items-center p-4">
      {images.map((image, index) => (
        <ImageCard key={index} imageSrc={image.src} title={image.title} />
      ))}
    </div>
  );
};

export default TwoImageDisplay;
