import styled from 'styled-components';
import CustomButton from '../custom-button/Custom-button';

export const CollectionItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  @media screen and (min-width: 801px) {
    &:hover {
      .image {
        opacity: 0.8;
      }

      button {
        opacity: 0.85;
        display: flex;
      }
    }
  }

  @media screen and (max-width: 800px) {
    width: calc(50% - 10px);
    margin-bottom: 20px;
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0;
  position: absolute;
  top: 250px;
  transition: opacity 200ms ease-in-out, background 200ms ease-in-out, color 200ms ease-in-out !important;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  transition: opacity 200ms ease-in-out;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    height: auto;
  }
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
