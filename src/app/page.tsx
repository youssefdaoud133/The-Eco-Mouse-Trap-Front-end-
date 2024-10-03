import Link from 'next/link'; // Import Link from next/link

export default function Home() {
  return (
    <>
      <div className="bg-[#FFFAE5] h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Section */}
        <div className="text-center flex flex-col justify-center space-y-6 bg-[#FFFAE5] p-10 h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900">
            ``Greener Future``
          </h1>
          <Link href="/Explore" className="bg-yellow-400 text-green-900 py-2 px-4 rounded-full font-semibold 
            transform transition-transform duration-200 ease-in-out 
            hover:scale-105 hover:shadow-lg">
            EXPLORE OUR IMPACT
         
          </Link>

        </div>
        {/* Right Section (Grid of 4 Icons/Images) */}
        <div className="grid grid-cols-2 grid-rows-2 gap-0 h-full">
  <div className="bg-[#FFCC31] flex justify-center items-center">
    <div className="relative w-full h-0 pb-[100%]"> {/* 1:1 Aspect Ratio */}
      <iframe 
        src="https://lottie.host/embed/ff737fd3-583c-43a8-aba0-6a54b9c0f7c3/87F6Fc9otV.json"
        className="absolute inset-0 w-full h-full"
        style={{ border: "none" }}
      ></iframe>
    </div>
  </div>
  <div className="bg-[#B6EFD4] flex justify-center items-center">
    <div className="relative w-full h-0 pb-[100%]"> {/* 1:1 Aspect Ratio */}
      <iframe 
        src="https://lottie.host/embed/2a9eabe6-a0e8-427e-b726-a9b9fa25aa52/fVv2QrcxuZ.json"
        className="absolute inset-0 w-full h-full"
        style={{ border: "none" }}
      ></iframe>
    </div>
  </div>
  <div className="bg-[#37818A] flex justify-center items-center">
    <div className="relative w-full h-0 pb-[100%]"> {/* 1:1 Aspect Ratio */}
      <iframe 
        src="https://lottie.host/embed/84d6c3aa-369d-41a3-baf3-2a4c18beaa95/Zy9WvXfHPz.json"
        className="absolute inset-0 w-full h-full"
        style={{ border: "none" }}
      ></iframe>
    </div>
  </div>
  <div className="bg-[#FAC933] flex justify-center items-center">
    <div className="relative w-full h-0 pb-[100%]"> {/* 1:1 Aspect Ratio */}
      <iframe 
        src="https://lottie.host/embed/5d6ca22a-763d-44f4-99c0-17d27cc12b23/TB0T0g8qel.json"
        className="absolute inset-0 w-full h-full"
        style={{ border: "none" }}
      ></iframe>
    </div>
  </div>
</div>

      </div>

      <div className="bg-[#FFFFFF] min-h-screen"></div>
    </>
  );
}
