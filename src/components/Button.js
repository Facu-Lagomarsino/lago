function Button(props) {
    return (
        <>
        <button className="btns" onClick={props.onAdd}>{props.text}</button>
        </>
    );
}

export default Button;
