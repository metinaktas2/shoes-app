import type { FC } from "react";

const Footer: FC = () => {
  return <footer className="text-center mt-10 bg-white text-dark-grey/70 p-3 rounded-[16px] md:rounded-[24px] xl:rounded-[32px] font-semibold">
    <p>Tüm hakları saklıdır. &copy; {new Date().getFullYear()} * KICKS SHOES</p>
  </footer>;
};

export default Footer;
