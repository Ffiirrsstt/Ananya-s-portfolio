"use client";

import { useState } from "react";
import { FaListUl } from "react-icons/fa6";
import Link from "next/link";

function Nav() {
  const [itemNav, setItemNav] = useState(false);
  return (
    <>
      {/* เกี่ยวกับ Nav */}
      <div className="fixed w-full z-10">
        <nav className="bg-black p-4 md:px-10">
          <div className="flex justify-between items-center">
            <Link href="/">
              <h1 className="text-white text-2xl font-bold cursor-pointer">
                Portfolio
              </h1>
            </Link>

            <div className="hidden md:flex space-x-12">
              <Link
                href="/"
                className=" text-gray-300 hover:text-white cursor-pointer"
              >
                Home
              </Link>
              <Link
                href="/About"
                className=" text-gray-300 hover:text-white cursor-pointer"
              >
                About
              </Link>
              <Link
                href="/Skills"
                className=" text-gray-300 hover:text-white cursor-pointer"
              >
                Skills
              </Link>
              <Link
                href="/Education"
                className=" text-gray-300 hover:text-white cursor-pointer"
              >
                Education
              </Link>
              <Link
                href="/Contact"
                className=" text-gray-300 hover:text-white cursor-pointer"
              >
                Contact
              </Link>
            </div>

            {/* ปุ่ม เวลาหน้าจอเล็ก กดเพื่อเลือกแท็ปไปหน้าต่าง ๆ */}
            <button
              className="md:hidden text-gray-300 focus:text-white "
              onClick={() => setItemNav(!itemNav)}
            >
              <FaListUl className="w-5 h-5 cursor-pointer" />
            </button>
          </div>
        </nav>

        {/* รายการ Nav ตอนที่ขนาดหน้าจอเล็ก */}
        {itemNav && (
          <div className="md:hidden ">
            <div className="bg-black p-4 space-y-2">
              <Link
                href="/"
                className="block text-gray-300 hover:text-white cursor-pointer"
              >
                Home
              </Link>
              <Link
                href="/About"
                className="block text-gray-300 hover:text-white cursor-pointer"
              >
                About
              </Link>
              <Link
                href="/Skills"
                className="block text-gray-300 hover:text-white cursor-pointer"
              >
                Skills
              </Link>
              <Link
                href="/Education"
                className="block text-gray-300 hover:text-white cursor-pointer"
              >
                Education
              </Link>
              <Link
                href="/Contact"
                className="block text-gray-300 hover:text-white cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* แทนตำแหน่ง Nav ใช้จัดหน้าเว็ป */}
      <div className="w-full py-4">
        <h1 className="text-white text-2xl font-bold">Portfolio</h1>
      </div>
    </>
  );
}

export default Nav;
