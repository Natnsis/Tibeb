import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

const About = () => {
  return (
    <section className="h-[40vh] mt-15">
      <div className="grid grid-cols-3">
        <div className="flex px-10 items-start col-span-1">
          <p className="bg-muted-bg px-3 rounded-full">About us</p>
        </div>
        <div className="col-span-2 pr-15">
          <p className="text-3xl border-b pb-10">
            Wheather you're seeking a tranquil retreat, a cultural adventure or
            an exhalirating outdoor experience, there is a perfect local escape
            waiting for you.
          </p>
          <div className="py-10 flex justify-between">
            <div className="border-r flex flex-col w-full p-5">
              <p>EXPERT INTALLATION</p>
              <h1>50+</h1>
            </div>
            <div className="border-r flex flex-col w-full p-5">
              <p>SUPPORT</p>
              <h1>24/7</h1>
            </div>
            <div className="flex flex-col w-full p-5">
              <p>WARRANTY</p>
              <h1>3+</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
