import {atom} from 'jotai'
import type { PrimitiveAtom } from 'jotai'
import Todo from "/Todo"

export const filterAtom = atom('all')
export const todosAtom = atom<PrimitiveAtom<Todo>[]>([])
export const filteredtodosAtom = atom<PrimitiveAtom<Todo>[]>((get) => {
  const filter = get(filterAtom)
  const todos = get(todosAtom)
  if (filter === 'all') return todos
  else if (filter === 'completed')
    return todos.filter((atom) => get(atom).completed)
  else return todos.filter((atom) => !get(atom).completed)
})

