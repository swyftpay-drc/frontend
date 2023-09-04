"use client";
import { BaseContainer } from "@/components/ui/container/BaseContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { IconMenu } from "@/components/ui/icons/Menu";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="w-full bg-primary-400">
      <div className="w-full py-4 flex flex-col md:flex-row md:items-center justify-between mx-auto max-w-7xl px-4 sm:px-0">
        <div>
          <Link href={"/"}>
            {" "}
            <Logo />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="text-primary-900">
            <IconMenu />
          </button>
        </div>
        <div className="flex gap-6">
          <Link
            href={""}
            className="font-bold text-gray-800 hover:text-primary-900 duration-300"
          >
            Comment ça marche
          </Link>
          <Link
            href={"/about"}
            className="font-bold text-gray-800 hover:text-primary-900 duration-300"
          >
            A propos
          </Link>
          <Link
            href={""}
            className="font-bold text-gray-800 hover:text-primary-900 duration-300"
          >
            Services
          </Link>
          <Link
            href={""}
            className="font-bold text-gray-800 hover:text-primary-900 duration-300"
          >
            Développeurs
          </Link>
          <Link
            href={""}
            className="font-bold text-gray-800 hover:text-primary-900 duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-3">
          <Button
            handleClick={(e) => {}}
            variant="outlined"
            className="pt-0 pb-0"
          >
            Connexion
          </Button>
          <Button handleClick={(e) => {}}>Inscription</Button>
        </div>
      </div>
    </div>
  );
}
