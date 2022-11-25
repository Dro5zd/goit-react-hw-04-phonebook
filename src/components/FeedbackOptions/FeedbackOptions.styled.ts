import styled from 'styled-components';

export const FeedbackOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  padding: 20px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OptionBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;

  &:hover {
    background-color: #f5b767;
    border: 1px solid #ffffff;
  }

  svg {
    width: 40px;
    height: 40px;
    color: ${props => {
      if (props.id === 'bad') {
        return 'red';
      } else if (props.id === 'good') {
        return 'green';
      }
      return 'grey';
    }}
`;