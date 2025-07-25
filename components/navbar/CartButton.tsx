import Link from 'next/link';
import { Button } from '../ui/button';
import { TbPackages } from 'react-icons/tb';
const CartButton = () => {
  //temp
  const numItemsInCart = 9;
  return (
    <div>
      <Button
        asChild
        variant='outline'
        size='icon'
        className='flex justify-center items-center relative'
      >
        <Link href='/cart'>
          <TbPackages className='w-20' />
          <span className='absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center font-bold text-xs'>
            {numItemsInCart}
          </span>
        </Link>
      </Button>
    </div>
  );
};
export default CartButton;
