import { FC } from 'react';
import { Listbox } from '@headlessui/react';
import { Currency } from 'src/Types/Currency';

interface Props {
  currencies: Currency[];
  selectedCurrency: Currency;
  setSelectedCurrency: (c: Currency) => void;
}

const Select: FC<Props> = ({
  selectedCurrency,
  setSelectedCurrency,
  currencies,
}) => {
  return (
    <Listbox as="div" value={selectedCurrency} onChange={setSelectedCurrency}>
      <Listbox.Button className="bg-green-300 p-4 ml-2 rounded-sm uppercase">
        {selectedCurrency.currency}
      </Listbox.Button>
      <Listbox.Options className="absolute ml-2 bg-gray-200 rounded-sm">
        {currencies.map((currency) => (
          <Listbox.Option
            className="p-4 border-b-2 border-slate-400 rounded-sm"
            key={currency.id}
            value={currency}
          >
            {currency.currency}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default Select;
