import Image from "next/image";
import Title from "./components/title";
import TestButton from "./components/TestButton";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden bg-linear-to-l from-[#DAE82C] via-[#3C8247] via-[#0A483D] to-[#092B25]">
      <div className="max-w-7xl space-y-8">
        <Title text="THE CHORD PROGRESSION YOU'RE LOOKING FOR" />
        <div className="h-1 w-2/3 bg-[#FDFBE4]" ></div>
        <div className="text-left w-1/2 mx-auto">
          An introductory quiz to find out what chord progression you are looking for. No music theory involved. Simple and straightforward design. Aimed towards beginner-level music enthusiasts. Keep in mind, exploring and expanding knowledge on music theories is heavily encouraged and depending too much on the quiz is discouraged.
        </div>
        <div className="w-75/100 flex items-center border-y-4 rounded-r-3xl">
          <div className="flex-6 font-bold text-[32px]">
            Look for it right now!
          </div>
          <div className="flex-2 flex justify-center">
            <Image src={'/arrow-circle-right.svg'} alt="" width={56} height={56} ></Image>
          </div>
          <TestButton />
        </div>
      </div>
    </div>
  );
}
