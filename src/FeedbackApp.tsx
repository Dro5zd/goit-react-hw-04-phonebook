import {Notification} from './components/Notification/Notification';
import {FeedbackFormWrapper} from './components/FeedbackFormWrapper/FeedbackFormWrapper';
import {Statistics} from './components/Statistics/Statistics';
import {FeedbackOptions} from './components/FeedbackOptions/FeedbackOptions';
import {useState} from 'react';

export const FeedbackApp = ()=> {

  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)
  //
  // setGood(good + 1)
  // setNeutral(neutral + 1)
  // setBad(bad + 1)

  const countTotalFeedback =() =>{
      return 90
    // return Object.values(state).reduce((acc: number, num: number) => acc + num, 0);
  }
  //
  const countPositiveFeedbackPercentage=() =>{
    // return Math.round(100 / this.countTotalFeedback() * this.state.good);
  }
  //
  const buttonsTitle=() =>{
    // return Object.keys(this.state);
  }

  const onLeaveFeedback = (e: any) => {
    // const btnName = e.currentTarget.id;
    // return this.setState(state => {
    //   return {[btnName]: state[btnName] + 1};
    // });
  }

    return (
        <section>
          <FeedbackFormWrapper title="PLEASE LEAVE FEEDBACK">
            <FeedbackOptions options={['bad', 'neutral', 'good']} onLeaveFeedback={onLeaveFeedback}/>
              {/*<FeedbackOptions options={buttonsTitle()} onLeaveFeedback={onLeaveFeedback}/>*/}
            {countTotalFeedback() !== 0
                ?
              <Statistics good={3}
                              neutral={4}
                              bad={6}
                              total={100}
                              positivePercentage={20 || 0}
              />
                : <Notification message="There is no feedback"/>}
          </FeedbackFormWrapper>
        </section>

    );

}
