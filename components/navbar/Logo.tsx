import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { link } from 'fs';

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1753038590/crossroads_ernuhs.svg'
        width={129}
        height={59}
        alt='logo'
      ></Image>
    </Link>
  );
};
export default Logo;
