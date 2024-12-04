import { TodoItemProps } from "../types";
import { useAtom } from "jotai";

const TodoItem = ({ atom, remove }: TodoItemProps) => {
    const [item, setItem] = useAtom(atom);

    const toggleCompleted = () =>
        setItem((props) => ({ ...props, completed: !props.completed }));
    
    return (
        <>
            <input type="checkbox" checked={item.completed} onChange={toggleCompleted}/>
            <span>
                {item.title}
            </span>
            <span children={"Delete"} onClick={() => remove(atom)}/>
        </>
    );
};

export default TodoItem;