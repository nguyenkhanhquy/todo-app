export default function TodoRowItem(props) {
    return (
        <>
            <tr>
                <th scope="row">{props.rowNumber}</th>
                <td>{props.rowDescription}</td>
                <td>{props.rowAssigned}</td>
            </tr>
        </>
    );
}
