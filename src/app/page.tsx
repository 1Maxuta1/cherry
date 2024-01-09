import MaxWidthWrapper from "@/components/MaxWidth";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import "../../src/globals.css";
import { BiArrowToBottom } from 'react-icons/bi';
import { RiShieldCheckLine } from 'react-icons/ri';
import { FaLayerGroup } from 'react-icons/fa';
import { AiOutlineAntDesign } from 'react-icons/ai';

const perks = [
  {
    name: "Instant delivery",
    Icon: BiArrowToBottom,
    description:
      "Receive your email-delivered asset and download it instantly.",
  },
  {
    name: "Ensured quality",
    Icon: RiShieldCheckLine,
    description:
      "We check every asset on our platform to make sure it meets our high-quality standards.",
  },
  {
    name: "Wide Variety",
    Icon: FaLayerGroup,
    description:
      "Explore a vast selection of digital assets, ranging from graphics and templates to audio and video files. Our marketplace offers a diverse collection to suit your creative needs.",
  },
  {
    name: "User-Friendly Interface",
    Icon: AiOutlineAntDesign,
    description:
      "Enjoy a seamless browsing and shopping experience with our intuitive user interface. Easily navigate through categories, find what you need, and make purchases effortlessly.",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center  flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl  my-20 items-center">
            Your digital marketplace with {""}
            <span className="text-rose-600">everything</span>.
          </h1>
          <p className=""></p>
          <div className="flex flex-col sm:flex-row gap-4 my-6">
            <Link href="/products" className={buttonVariants()}>
              Browse for more
            </Link>
          </div>
          <Button variant="ghost">Assurance of Quality &rarr;</Button>
        </div>
        {/* TODO: List Products */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-100">
        <MaxWidthWrapper>
          <div className="mb-10 grid grid-cols-1 gap-y-12 sm:gap-x-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8 ">
            {perks.map((perk)=>(
              <div key={perk.name} className="text-center md:items-start md:text-left lg:block lg:text-left bg-gradient-to-br from-rose-300 to-red-400 py-16 px-8 rounded-lg ">
                <div className="mg:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-rose-100 text-rose-900">
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-8 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-slate-950">
                    {perk.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-slate-800">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
