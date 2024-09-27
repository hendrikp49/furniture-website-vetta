/* eslint-disable react/prop-types */
import {
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsGithub, BsInstagram } from "react-icons/bs";

export default function FooterSection(props) {
  const { logo, navFooter } = props;
  return (
    <footer className="container pt-16 pb-5 mx-auto">
      <div className="w-full">
        <div className="flex flex-col w-full gap-5 mx-auto md:flex-row lg:justify-around">
          <div className="flex flex-col items-center max-w-md gap-2 mx-auto md:items-start lg:mx-0 text-slate-500">
            <span className="text-2xl font-bold text-orange-400 md:text-3xl lg:text-4xl">
              {logo}
            </span>
            <p className="text-center md:text-left">
              The advantage of hiring a workspace with us is that gives you
              comfortable service an all around facilities.
            </p>
          </div>
          <div className="grid w-full max-w-md grid-cols-2 gap-8 mx-auto lg:mx-0 lg:max-w-max md:grid-cols-3 sm:gap-6 lg:gap-20">
            {navFooter.map((item) => (
              <>
                <div key={item.judul}>
                  <FooterTitle title={item.judul} className="text-orange-400" />
                  {item.navigasi.map((elemen, index) => (
                    <FooterLinkGroup col key={index}>
                      <FooterLink href="#">{elemen.nav1}</FooterLink>
                      <FooterLink href="#">{elemen.nav2}</FooterLink>
                      <FooterLink href="#">{elemen.nav3}</FooterLink>
                    </FooterLinkGroup>
                  ))}
                </div>
              </>
            ))}
          </div>
        </div>
        <FooterDivider />
        <div className="flex flex-col items-center w-full sm:gap-4 md:flex-row md:justify-between">
          <div className="text-sm font-thin text-center text-slate-500 ">
            <p>
              ©2024 Hendrik Prakoso. Design by{" "}
              <span className="underline text-slate-800">
                <a
                  href="https://www.figma.com/community/file/1061732519182077733"
                  target="_blank"
                >
                  Kretya Studio
                </a>
              </span>
              . All Right Reserved
            </p>
          </div>
          <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              href="https://www.instagram.com/hendrik_prakoso"
              target="_blank"
              icon={BsInstagram}
            />
            <FooterIcon
              target="_blank"
              href="https://github.com/hendrikp49"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
