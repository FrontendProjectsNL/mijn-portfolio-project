interface HeaderTestProps {
  argument: string;
}

const HeaderTest: React.FC<HeaderTestProps> = ({
  argument,
}: HeaderTestProps) => {
  return <div>Dit is HeaderTest! {argument}</div>;
};

export default HeaderTest;
