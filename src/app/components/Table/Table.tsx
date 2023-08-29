import { TableWrite } from 'src/Types/TableWrite';
import TableBody from './UI/TableBody';
import TableHead from './UI/TableHead';

const Table = ({ rows }: { rows: TableWrite[] }) => {
  return (
    <div>
      <TableHead />
      <TableBody rows={rows} />
    </div>
  );
};

export default Table;
