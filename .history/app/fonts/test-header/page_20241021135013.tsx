import HeaderTest from './header';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  return (
    <div>
      <HeaderTest argumenten="argument" />
    </div>
  );
};

export default Page;
