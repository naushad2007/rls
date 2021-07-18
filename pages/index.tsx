import Image from 'next/image';

import Logo from '@/public/logo.svg';

const Home = () => {
  return (
    <div className="container mx-auto">
      <Image src={Logo} alt="Reactive Resume Logo" />
    </div>
  );
};

export default Home;
