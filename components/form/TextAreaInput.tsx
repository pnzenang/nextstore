import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type TexAreaInputProps = {
  defaultValue?: string;
  name: string;
  labelText: string;
};

const TextAreaInput = ({
  name,
  labelText,
  defaultValue,
}: TexAreaInputProps) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
        className='leading-loose'
      />
    </div>
  );
};
export default TextAreaInput;
