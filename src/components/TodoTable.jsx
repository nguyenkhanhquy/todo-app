import TodoRowItem from "./TodoRowItem";

export default function TodoTable({ todos }) {
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
                    {todos.map((todo) => (
                        <TodoRowItem key={todo.rowNumber} {...todo} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
