import React from "react";
import images from "../Images/img_30.jpg";
import Resume from "../Images/Ashfakur Resume.pdf";

function Home() {
  return (
    <>
      <div
        id="home"
        className="bg-[#091c2a] text-white grid md:grid-cols-2 sm:grid-cols-1 px-20 py-10 gap-5 place-items-center "
      >
        <div>
          <span className="text-4xl">Hi,</span>
          <span className="text-xl">I am </span>
          <span className="text-4xl">Ashfakur Rahman</span>
          <br />
          <h1 className="text-4xl text-[#04dae5]">Frontend Developer....!</h1>
          <p className="py-6">
            <span className="text-3xl text-[#04dae5]">L</span>orem ipsum dolor
            sit amet consectetur adipisicing elit. Soluta accusamus saepe omnis
            et quam excepturi eveniet similique maxime placeat, dolorum amet
            cumque dignissimos necessitatibus laboriosam hic sequi quibusdam
            sint quia laborum maiores, perferendis consequuntur.
          </p>
          <div className="flex items-center gap-3 text-2xl pb-5">
            <a
              href="https://www.linkedin.com/in/mdashfakurrahman/"
              className="text-[#04dae5] transform hover:scale-125  transition duration-100"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/md-asfak"
              className="text-[#04dae5] transform hover:scale-125  transition duration-100"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/___ashfakur_rahman____/"
              className="text-[#04dae5] transform hover:scale-125  transition duration-100"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
          <button className="bg-[#04dae5] rounded-sm p-2 cursor-pointer  hover:bg-white hover:text-[#04dae5]">
            <a href={Resume} download={Resume}>
              Download CV
            </a>
          </button>
        </div>
        <div>
          <img
            src={images}
            alt="image"
            className="w-[26rem] h-[26rem] object-cover "
            style={{ borderRadius: "63% 37% 37% 63%" }}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
