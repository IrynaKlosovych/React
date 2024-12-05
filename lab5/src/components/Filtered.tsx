import { useAtom} from "jotai";
import { FilteredType } from "../types";
import { filteredAtom } from "../stores";
import TodoItem from "./TodoItem";
import styles from "../styles/App.module.css"

const Filtered = ({ remove, update }: FilteredType) => {
    const [todos] = useAtom(filteredAtom);
    return (
        <div className={styles["filtered"]}>
            {todos.map((atom) => {
                return (<TodoItem key={atom.toString()} atom={atom} remove={remove} update={update}/>)
            }
            )}
        </div>
    );
};

export default Filtered