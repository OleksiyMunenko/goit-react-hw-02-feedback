import PropTypes from 'prop-types'
import css from './FeedbackOptions.module.css'

function FeedbackOptions ({options, onLeaveFeedback}) {
	return (
		<div className={css.statistic_btn}>
			{options.map(el => {
				return (
					<button 
						type="button" 
						className={css.btn}
						onClick={() => onLeaveFeedback(el)}
						key={el}>
							{el}
						</button>
				)
			})}
				
			</div>
	)
}

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
}

export {FeedbackOptions}