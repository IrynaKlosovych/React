import { useState, type FormEvent } from "react";
import { atom, useSetAtom, PrimitiveAtom } from "jotai";
import { todosAtom } from "../stores";
import { RemoveFn, Todo, UpdateFnShowBlock } from "../types";
import Filter from "./Filter";
import Filtered from "./Filtered";
import { createTodoAtom } from "../utils/createTodoAtom";
import styles from "../styles/App.module.css"

const TodoList = () => {
    const setTodos = useSetAtom(todosAtom);

    const [isUpdate, setUpdateStatus] = useState(false);

    const [todoItem, setTodoItem] = useState<Todo | null>(null);
    const [todoItemAtom, setTodoItemAtom] = useState<PrimitiveAtom<Todo> | null>(null);


    const remove: RemoveFn = (todo) =>
        setTodos((prev) => prev.filter((item) => item !== todo));

    const update: UpdateFnShowBlock = (todo, item) => {
        setUpdateStatus(true)
        setTodoItemAtom(todo);
        setTodoItem(item)
    }

    const updateValues = () => {
        if (todoItemAtom && todoItem) {
            setTodos((prev) =>
                prev.map((atom) =>
                    atom === todoItemAtom
                        ? createTodoAtom({ ...todoItem })
                        : atom
                )
            );
        }
        setUpdateStatus(false)
    }

    const add = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title = e.currentTarget.inputTitle.value;
        const id = new Date().toUTCString();
        e.currentTarget.inputTitle.value = "";
        setTodos((prev) => [...prev, atom<Todo>({ id, title, completed: false })]);
    };

    return (
        <form onSubmit={add}>
            <Filter />
            <input className={styles["inputTitle"]} name="inputTitle" placeholder="Type ..." />
            {(isUpdate) && (todoItem) &&
                <div className={styles["inputUpdate"]}>
                    <label htmlFor="updateTodo">Update your Todo</label>
                    <input id="updateTodo" value={todoItem.title}
                        onChange={(e) => setTodoItem({ ...todoItem, title: e.target.value })} />
                    <button onClick={() => updateValues()}>Update Now</button>
                </div>}
            <Filtered remove={remove} update={update} />
        </form>
    );
};

export default TodoList