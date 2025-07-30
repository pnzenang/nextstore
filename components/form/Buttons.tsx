'use client';
import { useFormStatus } from 'react-dom';
import { IoReloadSharp } from 'react-icons/io5';
import { IoReloadCircleOutline } from 'react-icons/io5';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { SignInButton } from '@clerk/nextjs';
import { FaPenToSquare, FaRegHeart, FaTrash } from 'react-icons/fa6';

type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

const SubmitButton = ({
  className = '',
  text = 'submit',
  size = 'lg',
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      disabled={pending}
      className={cn('capitalize', className)}
      size={size}
    >
      {pending ? (
        <>
          <IoReloadCircleOutline className='mr-2 h-5 w-5 animate-spin' />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
};
export default SubmitButton;
