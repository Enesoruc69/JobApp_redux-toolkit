const Select = ({ label, options, name, handleChange}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={handleChange}>
        <option value="">Seçiniz</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
