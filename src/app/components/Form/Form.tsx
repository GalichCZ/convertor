import { FC, FormEvent, useCallback, useEffect, useState } from 'react';
import * as FormUi from '@radix-ui/react-form';
import Input from './UI/Input';
import { useGetCurrencyQuery } from 'src/redux';
import SubmitButton from './UI/SubmitButton';
import Select from './UI/Select';
import { useAppDispatch } from 'src/hooks/reduxHooks';
import { setHintAmount } from 'src/redux/slices/hintAmountSlice';
import { ConversationRates } from 'src/Types/ConversionRates';
import Loader from './UI/Loader';
import { TableWrite } from 'src/Types/TableWrite';

const currencies = [
  { id: 1, currency: 'EUR' },
  { id: 2, currency: 'CZK' },
  { id: 3, currency: 'USD' },
];

interface Props {
  rows: TableWrite[];
  setRows: (write: TableWrite[]) => void;
}

const Form: FC<Props> = ({ rows, setRows }) => {
  const { data, isLoading } = useGetCurrencyQuery('USD');
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [amount, setAmount] = useState(0);
  const [conversionRates, setConversionRates] = useState<ConversationRates>();
  const dispatch = useAppDispatch();

  const convertResult = useCallback(() => {
    if (conversionRates) {
      return amount / conversionRates[selectedCurrency.currency];
    }
    return 0;
  }, [conversionRates, amount, selectedCurrency]);

  useEffect(() => {
    if (data) {
      setConversionRates(data.conversion_rates);
    }
  }, [data, setConversionRates]);

  useEffect(() => {
    dispatch(setHintAmount(convertResult()));
  }, [dispatch, convertResult]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const convertedAmount = convertResult();
    setRows([
      ...rows,
      {
        currency: selectedCurrency.currency,
        amount,
        convertResult: convertedAmount,
        date: new Date(),
      },
    ]);
  };
  return (
    <FormUi.Root onSubmit={onSubmit} className="shadow-md p-4 relative">
      <Loader isLoading={isLoading} />

      <div className="flex justify-between items-end">
        <Input
          name="firstCurrency"
          label="Currency amount"
          type="number"
          message="Please enter the amount"
          placeholder="Enter Amount"
          className="flex flex-col"
          onChange={setAmount}
          required
        />
        <Select
          currencies={currencies}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
      </div>

      <SubmitButton
        content="Submit"
        className="bg-lime-400 p-3 rounded-sm mt-3"
      />
    </FormUi.Root>
  );
};

export default Form;
