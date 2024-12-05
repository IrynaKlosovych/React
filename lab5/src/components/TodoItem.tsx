import { TodoItemProps } from "../types";
import { useAtom } from "jotai";
import styles from "../styles/App.module.css"

const TodoItem = ({ atom, remove, update }: TodoItemProps) => {
    const [item, setItem] = useAtom(atom);

    const toggleCompleted = () =>
        setItem((props) => ({ ...props, completed: !props.completed }));

    return (
        <>
            <div>
                <input id={item.id} type="checkbox" checked={item.completed} onChange={toggleCompleted} />
                <label htmlFor={item.id}>
                    {item.title}
                </label>
                <span className = {styles["delete"]} children={"Delete"} onClick={() => remove(atom)} />
                <span className = {styles["update"]} children={"Update"} onClick={() => update(atom, item)} />
            </div>
        </>
    );
};

export default TodoItem;