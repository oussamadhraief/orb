import Image from "next/image";
import { TbLock } from "react-icons/tb";
import { CiInstagram } from "react-icons/ci";
import { GoDot } from "react-icons/go";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      <div className="relative w-32 h-32 logo">
        <Image src="/logo.png" alt="" className="object-contain" fill />
      </div>
      <form className="flex items-center mt-5 dhurjati-font">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-96 bg-transparent px-1 border border-secondary text-secondary placeholder:text-secondary h-10 outline-none"
        />
        <div className="bg-secondary w-fit h-fit">
          <button className="cursor-pointer bg-secondary border-b border-l border-secondary px-3 h-10 text-background transition-all hover:translate-x-0.5 hover:-translate-y-0.5 hover:border-primary">
            validate
          </button>
        </div>
      </form>
      <div className=" flex items-center gap-1 dhurjati-font">
        <TbLock className="text-secondary" />
        <p className="text-secondary text-lg">Access password is required.</p>
      </div>
      <div className="absolute w-full bottom-5 flex items-center justify-center gap-7 bg-secondary h-10 text-primary text-lg regular-font">
        <div className="flex items-center gap-1">
          <CiInstagram size={30} />
          @orb-16
        </div>
      </div>
    </main>
  );
}
