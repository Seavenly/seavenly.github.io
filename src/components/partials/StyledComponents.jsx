import styled from 'styled-components';

export const Markdown = styled.div`
  max-width: 40rem;
  margin: auto;
  border-left: 1px solid #eee;
  padding-left: 1rem;

  p {
    line-height: 1.3rem;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 4rem;
  padding-bottom: 0.5rem;
  margin-bottom: 3rem;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 1.4rem;
  border-bottom: 1px solid #eee;
  @media (min-width: 60rem) {
    margin-top: 8rem;
  }
`;

export default {
  Markdown,
  SectionTitle,
};
