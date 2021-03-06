import styled from 'styled-components';

const ContacText = styled.div`
  grid-column: 1 / 4;
  grid-row: 8 / 8;
  grid-template-rows: repeat(3, auto;);
  margin-top: 0.5em;
  padding: 2em 0 1em 0;
  display: grid;
  grid-template-columns: minmax(10%, 20%) minmax(40%, 70%) minmax(10%, 20%);
  background-color: #f9f4e5;
  p {
    grid-column: 2 / 2;
    grid-row: 3 / 3;
  }
  h2 {
    font-size: 3em;
    color: #cc9900;
    grid-column: 2 / 2;
    grid-row: 1 / 1;
    margin: 0 0 0.5em 0;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #999900;
    :hover {
      color: #cc9900;
    }
  }
  @media (max-width: 767px) {
    grid-template-columns: minmax(5%, 10%) minmax(80%, 90%) minmax(5%, 10%);
    grid-column: 1 / 3;
    grid-row: 10 /10;
  }
`;

export default ContacText;
