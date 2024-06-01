import React from "react";
import Button from "./Button";

function ProfileCard({ artist }) {
  return (
    <div
      className="flex flex-col items-center mt-5 rounded-md px-5 py-7 sm:px-7 sm:py-8 md:px-10 lg:py-10"
      id="profileCard"
    >
      <img
        src={`http://localhost:3000/uploads/${artist.profileImg}`}
        alt="Profile"
        className="h-20 w-20 md:h-28 md:w-28 rounded-full"
      />
      <div className="mt-4 md:mt-6 flex flex-col gap-4 md:gap-5">
        <div className="flex justify-between items-center">
          <label htmlFor="">Name : </label>
          <input
            type="text"
            placeholder={artist.name}
            className="p-1 bg-gray-800 opacity-80 rounded-sm"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="">Email : </label>
          <input
            type="text"
            value={artist.email}
            placeholder={artist.email}
            disabled
            className="p-1 bg-gray-800 opacity-80 rounded-sm"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="">Phone : </label>
          <input
            type="number"
            placeholder="Enter your number"
            className="p-1 bg-gray-800 opacity-80 rounded-sm"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="">DOB : </label>
          <input
            type="date"
            className="p-1 bg-gray-800 opacity-80 rounded-sm w-[189px]"
          />
        </div>
        <Button
          type="submit"
          classname="w-full mt-2 py-3 px-6 bg-gradient-to-r from-pink-500 to-blue-900"
        >
          Update
        </Button>
      </div>
    </div>
  );
}

export default ProfileCard;