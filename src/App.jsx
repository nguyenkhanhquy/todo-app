import TodoTable from "./components/TodoTable";

export default function App() {
    const TODOS = [
        { rowNumber: 1, rowDescription: "Feed cat", rowAssigned: "Quy" },
        { rowNumber: 2, rowDescription: "Get haircut", rowAssigned: "Quy" },
        { rowNumber: 3, rowDescription: "Buy coffee", rowAssigned: "Quy" },
        { rowNumber: 4, rowDescription: "Learn React", rowAssigned: "Quy" },
    ];

    return (
        <>
            <div className="mt-4 container">
                <div className="card">
                    <div className="card-header">Todo's List</div>
                    <div className="card-body">
                        <TodoTable todos={TODOS} />
                    </div>
                </div>
            </div>
        </>
    );
}
