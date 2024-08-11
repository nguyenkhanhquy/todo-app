import { useState } from "react";

import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

export default function App() {
    const [showAddTodoForm, setShowAddTodoForm] = useState(false);

    const [todos, setTodos] = useState([
        { rowNumber: 1, rowDescription: "Feed cat", rowAssigned: "Quy" },
        { rowNumber: 2, rowDescription: "Get haircut", rowAssigned: "Quy" },
        { rowNumber: 3, rowDescription: "Buy coffee", rowAssigned: "Quy" },
        { rowNumber: 4, rowDescription: "Learn React", rowAssigned: "Quy" },
    ]);

    const addTodo = (description, assigned) => {
        let rowNumber = 0;

        if (todos.length > 0) {
            rowNumber = todos[todos.length - 1].rowNumber + 1;
        } else {
            rowNumber = 1;
        }

        const newTodo = {
            rowNumber: rowNumber,
            rowDescription: description,
            rowAssigned: assigned,
        };

        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (deleteRowNumber) => {
        let filtered = todos.filter(function (todo) {
            return todo.rowNumber !== deleteRowNumber;
        });
        setTodos(filtered);
    };

    return (
        <>
            <div className="mt-4 container">
                <div className="card">
                    <div className="card-header">Todo's List</div>
                    <div className="card-body">
                        <TodoTable todos={todos} deleteTodo={deleteTodo} />
                        <button
                            type="button"
                            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
                            className={showAddTodoForm ? "btn btn-warning" : "btn btn-primary"}
                        >
                            {showAddTodoForm ? "Close" : "New Todo"}
                        </button>
                        {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
                    </div>
                </div>
            </div>
        </>
    );
}
