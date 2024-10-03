"use client"; // Mark the component as a Client Component

import React, { useEffect } from 'react';

// Define a type for UnityInstance
interface UnityInstance {
  SetFullscreen: (fullscreen: number) => void;
}

// Declare createUnityInstance function
declare const createUnityInstance: (
  canvas: HTMLCanvasElement,
  config: object,
  onProgress: (progress: number) => void
) => Promise<UnityInstance>;

const GreenhouseGasSection: React.FC = () => {
  useEffect(() => {
    const canvas = document.querySelector("#unity-canvas") as HTMLCanvasElement;
    const buildUrl = "/Build";
    const loaderUrl = buildUrl + "/Green House Simualtion.loader.js";

    const config = {
      arguments: [],
      dataUrl: buildUrl + "/Green House Simualtion.data",
      frameworkUrl: buildUrl + "/Green House Simualtion.framework.js",
      codeUrl: buildUrl + "/Green House Simualtion.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "The Eco Mouse Trap",
      productName: "GreenHouseSimulation",
      productVersion: "0.1",
      showBanner: unityShowBanner,
    };

    function unityShowBanner(msg: string, type: string) {
      const warningBanner = document.querySelector("#unity-warning") as HTMLElement;
      function updateBannerVisibility() {
        warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
      }
      const div = document.createElement('div');
      div.innerHTML = msg;
      warningBanner.appendChild(div);
      if (type === 'error') div.style.background = 'red';
      else if (type === 'warning') div.style.background = 'yellow';

      setTimeout(() => {
        warningBanner.removeChild(div);
        updateBannerVisibility();
      }, 5000);

      updateBannerVisibility();
    }

    const script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      createUnityInstance(canvas, config, (progress: number) => {
        const progressBar = document.querySelector("#unity-progress-bar-full") as HTMLElement;
        progressBar.style.width = 100 * progress + "%";
      }).then((unityInstance: UnityInstance) => {
        const loadingBar = document.querySelector("#unity-loading-bar") as HTMLElement;
        loadingBar.style.display = "none";

        const fullscreenButton = document.querySelector("#unity-fullscreen-button") as HTMLElement;
        fullscreenButton.onclick = () => {
          unityInstance.SetFullscreen(1);
        };
      }).catch((message: string) => {
        alert(message);
      });
    };

    document.body.appendChild(script);

    const resizeCanvas = () => {
      if (canvas) {
        const aspectRatio = 16 / 9;  // Example aspect ratio
        const containerWidth = window.innerWidth * 0.95;  // Adjust to 95% of the screen width
        const containerHeight = window.innerHeight * 0.85; // Adjust to 85% of the screen height

        if (containerWidth / aspectRatio > containerHeight) {
          // Too wide, scale based on height
          canvas.style.width = `${containerHeight * aspectRatio}px`;
          canvas.style.height = `${containerHeight}px`;
        } else {
          // Too tall, scale based on width
          canvas.style.width = `${containerWidth}px`;
          canvas.style.height = `${containerWidth / aspectRatio}px`;
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
<div
  id="unity-container"
  className="unity-desktop"
  style={{
    display: 'flex',              // Flexbox layout
    justifyContent: 'center',      // Centers horizontally
    alignItems: 'center',          // Centers vertically
    width: '100%',                 // Full width
    height: '100vh',               // Full viewport height
    maxWidth: '100%',              // Avoid overflow horizontally
    overflow: 'hidden',            // Ensure no overflow
  }}
>      <canvas id="unity-canvas" tabIndex={-1}></canvas>
      <div id="unity-loading-bar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full"></div>
        </div>
      </div>
      <div id="unity-warning"></div>

    </div>
      <div id="unity-footer">
          <div id="unity-fullscreen-button"></div>
          <div id="unity-build-title">GreenHouseSimulation</div>
      </div>
      </>
  );
};

export default GreenhouseGasSection;
