
function Todo(props) {

    function deleteHandler() {
        console.log('Clicked from ' + props.title);
    }

    return(
        <div className="card">
            <h2>{props.title}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>DELETE</button>
            </div>
        </div>
    )
}

export default Todo;