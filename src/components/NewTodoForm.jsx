import { useState } from "react";

export default function NewTodoForm(props) {
    const [assigned, setAssigned] = useState("");
    const [description, setDescription] = useState("");

    const submitTodo = () => {
        if (description !== "" && assigned !== "") {
            props.addTodo(description, assigned);
            setAssigned("");
            setDescription("");
        }
    };

    return (
        <div className="mt-2">
            <form>
                <div className="mb-2">
                    <label className="form-label">Assigned</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        onChange={(e) => setAssigned(e.target.value)}
                        value={assigned}
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        rows={3}
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                <button type="button" className="btn btn-success mt-2" onClick={submitTodo}>
                    Add Todo
                </button>
            </form>
        </div>
    );
}
