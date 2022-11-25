import React, {MouseEvent} from 'react';
import {FeedbackOptionsWrapper, OptionBtn, OptionsWrapper} from './FeedbackOptions.styled';
import {CgSmile, CgSmileNeutral, CgSmileSad} from 'react-icons/cg';

const iconObj: IconObjType = {
  good: <CgSmile/>,
  neutral: <CgSmileNeutral/>,
  bad: <CgSmileSad/>
}

const optionsArr = Object.keys(iconObj);

interface IOnLeaveFeedbackPropsType {
  onLeaveFeedback: (e: MouseEvent<HTMLButtonElement>)=>void
}

type IconObjType = { good: JSX.Element; neutral: JSX.Element; bad: JSX.Element };

export const FeedbackOptions: React.FC<IOnLeaveFeedbackPropsType> = ({onLeaveFeedback}) => {
  return (
    <FeedbackOptionsWrapper>
      {optionsArr.map(title => {

        return <OptionsWrapper key={title}>
         <OptionBtn id={title}
                     onClick={onLeaveFeedback}>{iconObj[title as keyof IconObjType]}</OptionBtn>
          <span>{title.toUpperCase()}</span>
        </OptionsWrapper>;
     })
      }
    </FeedbackOptionsWrapper>
  );
};

