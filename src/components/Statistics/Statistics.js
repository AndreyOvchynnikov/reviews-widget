import PropTypes from "prop-types";
import s from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePersentage }) => {
    
    return (<ul className={s.list}>
        <li><p>Good: {good}</p></li>
        <li><p>Neutral: {neutral}</p></li>
        <li><p>Bad: {bad}</p></li>
        <li><p>Total: {total}</p></li>
        <li><p>Positive Feedback: {positivePersentage}%</p></li>           
    </ul>
    )

                   
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePersentage: PropTypes.number
}