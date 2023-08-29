import { ChangeEvent, FC } from 'react';
import { Field, Message, Label, Control } from '@radix-ui/react-form';

interface Props {
  name: string;
  label: string;
  type: 'number';
  message: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  onChange: (e: number) => void;
}

const Input: FC<Props> = ({
  name,
  label,
  type,
  message,
  placeholder,
  className,
  required,
  onChange,
}) => {
  return (
    <Field className={className} name={name}>
      <Label>{label}</Label>
      <Message className="text-red-600" match="valueMissing">
        {message}
      </Message>
      <Message
        className="text-red-600"
        match={(value) => parseInt(value, 10) < 1}
      >
        Do not provide negative values
      </Message>
      <Control asChild>
        <input
          onChange={(e) => onChange(Number(e.target.value))}
          required={required}
          className="bg-slate-200 p-3 rounded-sm"
          placeholder={placeholder}
          type={type}
        />
      </Control>
    </Field>
  );
};

export default Input;
