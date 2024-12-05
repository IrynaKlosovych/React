//атоми маленькі ізольовані шматки стану, зазвичай атом містить невелику частину даних
//в jotai атоми можуть бути тільки для читання, запису або читання і запису

import { Provider} from "jotai";
import TodoList from "./components/TodoList"

function App (){
    return (
        <Provider>
            <TodoList />
        </Provider>
    );
};

export default App