import { atom } from "jotai";
import { Todo } from "../types";

export const createTodoAtom = (todo: Todo) => atom(todo);