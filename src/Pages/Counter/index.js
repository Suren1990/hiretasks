import { useContext } from "react";
import styles from "./Counter.module.scss";
import CounterContext from "../../context";

const Counter = () => {
    const { count, setCount } = useContext(CounterContext);

    const countIncrease = () => {
        setCount(count + 1);
    }

    const countDecrease = () => {
        setCount(count - 1);
    }

    return (
        <div className={styles.counter}>
            <h1>COUNTER</h1>
            <div className={styles.counter__inner}>
                <button
                    onClick={countIncrease}
                >Increase</button>
                <span className={styles.counter__count}>{count}</span>
                <button
                    onClick={countDecrease}
                >Decrease</button>
            </div>
        </div>
    );
};

export default Counter;