import { Component } from "react";

import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	 }

	 onLeaveFeedback = (state) => {
		this.setState(prevState => ({
			 [state]: prevState[state] + 1,
		}))
  }

	 countTotalFeedback =  () => {
		let total = this.state.good + this.state.neutral + this.state.bad;
		return total;
	 }

	 countPositiveFeedbackPercentage = (total) => {
			let positiveFeedbackPercentage = Math.round((this.state.good / total) * 100);
			return positiveFeedbackPercentage;
	 }

	 render() {
		return (
		<div className="statistics">
			<Section title="Please leave feedback">
				<FeedbackOptions 
				options={Object.keys(this.state)} 
				onLeaveFeedback={this.onLeaveFeedback}/>
			</Section>			

			<Section title="Statictics">
				{ (this.state.good || this.state.neutral || this.state.bad > 0) ?
					<Statistics 
					good={this.state.good}
					neutral={this.state.neutral}
					bad={this.state.bad}
					total={this.countTotalFeedback()}
					positivePercentage={this.countPositiveFeedbackPercentage(this.countTotalFeedback())}/>	: 

					<Notification message="There is no feedback"/>

				}
				
			</Section>	
		</div>)
	 }
}






