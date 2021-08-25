function button(props) {
    return (
        <>
        <button className="btns" onClick={props.onAdd}>{props.text}</button>
        </>
    );
}

export default button;
