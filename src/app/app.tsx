import { useState } from 'react';
import { TableWrite } from 'src/Types/TableWrite';
import Form from './components/Form/Form';
import Hint from './components/Hint/Hint';
import Table from './components/Table/Table';
import Border from './components/UI/Border';

export function App() {
  const [rows, setRows] = useState<TableWrite[]>([]);

  return (
    <div className="w-full h-screen flex flex-col items-center p-10 bg-slate-100/50 overflow-hidden">
      <div className="bg-white flex flex-col items-center p-10 rounded-md shadow-md">
        <Form rows={rows} setRows={setRows} />
        <Hint />
        <Border />
        <Table rows={rows} />
      </div>
    </div>
  );
}

export default App;
