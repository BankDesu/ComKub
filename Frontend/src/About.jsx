import React from "react";

function About() {
  return (
    <div className="about-section mt-5 h-64 w-full relative">
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

      <div className="about z-20 text-white absolute top-10 left-2.5% h-48 flex">
        <div className="about1" style={{ marginLeft: "5rem" }}>
          <h3 style={{ marginBottom: "3rem", fontWeight: "600" }}>
            เกี่ยวกับ Comkub
          </h3>
          <a
            href="https://youtu.be/xvFZjo5PgG0"
            target="_blank"
            style={{ color: "white" }}
          >
            เกี่ยวกับเรา
          </a>
          <p style={{ marginTop: "2rem" }}>ติดตามเรา</p>
          <div
            className="contact flex"
            style={{
              marginTop: "1rem",
              height: "2.5rem",
              width: "17rem",
              border: "solid",
              backgroundColor: "white",
              borderRadius: "15px",
            }}
          >
            <img
              className="fb"
              style={{
                marginTop: "0.1rem",
                marginLeft: "1rem",
                width: "2rem",
                height: "2rem",
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
            />
            <img
              className="x"
              style={{
                marginTop: "0.1rem",
                marginLeft: "1rem",
                width: "2rem",
                height: "2rem",
              }}
              src="https://static.vecteezy.com/system/resources/previews/027/395/710/non_2x/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png"
            />
            <img
              className="ig"
              style={{
                marginTop: "0.1rem",
                marginLeft: "1rem",
                width: "2rem",
                height: "2rem",
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"
            />
            <img
              className="yt"
              style={{
                marginTop: "0.1rem",
                marginLeft: "1.2rem",
                width: "2rem",
                height: "2rem",
                scale: "1.5",
              }}
              src="https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
            />
            <img
              className="line"
              style={{
                marginTop: "0.1rem",
                marginLeft: "1.2rem",
                width: "2rem",
                height: "2rem",
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/LINE_New_App_Icon_%282020-12%29.png"
            />
          </div>
        </div>
        <div className="about2" style={{ marginLeft: "12rem" }}>
          <h4>ผู้จัดทำ</h4>
          <p style={{ marginTop: "1.5rem" }}>ปณชัย สุวิมลโอภาส</p>
          <p style={{ marginTop: "0.25rem" }}>65090500443</p>
          <p style={{ marginTop: "1.5rem" }}>สถาปนา ตินพ </p>
          <p style={{ marginTop: "0.25rem" }}>65090500456</p>
        </div>
      </div>
    </div>
  );
}

export default About;
