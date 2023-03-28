import PropTypes from 'prop-types'
import css from './Notification.module.css'

export const Notification = ({message}) => {
	return (
		<p className={css.feedback}>{message}</p>
	)
} 

Notification.propType = {
	message: PropTypes.string.isRequired
}