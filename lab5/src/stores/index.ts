import {atom} from 'jotai'
import type { PrimitiveAtom } from 'jotai'
import {Todo, Conditions} from "../types/index"

export const filterAtom = atom<Conditions>("all");
export const todosAtom = atom<PrimitiveAtom<Todo>[]>([]);
export const filteredAtom = atom<PrimitiveAtom<Todo>[]>((get) => {
    const filter = get(filterAtom);
    const todos = get(todosAtom);
    if (filter === "all") return todos;
    else if (filter === "completed")
        return todos.filter((atom) => get(atom).completed);
    else return todos.filter((atom) => !get(atom).completed);
});

