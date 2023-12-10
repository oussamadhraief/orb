import Image from "next/image";
import { TbLock } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-3 sm:p-10 md:p-24">
      <div className="relative w-32 h-32 logo">
        <Image src="/logo.png" alt="" className="object-contain" fill />
      </div>
      <form className="w-full max-w-[384px] flex flex-col sm:flex-row gap-1 sm:gap-0 items-center mt-5 dhurjati-font">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full bg-transparent px-1 border border-secondary text-secondary placeholder:text-secondary h-10 outline-none"
        />
        <div className="bg-secondary w-fit h-fit">
          <button className="cursor-pointer bg-secondary border-b border-l border-secondary px-3 h-10 text-background transition-all hover:translate-x-0.5 hover:-translate-y-0.5 hover:border-primary">
            validate
          </button>
        </div>
      </form>
      <div className="flex items-center gap-1 text-sm sm:text-base dhurjati-font">
        <TbLock className="text-secondary" />
        <p className="text-secondary text-lg">Access password is required.</p>
      </div>
      <div className="absolute w-full bottom-2 sm:bottom-5 flex items-center justify-center gap-7 bg-secondary h-8 sm:h-10 text-primary text-lg regular-font">
        <div className="flex items-center gap-1 text-base sm:text-lg">
          <IoLogoInstagram  className="w-6 sm:w-7 h-6 sm:h-7" />
          @orb-16
        </div>
      </div>
    </main>
  );
}
