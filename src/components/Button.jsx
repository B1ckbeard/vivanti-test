function Button ({text, onClick, disabled = false, logo = null}) {
    return (
        <button className="w-[360px] h-[52px] bg-[#E46F50] text-white text-[26px] leading-[36px] font-bold border-0 cursor-pointer" onClick={onClick} disabled = {disabled}>{text}</button>
    )
}

export default Button
