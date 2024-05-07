import React from "react";

function Contact() {
  return (
    <>
      <div
        id="contact"
        className="flex flex-wrap bg-[#091c2a] text-white justify-center items-center py-10 px-10 sm:justify-start"
      >
        <div>
          <h1 className="text-3xl">
            Contact <span className="text-[#04dae5]"> Us</span>
          </h1>
          <p>
            Feel Free to contact us any time. We will get back to you as soon as
            we can!
          </p>
          <form action="#" className="flex flex-col gap-6 py-10">
            <input
              type="text"
              className="w-[320px] h-[40px] pl-3 text-black rounded-sm outline-none"
              placeholder="Name"
            />
            <input
              type="Email"
              className="w-[320px] h-[40px] pl-3 text-black rounded-sm outline-none"
              placeholder="Email"
            />
            <input
              type="number"
              className="w-[320px] h-[40px] pl-3 text-black rounded-sm outline-none"
              placeholder="Number"
            />
            <input
              type="Message"
              className="w-[320px] h-[40px] pl-3 text-black rounded-sm outline-none"
              placeholder="Message"
            />
            <button className="w-[320px] h-[40px] bg-black text-white hover:bg-[#04dae5] rounded-sm text-lg">
              Sent
            </button>
          </form>
        </div>
        <div className="">
          <h1 className="text-3xl py-8">Info</h1>
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-[#04dae5] text-xl pr-2">
                <i class="fa-regular fa-envelope"></i>
              </span>
              skmdashfakurrahman@gmail.com
            </div>
            <div>
              <span className="text-[#04dae5] text-xl pr-2">
                <i class="fa-solid fa-phone"></i>
              </span>
              +317278756641
            </div>
            <div>
              <span className="text-[#04dae5] text-xl pr-2">
                <i class="fa-solid fa-clock"></i>
              </span>
              11:00 AM - 12:00 PM
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
