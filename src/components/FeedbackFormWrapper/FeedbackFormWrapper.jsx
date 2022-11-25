import * as PropTypes from 'prop-types';
import {AppSection, SectionTitle} from './FeedbackFormWrapper.styled';

export function FeedbackFormWrapper({title, children}) {
  return (
    <AppSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </AppSection>
  );
}

FeedbackFormWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};