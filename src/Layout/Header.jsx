import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

export default function Header (props) {
    return (
        <header className={styles.header}>
            <h1>Foodini</h1>
            <HeaderCartButton
                onClick={props.onOpenCart}
            />
        </header>
    )
}