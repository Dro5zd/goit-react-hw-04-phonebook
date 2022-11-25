import {NotificationTitle, StatisticsWrapper} from './Notification.styled';
import React from 'react';

interface NotificationProps {
  message: string
}

export const Notification: React.FC<NotificationProps> = ({message}) =>{
  return <StatisticsWrapper>
    <NotificationTitle>Statistics</NotificationTitle>
    <p>{message}</p>
  </StatisticsWrapper>;
}

