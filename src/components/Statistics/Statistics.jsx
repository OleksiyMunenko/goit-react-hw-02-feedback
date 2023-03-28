import PropTypes from 'prop-types'
import css from './Statistics.module.css'

function Statistics({good, neutral, bad, total, positivePercentage}) {
	return (
		<div>
			<p className={css.feedback}>Good: {good}</p>
			<p className={css.feedback}>Neutral: {neutral}</p>
			<p className={css.feedback}>Bad: {bad}</p>
			<p className={css.feedback}>Total: {total}</p>
			<p className={css.feedback}>Positive feedback: {positivePercentage}%</p>
		</div>
	)
}

Statistics.propType = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired
}

export {Statistics}