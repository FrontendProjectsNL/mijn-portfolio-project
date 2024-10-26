interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="relative max-w-[1500px] mx-auto">{children}</div>;
};

export default Container;