import PropTypes from "prop-types";
import s from './Feedback.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
        return (
            <ul className={s.list}>
                {options.map(option => { 
                    return <li key={option} className={s.listItem}>
                        <button className={s.button} type="button" onClick={onLeaveFeedback} name={option}>
                            {option[0].toLocaleUpperCase() + option.slice(1)}
                        </button> 
                    </li>
                })}
            </ul>
        )
    }

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func
}