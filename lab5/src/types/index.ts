import { PrimitiveAtom } from "jotai"

export type Todo = {
    id: string
    title: string
    completed: boolean
}

export type Conditions = "all" | "completed" | "not-completed";

export type RemoveFn = (item: PrimitiveAtom<Todo>) => void;

export type TodoItemProps = {
    atom: PrimitiveAtom<Todo>;
    remove: RemoveFn;
};

export type FilteredType = {
    remove: RemoveFn;
};