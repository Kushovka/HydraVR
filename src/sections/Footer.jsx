import Button from "../components/Button";
import { footerConditions, footerIcons, footerItems } from "../constants";
import logo from "/images/footer/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="flex flex-col lg:flex-row justify-between lg:items-stretch items-center py-12 gap-12 ">
          <div>
            <img src={logo} className="lg:size-48" alt="" />
          </div>
          <div className="self-stretch hidden lg:flex w-[7px] bg-gradient-to-t from-transparent via-[#C0B7E8] to-transparent" />
          <div className="self-stretch flex lg:hidden h-[7px] bg-gradient-to-r from-transparent via-[#C0B7E8] to-transparent" />
          <div className="flex flex-col gap-4">
            {footerItems.map((footerItem, i) => (
              <div key={i}>
                <h1 className="text-[16px] text-white cursor-pointer hover:text-[#C0B7E8] transition-all duration-300 font-semibold">
                  {footerItem.title} 
                </h1>
              </div>
            ))}
          </div>
          <div className="self-stretch hidden lg:flex w-[7px] bg-gradient-to-t from-transparent via-[#C0B7E8] to-transparent" />
          <div className="self-stretch flex lg:hidden h-[7px] bg-gradient-to-r from-transparent via-[#C0B7E8] to-transparent" />
          <div className="flex flex-col gap-4">
            {footerConditions.map((footerContidion, i) => (
              <div key={i} className="">
                <h1 className="text-[16px] text-white cursor-pointer hover:text-[#C0B7E8] transition-all duration-300 font-semibold">
                  {footerContidion.title}
                </h1>
              </div>
            ))}
          </div>
          <div className="self-stretch hidden lg:flex w-[7px] bg-gradient-to-t from-transparent via-[#C0B7E8] to-transparent" />
          <div className="self-stretch flex lg:hidden h-[7px] bg-gradient-to-r from-transparent via-[#C0B7E8] to-transparent" />
          <div className="flex flex-col items-center lg:items-start gap-6">
            <h1 className="text-[18px] text-white font-semibold">
              SOCIALIZE WITH HYDRA
            </h1>
            <div className="flex gap-3">
              {footerIcons.map((footerIcon, i) => {
                const IconPath = footerIcon.icon;
                return (
                  <div key={i}>
                    <IconPath className="size-8 text-[#C0B7E8] cursor-pointer hover:text-[#ffffff] transition-all duration-300" />
                  </div>
                );
              })}
            </div>
            <Button title="BUILD YOUR WORLD" />
          </div>
        </div>
        <div className="py-12">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C0B7E8] to-transparent" />
        </div>
        <div className="flex-center">
          <p className="text-sm text-white/40 font-semibold">
            {new Date().getFullYear()} &#169; HYDRA LANDING PAGE - BY ZINE. E.
            FALOUTI - ALL RIGHTS RESERVED{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
