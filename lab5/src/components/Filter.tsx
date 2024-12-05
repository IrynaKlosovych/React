import { useAtom } from "jotai";
import { filterAtom } from "../stores";
import styles from "../styles/App.module.css"

const Filter = () => {
    const [filter, setFilter] = useAtom(filterAtom);
    return (
        <div className={styles["filter"]}>
            <div>
                <label>
                    <input type="radio" name="options" value="all" 
                    checked={filter === "all"} onChange={() => setFilter("all")}/>
                    All
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" name="options" value="completed" 
                    checked={filter === "completed"} onChange={() => setFilter("completed")} />
                    Completed
                </label>
            </div>
            <div>
                <label>
                    <input type="radio" name="options" value="option3" 
                    checked={filter === "not-completed"} onChange={() => setFilter("not-completed")}/>
                    Not completed
                </label>
            </div>
        </div>
    );
};

export default Filter