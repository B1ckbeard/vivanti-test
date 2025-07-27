function Button ({text, onClick, disabled = false, logo = null}) {
    return (
        <button className="btn" onClick={onClick} disabled = {disabled}>{text}</button>
    )
}

export default Button
