import useScrollToBottom from 'src/hooks/useScrollToBottom';
import { TableWrite } from 'src/Types/TableWrite';
import { dateFormat } from 'src/utils/dateFormat';
import { formatNumber } from 'src/utils/formatNumber';
import Empty from '../../UI/Empty';
import Row from './Row';

const TableBody = ({ rows }: { rows: TableWrite[] }) => {
  const bottomRef = useScrollToBottom(rows);

  if (rows.length === 0) {
    return <Empty />;
  }
  return (
    <div className="mt-3 overflow-y-scroll overflow-x-hidden max-h-[600px]">
      {rows.map((row, key) => {
        return (
          <Row key={key} className="grid grid-cols-4 text-center pb-3">
            <p>{row.currency}</p>
            <p>{row.amount}</p>
            <p>{formatNumber(row.convertResult, 'en-US')}</p>
            <p>{dateFormat(row.date)}</p>
          </Row>
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
};

export default TableBody;
