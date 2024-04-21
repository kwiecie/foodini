import styles from "./CartItem.module.css";
import { currencyFormatter } from "../util/formatting";

export default function CartItem (props) {
    //const price = `$${props.price?.toFixed(2)}`;

    return (
        <li className={styles['cart-item']}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.summary}>
                    <span className={styles.quantity}>x {props.quantity}</span>
                    <span className={styles.price}>{currencyFormatter.format(props.price)}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={props.onAdd}>+</button>
                <button onClick={props.onRemove}>-</button>
            </div>
        </li>
    );
};