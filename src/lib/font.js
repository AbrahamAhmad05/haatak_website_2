import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
})

export const original = localFont({
  src: '/fonts/original/TTF/Original-Regular.ttf',
  variable: "--font-original",
  weight: '700'
});

export const helvetica_neue = localFont({
  src: '/fonts/helvetica_neue/HelveticaNeueLTStd-Md.otf',
  variable: "--font-original",
  weight: '700'
});

export const gilroy = localFont({
  src: '/fonts/gilroy/Gilroy-Bold.ttf',
  variable: "--font-gilroy",
  weight: '700'
});

// Error was been created by spelling mistakes
export const gilroy_semibold = localFont({
  src: '/fonts/gilroy/Gilroy-SemiBold.ttf', 
  variable: "--font-gilroy",
  weight: '700'
});

export const gotham = localFont({
  src: '/fonts/gotham/gotham-font/Gotham-Medium.otf',
  variable: "--font-gotham",
  weight: '700'
});

export const albra_grotesk = localFont({
  src: '/fonts/albra_grotesk/Albra-Trial-Grotesk-Regular.otf',
  variable: "--font-albra",
  weight: '400'
});
