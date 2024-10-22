interface HeaderTestProps {
  argument: string;
}

const HeaderTest: React.FC<HeaderTestProps> = ({
  argument,
}: HeaderTestProps) => {
  return <nav className="max-w-7xl w-full "></nav>;
};

export default HeaderTest;
