import React from "react";
import images_2 from "../Images/image_3.jpg";

function About() {
  return (
    <>
      <div
        id="about"
        className="bg-[#061229] text-white grid md:grid-cols-2 sm:grid-cols-1 p-10 items-center gap-5"
      >
        <div>
          <img
            src={images_2}
            alt="image2"
            className="w-[80%] h-[30rem]  "
            style={{ borderRadius: "63% 37% 37% 63%/ 44% 37% 63% 54%" }}
          />
        </div>
        <div>
          <h1 className="text-3xl">
            About <span className="text-[#04dae5]">Me</span>
          </h1>
          <h2 className="text-xl pt-5">Front-End Development</h2>
          <p>
            <span className="text-3xl text-[#04dae5]">L</span>orem ipsum dolor
            sit amet consectetur adipisicing elit. Dicta eum rerum sint aut
            omnis necessitatibus maiores harum cupiditate, assumenda, incidunt
            magnam deleniti labore consequuntur voluptatum dolorum eos nisi
            excepturi quas! Officia perspiciatis illo numquam voluptates
            voluptatem esse minima, explicabo ipsum fugit corporis sed quis
            aperiam voluptas ducimus fuga debitis ipsa?
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
