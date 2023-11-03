import {Component} from 'react';
import Section from './Section';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Notification from './Notification';



export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = (event) => {
    const key = event.currentTarget.name;
    this.setState((prevState) => {
      return { [key]: prevState[key] + 1 };
    })
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePersentage = Math.round(((total - bad) / total) * 100) || 0;
    const options = Object.keys(this.state);
    
    return (
      <>
      <Section title="Please leave feedback"> 
      <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
      </Section>
        <Section title="Statistics">
          {!total ? (<Notification message="There is no feedback" />) :
            (<Statistics
              good={good}
              neutral={neutral}
              bad={bad} total={total}
              positivePersentage={positivePersentage} />)}
      </Section>
      </>
      
    )
  }
  
}
