export const ResetBtn = ({ onReset, children }: { onReset: () => void; children?: React.ReactNode }) => {
  return (
    <div className="flex flex-col mx-auto px-4 py-2 gap-2">
      <button className="btn bg-slate-300/90" onClick={() => onReset()}>
        {children}
      </button>
    </div>
  );
};
