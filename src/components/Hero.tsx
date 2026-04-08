const Hero = () => {
  return (
    <section className="flex flex-col flex-1">
      <div className="flex justify-center w-full h-full">
        <div className="w-[45vw]">
          <img src="/hero.png" alt="hero-img" className="w-full h-full" />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-[35vw]">
          <p className="text-5xl text-secondary">
            Discover Habesha themed ui components
          </p>
        </div>
        <div className="w-[40vw] flex flex-col gap-2">
          <p className="text-secondary">
            An accessible React component library inspired by the intricate
            patterns of Ethiopian Tibeb. Build modern web interfaces with a
            touch of heritage.
          </p>
          <button className="bg-primary rounded-lg px-2 py-1 w-fit">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
