interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="relative max-w-7xl mx-auto bg-red-300">{children}</div>
  );
};

export default Container;
