import { Button } from '../ui/button';

const AddToCard = ({ productId }: { productId: string }) => {
  return (
    <Button className='capitalize mt-8 ' size='lg'>
      Add to cart
    </Button>
  );
};
export default AddToCard;
