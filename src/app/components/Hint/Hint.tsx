import { useAppSelector } from 'src/hooks/reduxHooks';
import { formatNumber } from 'src/utils/formatNumber';

const Hint = () => {
  const amount = useAppSelector((state) => state.hintAmount.amount);
  const formattedAmount = formatNumber(amount, 'en-US');

  return <strong className="mt-2 text-xl">USD: {formattedAmount}</strong>;
};

export default Hint;
