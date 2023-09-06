"use client";
import { BaseContainer } from "@/components/ui/container/BaseContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "@/components/logo";
import { IconMenu } from "@/components/ui/icons/Menu";
import { IconClose } from "@/components/ui/icons";

const navigations = [
  { name: "Comment ça marche", path: "/how-kit-works" },
  { name: "A propos", path: "/about" },
  { name: "Services", path: "/" },
  { name: "Développeurs", path: "/" },
  { name: "Contact", path: "/" },
];

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const renderNavigations = () => {
    return (
      <>
        {navigations.map((nav, index) => (
          <Link
            key={index + "_id"}
            href={nav.path}
            className="font-semibold hover:text-primary-900 duration-300"
          >
            {nav.name}
          </Link>
        ))}
      </>
    );
  };
  return (
    <div className="w-full bg-primary-400 relative">
      <div className="w-full py-4 flex flex-row items-center justify-between mx-auto max-w-7xl px-4 sm:px-0">
        <div className="flex justify-between items-center p-0 z-50">
          <Link href={"/"}>
            {" "}
            <Logo />
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          {renderNavigations()}
        </div>
        <div className="hidden lg:flex gap-3">
          <Button handleClick={(e) => {}} variant="outlined">
            Connexion
          </Button>
          <Button handleClick={(e) => {}} variant="contained">
            Inscription
          </Button>
        </div>
        {!isDropdownOpen ? (
          <div className={`lg:hidden z-50 ${!isDropdownOpen}?'rotate-180':''`}>
            <button
              onClick={toggleDropdown}
              className={
                isDropdownOpen ? "text-primary-90" : "text-primary-900"
              }
            >
              <IconMenu />
            </button>
          </div>
        ) : (
          <div className="lg:hidden z-50">
            <button
              onClick={toggleDropdown}
              className={
                isDropdownOpen ? "text-primary-90" : "text-primary-900"
              }
            >
              <IconClose className="h-10 w-10 text-primary-900" />
            </button>
          </div>
        )}
      </div>

      {isDropdownOpen && (
        <div className="lg:hidden fixed top-0 left-0 z-40 w-full h-screen bg-opacity-80 duration-300">
          <div className="bg-primary-400 shadow-lg z-50 w-full h-screen py-24">
            <div className="flex flex-col items-center justify-start gap-6 bg-white h-screen py-12">
              {renderNavigations()}

              <div className="flex flex-col gap-3">
                <Button handleClick={(e) => {}} variant="outlined">
                  Connexion
                </Button>
                <Button handleClick={(e) => {}} variant="contained">
                  Inscription
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
