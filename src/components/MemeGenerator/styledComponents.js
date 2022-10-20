// Style your components here
import styled from 'styled-components'

export const CustomButton = styled.button`
  background-color: #0b69ff;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  height: 35px;
  width: 90px;
`

export const MemeContainer = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  background-image: url(${props =>
    props.visible
      ? 'https://assets.ccbp.in/frontend/react-js/nature-img.png'
      : ''});

  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  font-family: 'Roboto';
  background-size: cover;
  margin: 2%;
  height: 70vh;
  text-align: center;

  color: white;
  @media screen and (min-width: 768px) {
    width: 65%;
  }
`
export const Para = styled.p`
  font-size: ${props => props.size};
`
