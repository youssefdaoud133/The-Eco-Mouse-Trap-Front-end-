// // YourPage.js or wherever you want to use the component

// import React from 'react';
// // import YouTubeEmbed from './YouTubeEmbed'; // Adjust path as per your project structure

// const YourPage = () => {
//   const videoIds = ['videoId1', 'videoId2', 'videoId3']; // Replace with your actual video IDs

//   return (
//     <div className='video-list'>
//       <iframe width="560" height="315" src="https://www.youtube.com/embed/xNRJwmlRBNU?si=g_iWW65mVZrqNdSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//     </div>
//   );
// };

// export default YourPage;
import React from 'react';

const YourPage = () => {
  const videoIds = ['xNRJwmlRBNU?si=g_iWW65mVZrqNdSc', 'anotherVideoId', 'thirdVideoId']; // Replace with your actual video IDs

  return (
    <div className='video-list'>
      {videoIds.map((id) => (
        <iframe
          key={id}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
};

export default YourPage;
