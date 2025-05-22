import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
})

export const original = localFont({
  src: '../../public/fonts/Original-Regular.ttf',
  variable: "--font-original",
  weight: '700'
});
export const helvetica_neue = localFont({
  src: '../../public/fonts/HelveticaNeueLTStd-Cn.otf',
  variable: "--font-original",
  weight: '700'
});

export const gilroy = localFont({
  src: '../../public/fonts/Gilroy-bold.ttf',
  variable: "--font-gilroy",
  weight: '700'
});
export const gilroy_semibold = localFont({
  src: '../../public/fonts/Gilroy-semibold.ttf',
  variable: "--font-gilroy",
  weight: '700'
});

export const gotham = localFont({
  src: '../../public/fonts/GOTHAM-MEDIUM.ttf',
  variable: "--font-gotham",
  weight: '700'
});
