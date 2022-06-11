import { Route, Routes } from "react-router-dom";
import Counter from "./Pages/Counter";
import List from "./Pages/List";
import { PATHS } from './Constants';

const Routing = () => {
    return (
        <Routes>
            <Route path={PATHS.counter} element={<Counter />} />
            <Route path={PATHS.list} element={<List />} />
        </Routes>
    );
};

export default Routing;