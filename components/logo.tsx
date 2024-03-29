import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="z-1 absolute h-[180px] w-[360px] bg-gradient-to-r from-pink-200 via-pink-800 to-pink-200 blur-2xl dark:from-pink-800 dark:via-pink-200 dark:to-pink-800" />
      <Link href="/" rel="noopener noreferrer" className="text-center">
        <Image
          src="/balasolu_n.png"
          alt="balasolu"
          height={512}
          width={512}
          priority
          className="invert"
        />
      </Link>
    </div>
  );
};

export default Logo;
