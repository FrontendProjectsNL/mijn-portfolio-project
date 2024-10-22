import HeaderTest from './header';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  return (
    <div>
      <HeaderTest argument="De waarde van mijn argument is: 832" />
    </div>
  );
};

export default Page;
