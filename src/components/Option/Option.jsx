import s from "./Optiom.module.css";

const Option = ({ fn }) => {

    return (
        <div className={ s.container}>
            <button onClick={() => fn("good")} type="button" className={s.optionBtn}>Good</button>
            <button onClick={() => fn("neutral")} type="button" className={s.optionBtn}>Neutral</button>
            <button onClick={() => fn("bad")} type="button" className={s.optionBtn}>Bad</button>
            <button  type="button" className={s.optionBtn}>Reset</button>
        </div>
    );
};

export default Option;