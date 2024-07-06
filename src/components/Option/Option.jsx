import s from "./Optiom.module.css";

const Option = () => {
    return (
        <div className={ s.container}>
            <button type="button" className={s.optionBtn}>Good</button>
            <button type="button" className={s.optionBtn}>Neutral</button>
            <button type="button" className={s.optionBtn}>Bad</button>
            <button type="button" className={s.optionBtn}>Reset</button>
        </div>
    );
};

export default Option;