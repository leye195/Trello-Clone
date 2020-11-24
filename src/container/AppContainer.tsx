import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

const AppContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AppContainer;
