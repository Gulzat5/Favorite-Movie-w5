export const Button = ({ children, bgcolor, onClick, className }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={className}
        style={{ backgroundColor: `${bgcolor}` }}
      >
        {children}
      </button>
    </div>
  );
};
