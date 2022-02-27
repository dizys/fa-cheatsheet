import Image from "next/image";

export const Footer = () => (
  <div className="my-4 text-center text-sm text-gray-300">
    <div className="mt-2">
      <a
        className="opacity-30 hover:opacity-60"
        href="https://github.com/dizys/fa-cheatsheet"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/github.svg"
          width={24}
          height={24}
          alt="Github"
          objectFit="contain"
        />
      </a>
    </div>
    All rights reserved &copy; 2022
  </div>
);
