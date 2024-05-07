import React from "react";
import image_1 from "../Images/image_3.jpg";
import image_2 from "../Images/Todos App.png";

function Project() {
  return (
    <>
      <div id="project" className="bg-[#061229] text-white py-10 px-10">
        <h1 className="pb-10 text-3xl font-bold text-center">
          Latest <span className="text-[#04dae5] ">Project</span>
        </h1>
        <div className="grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6  grid-flow-row place-items-center">
          <card>
            <a href="#">
              <img
                src={image_1}
                alt="image"
                className="w-[300px] h-[200px] rounded-md  transform hover:scale-75  transition duration-100  "
              />
            </a>
          </card>
          <card>
            <a href="#">
              <img
                src={image_2}
                alt="image"
                className="w-[300px] h-[200px] rounded-md  transform hover:scale-75  transition duration-100 "
              />
            </a>
          </card>
          <card>
            <a href="#">
              <img
                src={image_1}
                alt="image"
                className="w-[300px] h-[200px] rounded-md  transform hover:scale-75  transition duration-100  "
              />
            </a>
          </card>
          <card>
            <a href="#">
              <img
                src={image_1}
                alt="image"
                className="w-[300px] h-[200px] rounded-md  transform hover:scale-75  transition duration-100  "
              />
            </a>
          </card>
          <card>
            <a href="#">
              <img
                src={image_1}
                alt="image"
                className="w-[300px] h-[200px] rounded-md  transform hover:scale-75  transition duration-100  "
              />
            </a>
          </card>
          <card>
            <a href="#">
              <img
                src={image_1}
                alt="image"
                className="w-[300px] h-[200px] rounded-md   transform hover:scale-75  transition duration-100 "
              />
            </a>
          </card>
        </div>
      </div>
    </>
  );
}

export default Project;
