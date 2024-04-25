import ReactSelect from 'react-select';

const options = [
  { value: 1, label: 'John Doe' },
  { value: 2, label: 'Jane Smith' },
  { value: 3, label: 'Michael Johnson' },
  { value: 4, label: 'Emily Davis' },
  { value: 5, label: 'Christopher Wilson' },
];
const CustomSelect = ({ field, form }) => (
  <ReactSelect
    {...field}
    options={options}
    placeholder="Select Category"
    isClearable={false}
    isSearchable
    isMulti={false}
    onChange={(option) => form.setFieldValue(field.name, option)}
  />
);

export default CustomSelect;
