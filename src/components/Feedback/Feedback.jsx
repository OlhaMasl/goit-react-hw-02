import s from "./Feedback.module.css";

const Feedback = ({good, neutral, bad, total}) => {

    return (
        <div className={s.container}>
            <p className={s.feedback}>Good: { good}</p>
            <p className={s.feedback}>Neutral: { neutral}</p>
            <p className={s.feedback}>Bad: { bad}</p>
            <p className={s.feedback}>Total: { total }</p>
            <p className={s.feedback}>Positive: { Math.round((good / total) * 100)}%</p>
        </div>
    );
};

export default Feedback