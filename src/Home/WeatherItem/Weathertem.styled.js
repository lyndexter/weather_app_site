import styled from "styled-components";
import { Button } from "antd";

export const StyledWeatherItem = styled.div`
  width: 1600px;
  margin: 10px 0;
  padding: 0 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px black;
  > h3 {
    margin: 0;
    font-size: 25px;
    font-weight: bold;
  }
`;

export const WeatherItemContent = styled.div`
  margin: 10px 0;
  display: grid;
  grid-template-columns: 200px 100px 100px 250px 100px 100px 100px 100px 100px 100px 100px;
  grid-template-rows: 40px 30px;
  > h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const ItemsQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  width: 100px;
`;

export const Price = styled.div`
  font-size: 20px;
  margin-right: 35px;
`;

export const StyledButton = styled(Button)`
  height: 30px;
  width: 80px;
`;

export const DeleteButton = styled(StyledButton)`
  :hover {
    color: red;
    border-color: red;
  }
`;

export const EditButton = styled(StyledButton)`
  :hover {
    color: green;
    border-color: green;
  }
`;
