import { FC } from 'react';
import { Submit } from '@radix-ui/react-form';

interface Props {
  content: string;
  classNameWrap?: string;
  className?: string;
}

const SubmitButton: FC<Props> = ({ content, classNameWrap, className }) => {
  return (
    <Submit className={classNameWrap} asChild>
      <button className={className}>{content}</button>
    </Submit>
  );
};

export default SubmitButton;
