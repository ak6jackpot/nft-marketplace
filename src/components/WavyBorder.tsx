import React from "react";

export default function WavyBorder(props: any) {
  const { color = "white", inverted = false } = props;
  const wavyBorderSVG = `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <path d="M0 20 Q 25 40, 50 20 T 100 20 T 150 20 T 200 20 T 250 20 T 300 20 T 350 20 T 400 20 V 180 Q 375 160, 350 180 T 300 180 T 250 180 T 200 180 T 150 180 T 100 180 T 50 180 T 0 180 V 20 Z" fill='${color}'/>
    </svg>`)}`;

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[70px] bg-black">
        {!inverted && (
          <div
            className="p-8 w-full"
            style={{
              backgroundImage: `url("${wavyBorderSVG}")`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "400px 200px",
            }}
          />
        )}
        {inverted && (
          <div
            className="p-8 w-full rotate-180"
            style={{
              backgroundImage: `url("${wavyBorderSVG}")`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "400px 200px",
            }}
          />
        )}
      </div>
    </>
  );
}
