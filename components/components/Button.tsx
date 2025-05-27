import Link from "next/link";
import React from "react";

const Button = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link href={href} className="bg-golden hover:bg-crimson font-base font-bold tracking-wider leading-5 text-base py-2 px-6 rounded-[1px] border-none outline-none cursor-pointer text-black">
      {title}
    </Link>
  )
};

export default Button;
