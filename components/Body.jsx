import React from "react";
import Image from "next/image";
import { MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'

export default function Body() {
  return (
    <form className="flex flex-col items-center mt-40 ">
      <Image
        width={300}
        height={100}
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      />
      <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 text-gray-500 mr-3" />
        <input type="text" className="flex-grow focus:outline-none" />
        <MicrophoneIcon className="h-5" />
      </div>
      <div className="flex flex-col sm:flex-row w-1/2 space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
        <button className="btn">Google Search</button>
        <button className="btn">I'm feeling lucky</button>
      </div>
    </form>
  );
}
