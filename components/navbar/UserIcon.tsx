import { FaRegCircleUser } from 'react-icons/fa6';
import { SignedOut, SignedIn } from '@clerk/nextjs';
const UserIcon = () => {
  return (
    <>
      <SignedOut>
        <FaRegCircleUser className='w-10 h-10  rounded-full ' />
      </SignedOut>
      <SignedIn>
        <FaRegCircleUser className='w-10 h-10  rounded-full text-primary' />
      </SignedIn>
    </>
  );
};
export default UserIcon;
