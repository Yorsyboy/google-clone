import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term.trim()) return;
        router.push(`/search?term=${term.trim()}&searchType=`);
    };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          width={120}
          height={40}
          className="cursor-pointer"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
        />
        <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
            <input 
            type="text" 
            defaultValue={router.query.term} 
            ref={searchInputRef} 
            className="flex-grow w-full focus:outline-none"
            />
            <XIcon
            onClick={() => (searchInputRef.current.value = "")}
             className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" />
            <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
            <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
            <button hidden type="submit" onClick={search}></button>
        </form>
        <User className="ml-auto whitespace-nowrap"/>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
