import s from "./Feedback.module.css";

const Feedback = ({good, neutral, bad}) => {
    console.log(good);
   const totalFeedback = good + neutral + bad;
    
    return (
        <div className={s.container}>
            <p className={s.feedback}>Good: { good}</p>
            <p className={s.feedback}>Neutral: { neutral}</p>
            <p className={s.feedback}>Bad: { bad}</p>
            <p className={s.feedback}>Total: { totalFeedback }</p>
            <p className={s.feedback}>Positive: {totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100)}%</p>
        </div>
    );
};

export default Feedback