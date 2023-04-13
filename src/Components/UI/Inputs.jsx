export const Input = ({ children, type, placeholder, className, onChange }) => {
  return (
    <div>
      <input
        children={children}
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      ></input>
    </div>
  );
};
