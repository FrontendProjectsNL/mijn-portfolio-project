interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = () => {
  return (
    <div className="flex flex-col px-24 mt-28 w-full h-screen font-bold">
      <p className="text-4xl">Tech Stack</p>
      <div className="grid grid-cols-5">
        <div className="col-span-1 h-52 flex items-center justify-center">
          1
        </div>
        <div className="col-span-1 h-52 flex items-center justify-center">
          2
        </div>
        <div className="col-span-1 h-52 flex items-center justify-center">
          3
        </div>
        <div className="col-span-1 h-52 flex items-center justify-center">
          4
        </div>
        <div className="col-span-1 h-52 flex items-center justify-center">
          5
        </div>
        <div className="col-span-1 h-52 flex items-center justify-center">
          6
        </div>
        <div className="col-span-1 h-52 flex items-center justify-center">
          7
        </div>
        <div className="col-span-1 h-52 flex items-center justify-center">
          8
        </div>
        <div className="col-span-1 h-52 flex items-center justify-center">
          9
        </div>
        <div className="col-span-1 h-52 flex items-center justify-center">
          10
        </div>
      </div>
    </div>
  );
};

export default TechStack;
