import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }

  // button {
  //   position: absolute;
  //   top: 250px;
  // }
`;
