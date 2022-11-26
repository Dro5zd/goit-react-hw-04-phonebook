import {Notification} from './components/Notification/Notification';
import {FeedbackFormWrapper} from './components/FeedbackFormWrapper/FeedbackFormWrapper';
import {Statistics} from './components/Statistics/Statistics';
import {FeedbackOptions} from './components/FeedbackOptions/FeedbackOptions';
import React, {MouseEvent, useEffect, useState} from 'react';

export const FeedbackApp = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const onLeaveFeedback = (e: MouseEvent<HTMLButtonElement>) => {
        const buttonId = e.currentTarget.id;
        switch (buttonId) {
            case 'bad':
                setBad(bad + 1);
                break;
            case 'neutral':
                setNeutral(neutral + 1);
                break;
            case 'good':
                setGood(good + 1);
                break;
            default:
                throw new Error('Oops')
        }
    }

    useEffect(() => {
        setTotal(bad + good + neutral)
        setPercentage(Math.round(100 / total * good))
    }, [bad, good, neutral, total])

    return (
        <section>
            <FeedbackFormWrapper title="PLEASE LEAVE FEEDBACK">
                <FeedbackOptions onLeaveFeedback={onLeaveFeedback}/>
                {total !== 0
                    ?
                    <Statistics good={good}
                                neutral={neutral}
                                bad={bad}
                                total={total}
                                positivePercentage={percentage || 0}
                    />
                    : <Notification message="There is no feedback"/>}
            </FeedbackFormWrapper>
        </section>

    );

}
