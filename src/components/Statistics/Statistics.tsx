import {StatisticsItem, StatisticsTitle, StatisticsUl, StatisticsWrapper} from './Statistics.styled';
import React from 'react';

interface StatisticsProps {
    total: number,
    bad: number,
    neutral: number,
    positivePercentage: number,
    good: number,
}

export const Statistics: React.FC<StatisticsProps> = ({total, bad, good, neutral, positivePercentage}) => {
    return (
        <StatisticsWrapper>
            <StatisticsTitle>Statistics</StatisticsTitle>
            <StatisticsUl>
                <StatisticsItem>Good: <b>{good}</b></StatisticsItem>
                <StatisticsItem>Neutral: <b>{neutral}</b></StatisticsItem>
                <StatisticsItem>Bad: <b>{bad}</b></StatisticsItem>
                <StatisticsItem>Total: <b>{total}</b></StatisticsItem>
                <StatisticsItem>Positive percentage: <b>{positivePercentage}%</b></StatisticsItem>
            </StatisticsUl>
        </StatisticsWrapper>);
}