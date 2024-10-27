interface TechStackProps {}

const TechStack: React.FC<TechStackProps> = () => {
  return (
    <div className="flex flex-col px-24 mt-28 w-full h-screen font-bold">
      <p className="text-4xl">Tech Stack</p>
      <div className="grid grid-cols-5">
        <div className="col-span-1">1</div>
        <div className="col-span-1">2</div>
        <div className="col-span-1">3</div>
        <div className="col-span-1">4</div>
        <div className="col-span-1">5</div>
      </div>
    </div>
  );
};

export default TechStack;
