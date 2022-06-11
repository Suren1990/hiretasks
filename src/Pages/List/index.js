import styles from './List.module.scss';
import { useContext } from "react";
import CounterContext from "../../context";

const List = () => {
    const { value, setValue, lists, setLists } = useContext(CounterContext);

    const addListItem = (e) => {
        e.preventDefault();

        const item = {
            id: Date.now(),
            text: value,
        };

        setLists([
            ...lists,
            item,

        ])
        setValue("");
    }

    const removeListItem = (id) => {
        setLists(lists.filter((item) => item.id !== id));
    }

    return (
        <div className={styles.list}>
            <h1>List Page</h1>
            <div className={styles.list__inner}>
                <form onSubmit={(e) => addListItem(e)}>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button>Add</button>
                </form>
                <h2>List Item</h2>
                <div className={styles.list__items}>
                    {
                        !!lists.length ? lists.map((item) => (
                            <p
                                key={item.id}
                                onClick={() => removeListItem(item.id)}
                            >{item.id}. {item.text}</p>
                        )) : (
                            <p>No List Items</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default List;