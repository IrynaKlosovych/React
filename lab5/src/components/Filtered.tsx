import { useAtom} from "jotai";
import { FilteredType } from "../types";
import { filteredAtom } from "../stores";
import TodoItem from "./TodoItem";

const Filtered = ({ remove }: FilteredType) => {
    const [todos] = useAtom(filteredAtom);
    return (
        <div>
            {todos.map((atom) => {
                return (<TodoItem key={new Date().toISOString()} atom={atom} remove={remove} />)
            }
            )}
        </div>
    );
};

export default Filtered