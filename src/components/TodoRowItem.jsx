export default function TodoRowItem(props) {
    return (
        <>
            <tr>
                <th scope="row">{props.rowNumber}</th>
                <td>{props.rowDescription}</td>
                <td>{props.rowAssigned}</td>
                <td>
                    <button type="button" onClick={() => props.deleteTodo(props.rowNumber)} className="btn btn-danger">
                        Delete Todo
                    </button>
                </td>
            </tr>
        </>
    );
}
