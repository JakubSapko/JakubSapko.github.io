import Styles from "./Button.module.scss";

function Button({ text }: { text: string }) {
    return <button className={Styles.btn}>{text}</button>;
}

export default Button;
