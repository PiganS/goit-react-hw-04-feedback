import { Container, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);
