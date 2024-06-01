interface ResetBtnProps {
  onReset: () => void;
  children?: React.ReactNode;
}

const ResetBtn = ({ onReset, children }: ResetBtnProps) => {
  return (
    <div className="flex flex-col mx-auto px-4 py-2 gap-2">
      <button className="btn bg-slate-300/90" onClick={onReset}>
        {children}
      </button>
    </div>
  );
};

export default ResetBtn;
