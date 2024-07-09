import s from "./Options.module.css";

const Options = ({ fn, resetFn, total }) => {

    return (
        <div className={ s.container}>
            <button onClick={() => fn("good")} type="button" className={s.optionBtn}>Good</button>
            <button onClick={() => fn("neutral")} type="button" className={s.optionBtn}>Neutral</button>
            <button onClick={() => fn("bad")} type="button" className={s.optionBtn}>Bad</button>
            {total > 0 && <button onClick={() => resetFn()} type="button" className={s.optionBtn}>Reset</button>}
        </div>
    );
};

export default Options;