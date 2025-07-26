function Button ({text, onClick, logo = null}) {
    return (
        <button className="btn" onClick={onClick}>{text}</button>
    )
}

export default Button
