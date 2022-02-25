import styled from "styled-components";

export const SCLine = styled.hr<{ finishColor?: string }>`
  margin: 10px auto;
  width: 90%;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    ${(props) => (props.finishColor ? props.finishColor : "transparent")},
    #a420c885,
    #b6aee485,
    #4617e485,
    ${(props) => (props.finishColor ? props.finishColor : "transparent")}
  );
  grid-area: l;
`;
