import { FeedbackButton, FeedbackButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackButtonList>
    {options.map(option => (
      <li key={option}>
        <FeedbackButton type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </FeedbackButton>
      </li>
    ))}
  </FeedbackButtonList>
);
