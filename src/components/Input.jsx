function Input({ value, onChange }) {
  return (
    <input
      type="text"
      className="w-[386px] h-[52px] mb-[8px] text-[18px] leading-[24px] border border-[#707075] hover:border-black bg-white px-[16px] py-[14px] "
      placeholder="Текст"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
