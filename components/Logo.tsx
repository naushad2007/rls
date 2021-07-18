import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import LogoImage from '@/public/logo.svg';
import LogoProps from '@/types/components/Logo';

const Logo: FC<LogoProps> = ({ size = 512, className }) => {
  return (
    <Link href="/">
      <a className={cx('shadow hover:shadow-lg', className)}>
        <Image
          src={LogoImage}
          alt="Reactive Resume Logo"
          width={size}
          height={size}
        />
      </a>
    </Link>
  );
};

export default Logo;
