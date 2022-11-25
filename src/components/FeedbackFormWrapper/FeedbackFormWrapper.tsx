import {AppSection, SectionTitle} from './FeedbackFormWrapper.styled';
import React from 'react';

interface FeedbackFormWrapperProps {
  title: string,
  children?: React.ReactNode
}

export const FeedbackFormWrapper: React.FC<FeedbackFormWrapperProps> = ({title, children}) =>{
  return (
    <AppSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </AppSection>
  );
}