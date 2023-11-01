import styled from 'styled-components';

export const FeedbackButtonList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
`;

export const FeedbackButton = styled.button`
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #413d3d;
    color: white;
    box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.75);
    -webkit-box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.75);
    -moz-box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.75);
  }
`;
