import TodoRowItem from "./TodoRowItem";

export default function TodoTable(props) {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Assigned</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map((todo) => (
                        <TodoRowItem key={todo.rowNumber} {...todo} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
