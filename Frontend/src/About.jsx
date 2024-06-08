import React from "react";

function About() {
  return (
    <div className="bg-zinc-600/60 border-y-2 text-white about-section mt-20 h-full w-full relative grid grid-row-3">
      {/* <div>
        <svg
          className="wave w-full absolute top-0 z-10"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="bg">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(130, 158, 249, 0.06)" }}
              ></stop>
              <stop
                offset="50%"
                style={{ stopColor: "rgba(76, 190, 255, 0.6)" }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "rgba(115, 209, 72, 0.2)" }}
              ></stop>
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
           s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use href="#wave" opacity="0.3">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="10s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use href="#wave" opacity="0.6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use href="#wave" opacity="0.9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div> */}

      <div className="w-full h-12 z-20 mt-5 mb-2 flex">
        <div className="about1 flex ml-24 pt-1">
          <h3 className="text-xl font-light">About Comkub</h3>
          <a className="ml-28 text-lg font-thin" href="" target="_blank">
            about us
          </a>
        </div>
      </div>
      <div className="z-20 h-28 mx-16 border-t-2 border-white">
        <p className="text-center pt-3 text-lg">Follow us</p>
        <div className="pt-4 justify-center flex">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png"
            className="w-8 h-8 invert mx-3"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/1077/1077041.png"
            className="w-8 h-8 invert mx-3"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png"
            className="w-7 h-7 mt-1 invert mx-3"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/1077/1077046.png"
            className="w-8 h-8 invert mx-3"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/3046/3046120.png"
            className="w-8 h-8 invert mx-3"
            alt=""
          />
        </div>
      </div>
      <div className="z-20 h-full">
        <div className="text-center mb-8 border-t-2 border-white mx-[30rem]">
          <h4 className="pt-3 text-lg">TEAM</h4>
          <div className="flex justify-center">
            <div className="pr-8 text-center">
              <p style={{ marginTop: "1.5rem" }}>ปณชัย สุวิมลโอภาส</p>
              <p style={{ marginTop: "0.25rem" }}>65090500443</p>
            </div>
            <div className="pl-8 text-center">
              <p style={{ marginTop: "1.5rem" }}>สถาปนา ตินพ </p>
              <p style={{ marginTop: "0.25rem" }}>65090500456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
