import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaMastodon } from "react-icons/fa";
import { SiLiberapay } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col items-center grow">
      <div className="flex mt-auto items-center justify-center flex-wrap">
        <main className="prose text-inherit p-8 bg-black/50 rounded-2xl m-4 w-full max-w-lg">
          <h1 className="mb-0 text-inherit">Axolotl-Logic</h1>
          <h2 className="mt-2 mb-2 text-purple-300">
            Muse → Manifest → Maintain
          </h2>
          <p className="text-justify">
            We build and maintain software that users are in control of.
            Dedicated to serving the users that are our life blood, we will
            remain open source and make ourselves easy to replace should we turn
            evil.
          </p>
        </main>
        <div className="max-w-xs">
          <Image
            alt="absolutely ADORABLE image of an axolotl."
            src="/images/mascot.png"
            width="600"
            height="409"
          />
        </div>
      </div>
      <div className="flex justify-around gap-2 self-stretch mt-auto pb-4">
        <Link className="text-6xl" href="https://github.com/axolotl-logic/">
          <FaGithub />
        </Link>
        <Link className="text-6xl" href="https://hachyderm.io/@axolotl_logic">
          <FaMastodon />
        </Link>
        <Link className="text-6xl" href="https://liberapay.com/Axolotl-Logic">
          <SiLiberapay />
        </Link>
      </div>
    </div>
  );
}
