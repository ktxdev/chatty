import React from "react";
import Avatar from "./Avatar";

function Content() {
  return (
    <div className="w-full h-full">
      <div className="shadow-sm bg-slate-200 flex items-center gap-4 px-4 py-2">
        <Avatar size={11} src="/profile.jpeg" alt="profile" />
        <div>
          <h3 className="font-semibold">Sean Huvaya</h3>
          <p className=" text-sm font-light">Status goes here</p>
        </div>
      </div>
      <div className=" bg-stone-100 overflow-y-scroll h-[87.5%] ßflex flex-col">
        {new Array(10).fill(1).map((el) => (
          <>
            <p className="bg-white mx-4 my-2 px-3 py-2 max-w-4xl float-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quibusdam optio animi quia! Tenetur doloribus reprehenderit ipsum
              in libero architecto nesciunt illum ab eligendi accusamus ducimus,
              minus iure nemo. Ipsam.
            </p>
            <p className="bg-white mx-4 my-2 px-3 py-2 max-w-4xl float-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quibusdam optio animi quia! Tenetur doloribus reprehenderit ipsum
              in libero architecto nesciunt illum ab eligendi accusamus ducimus,
              minus iure nemo. Ipsam.
            </p>
          </>
        ))}
      </div>
      <div className="bg-slate-200 px-2.5 py-3">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full px-3 py-2 rounded-md placeholder:text-gray-600 focus:outline-none"
        />
      </div>
    </div>
  );
}

export default Content;
