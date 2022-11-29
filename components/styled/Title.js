import styled from "styled-components";

const Title = styled.h1`
  font-family: sans-serif;
  font-size: ${(props) => props.fontSize};
  color: rgb(20, 20, 20);
  font-weight: 800;
`;

Title.defaultProps = {
  fontSize: '2rem',
}

export default Title;