const TableHead = () => {
  return (
    <div className="grid grid-cols-4 text-center border-b-4 border-gray-200 pb-3">
      <p className="w-[150px]">Currency</p>
      <p className="w-[150px]">Amount</p>
      <p className="w-[150px]">
        Convert
        <br />
        Result
      </p>
      <p className="w-[150px]">Date</p>
    </div>
  );
};

export default TableHead;
