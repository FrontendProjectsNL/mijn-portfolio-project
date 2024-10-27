interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = () => {
  return (
    <div className="flex flex-col px-24 mt-28 w-full h-screen font-bold">
      <p className="text-4xl">Tech Stack</p>
      <div className="grid grid-cols-5 ">
        <div className="col-span-1 h-52">1</div>
        <div className="col-span-1 h-52">2</div>
        <div className="col-span-1 h-52">3</div>
        <div className="col-span-1 h-52">4</div>
        <div className="col-span-1 h-52">5</div>
        <div className="col-span-1 h-52">6</div>
        <div className="col-span-1 h-52">7</div>
        <div className="col-span-1 h-52">8</div>
        <div className="col-span-1 h-52">9</div>
        <div className="col-span-1 h-52">10</div>
      </div>
    </div>
  );
};

export default TechStack;
