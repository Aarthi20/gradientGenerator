// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 31px;
  }
`
export const DirectionText = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`
export const ColorsPickerText = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
`
export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  color: #ededed;
  font-size: 17px;
  font-weight: 500;
`
export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  background-color: #00c9b7;
  min-width: 25px;
  border: none;
  border-radius: 8px;
  padding: 10px;
  margin-left: 0px;
  margin-bottom: 10px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;
`
