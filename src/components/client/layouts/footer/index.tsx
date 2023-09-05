"use client";
import { Logo } from "@/components/logo";
import { BaseContainer } from "@/components/ui/container/BaseContainer";
import { IFooterMenus, children } from "@/types/base";
import Link from "next/link";
import React, { useState } from "react";
import {
  IconFacebook,
  IconLinkedin,
  IconMail,
  IconPlay,
  IconTwitter,
} from "@/components/ui/icons";
const footerMenus: IFooterMenus[] = [
  {
    id: 1,
    subSectionTitle: "Entreprise",
    menus: [
      {
        name: "A propos",
        path: "/",
      },
      {
        name: "Service",
        path: "/",
      },
      {
        name: "Développeurs",
        path: "/",
      },
      {
        name: "Contact",
        path: "/",
      },
    ],
  },
  {
    id: 2,
    subSectionTitle: "Légale",
    menus: [
      {
        name: "Politiques de confidentialité",
        path: "/",
      },
      {
        name: "Mentions légales",
        path: "/",
      },
      {
        name: "Conditions d'utilisation",
        path: "/",
      },
    ],
  },
  {
    id: 3,
    subSectionTitle: "Ressources",
    menus: [
      {
        name: "Documentation",
        path: "/",
      },
      {
        name: "Inscription",
        path: "/",
      },
      {
        name: "Connexion",
        path: "/",
      },
    ],
  },
];
export type FooterProps = {
  children?: children;
  menus: IFooterMenus[];
};
const Footer = () => {
  const [menus, setMenus] = useState<IFooterMenus[]>(footerMenus);
  const renderFooterMenus = () => {
    return (
      <>
        {menus?.map((menu, index) => (
          <div className="flex flex-col gap-1" key={`${index}_id`}>
            <h6 className="ml-4 text-lg font-bold text-primary-900">
              {menu.subSectionTitle}
            </h6>
            {menu.menus.map((item, i) => (
              <Link
                href={item.path}
                className={`flex items-center hover:text-primary-900 duration-300 ${
                  i > 0 ? `-mt-2` : `mt-4`
                }`}
                key={`${index}_id${i}`}
              >
                <span>
                  <IconPlay />
                </span>
                <span className="text-text-primary font-medium">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        ))}
      </>
    );
  };
  return (
    <>
      <div className="bg-primary-800/5 h-3/6 pt-14 pb-14">
        <BaseContainer>
          <div className="">
            <div className=" grid grid-cols-1 gap-6 md:flex md:justify-between lg:flex lg:justify-between">
              <div className="flex  flex-col gap-6 md:w-1/4 lg:w-1/4">
                <div className="pr-12 sm:pr-4">
                  <h2 className="text-primary-900 text-2xl font-bold ml-3 md:-ml-0">
                    Swiftpay
                  </h2>
                </div>
                <p className="ml-4 pr-8 md:-ml-0 md:-ml-0 w-full">
                  Lorem ipsum dolor sit amet consectetur. Volutpat consectetur
                  interdum tincidunt morbi en.
                </p>
                <address className="hidden md:block">
                  <Link href={"contact@swyftpay.com"} className="flex gap-3">
                    <span>
                      {" "}
                      <IconMail />
                    </span>
                    <span>contact@swyftpay.com</span>
                  </Link>
                </address>
                <div className="hidden md:flex gap-3">
                  <Link href={"contact@swyftpay.com"}>
                    <IconFacebook />
                  </Link>
                  <Link href={"contact@swyftpay.com"}>
                    <IconLinkedin />
                  </Link>
                  <Link href={"contact@swyftpay.com"}>
                    <IconTwitter />
                  </Link>
                </div>
              </div>
              {renderFooterMenus()}
            </div>
            <div className="md:hidden flex gap-3 pt-6 pb-6 ml-4 md:-ml-0">
              <Link href={"contact@swyftpay.com"}>
                <IconFacebook />
              </Link>
              <Link href={"contact@swyftpay.com"}>
                <IconLinkedin />
              </Link>
              <Link href={"contact@swyftpay.com"}>
                <IconTwitter />
              </Link>
            </div>
            <div className="w-full flex justify-center">
              <span className="text-text-primary text-md font-medium">
                SwyftPay &copy; {new Date().getFullYear()} Tous droits réservés
              </span>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};
export default Footer;