import React from "react";
import Image from "next/image";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Body() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  };

  const randomSearch = async (e) => {
    e.preventDefault();
    const ransomTerm = await fetch(
      "https://random-word-api.herokuapp.com/word?number=1"
    ).then((res) => res.json());
    if (!ransomTerm) return;
    router.push(`/search?term=${ransomTerm}&searchType=`);
  };

  return (
    <form className="flex flex-col items-center mt-40 ">
      <Image
        width={300}
        height={100}
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Google Logo"
      />
      <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 text-gray-500 mr-3" />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <MicrophoneIcon className="h-5" />
      </div>
      <div className="flex flex-col sm:flex-row w-1/2 space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
        <button onClick={search} className="btn">
          Google Search
        </button>
        <button onClick={randomSearch} className="btn">
          I&apos;m feeling lucky
        </button>
      </div>
    </form>
  );
}
