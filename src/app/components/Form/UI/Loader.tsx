const Loader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {isLoading && (
        <div className="absolute top-0 left-0 bg-slate-200/50 flex justify-center items-center w-full h-full">
          Fetchig actual values...
        </div>
      )}
    </>
  );
};

export default Loader;
