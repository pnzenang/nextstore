import { FaHeart } from 'react-icons/fa6';
import { Button } from '../ui/button';

const FavoriteToggleButton = ({ productId }: { productId: string }) => {
  return (
    <Button size='icon' variant='outline' className='p-2 cursor-pointer'>
      <FaHeart />
    </Button>
  );
};
export default FavoriteToggleButton;
