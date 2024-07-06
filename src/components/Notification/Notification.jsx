import s from "./Notification.module.css";

const Notification = () => {
    return (
        <div className={s.container}>
            <p className={ s.notification}>No feedback yet</p>
        </div>
    );
};
export default Notification;