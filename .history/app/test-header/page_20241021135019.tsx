import HeaderTest from './header';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  return (
    <div>
      <HeaderTest argument="argument" />
    </div>
  );
};

export default Page;
