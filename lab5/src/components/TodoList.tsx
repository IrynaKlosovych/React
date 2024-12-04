import type { FormEvent } from "react";
import { atom, useSetAtom } from "jotai";
import { todosAtom } from "../stores";
import { RemoveFn, Todo } from "../types";
import Filter from "./Filter";
import Filtered from "./Filtered";

const TodoList = () => {
    const setTodos = useSetAtom(todosAtom);

    const remove: RemoveFn = (todo) =>
        setTodos((prev) => prev.filter((item) => item !== todo));

    const add = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title = e.currentTarget.inputTitle.value;
        const id = new Date().toISOString();
        e.currentTarget.inputTitle.value = "";
        setTodos((prev) => [...prev, atom<Todo>({ id, title, completed: false })]);
    };

    return (
        <form onSubmit={add}>
            <Filter />
            <input name="inputTitle" placeholder="Type ..." />
            <Filtered remove={remove} />
        </form>
    );
};

export default TodoList