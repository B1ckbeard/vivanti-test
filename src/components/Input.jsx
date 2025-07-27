function Input({value, onChange}) {
  return <input type="text" className="text_input" placeholder="Текст" value={value} onChange={onChange} />;
}

export default Input;
