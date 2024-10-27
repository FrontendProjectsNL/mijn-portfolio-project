interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = () => {
  return (
    <div className="flex flex-col px-24 mt-28 w-full h-screen font-bold">
      <p className="text-4xl">Tech Stack</p>
      <div className="grid grid-cols-5">
        <div className="col-span-1 h-[200px]">1</div>
        <div className="col-span-1 h-[200px]">2</div>
        <div className="col-span-1 h-[200px]">3</div>
        <div className="col-span-1 h-[200px]">4</div>
        <div className="col-span-1 h-[200px]">5</div>
        <div className="col-span-1 h-[200px]">6</div>
        <div className="col-span-1 h-[200px]">7</div>
        <div className="col-span-1 h-[200px]">8</div>
        <div className="col-span-1 h-[200px]">9</div>
        <div className="col-span-1 h-[200px]">10</div>
      </div>
    </div>
  );
};

export default TechStack;
