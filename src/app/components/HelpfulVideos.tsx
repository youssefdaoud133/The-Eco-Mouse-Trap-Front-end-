// // // YourPage.js or wherever you want to use the component

// // import React from 'react';
// // // import YouTubeEmbed from './YouTubeEmbed'; // Adjust path as per your project structure

// // const YourPage = () => {
// //   const videoIds = ['videoId1', 'videoId2', 'videoId3']; // Replace with your actual video IDs

// //   return (
// //     <div className='video-list'>
// //       <iframe width="560" height="315" src="https://www.youtube.com/embed/xNRJwmlRBNU?si=g_iWW65mVZrqNdSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
// //     </div>
// //   );
// // };

// // export default YourPage;
// import React from 'react';

// const YourPage = () => {
//   const videoIds = ['xNRJwmlRBNU?si=g_iWW65mVZrqNdSc', 'anotherVideoId', 'thirdVideoId']; // Replace with your actual video IDs

//   return (
//     <div className='video-list'>
//       {videoIds.map((id) => (
//         <iframe
//           key={id}
//           width="560"
//           height="315"
//           src={`https://www.youtube.com/embed/${id}`}
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//         ></iframe>
//       ))}
//     </div>
//   );
// };

// export default YourPage;

// import React from 'react';

// const YourPage = () => {
//   const videos = [
//     { id: 'xNRJwmlRBNU?si=g_iWW65mVZrqNdSc', title: 'How To Embed YouTube Videos in React' },
//     { id: 'anotherVideoId', title: 'Another Video Title' },
//     { id: 'thirdVideoId', title: 'Third Video Title' }
//   ];

//   return (
//     <div className="video-grid">
//       {videos.map((video) => (
//         <div key={video.id} className="video-item">
//           <h3 className="video-title">{video.title}</h3>
//           <iframe
//             width="320"
//             height="180"
//             src={`https://www.youtube.com/embed/${video.id}`}
//             title={video.title}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           ></iframe>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default YourPage;


import React from 'react';

const YourPage = () => {
  const videos = [
    { id: 'xNRJwmlRBNU?si=g_iWW65mVZrqNdSc', title: 'How To Embed YouTube Videos in React' },
    { id: 'anotherVideoId', title: 'Another Video Title' },
    { id: 'thirdVideoId', title: 'Third Video Title' },
    { id: 'fourthVideoId', title: 'Fourth Video Title' },
    { id: 'fifthVideoId', title: 'Fifth Video Title' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {videos.map((video) => (
        <div key={video.id} className="text-center">
          <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
          <iframe
            className="w-full h-40" // Use Tailwind to set the width and height
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default YourPage;
