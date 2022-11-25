import * as PropTypes from 'prop-types';
import {NotificationTitle, StatisticsWrapper} from './Notification.styled';

export function Notification({message}) {
  return <StatisticsWrapper>
    <NotificationTitle>Statistics</NotificationTitle>
    <p>{message}</p>
  </StatisticsWrapper>;
}


Notification.propTypes = {
  message: PropTypes.string.isRequired,
};