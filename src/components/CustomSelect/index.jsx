import Select from "react-select";

const CustomSelect = ({ value, options, onChange, placeholder, ...props }) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: 8,
      padding: "5px 8px",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: 8,
      color: "#2e290c",
    }),
  };
  return (
    <Select
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      options={options}
      {...props}
      isMulti={false}
      isSearchable={false}
      styles={customStyles}
    />
  );
};

export default CustomSelect;
