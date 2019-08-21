import styled from 'styled-components';

export const NavBar = styled.nav`
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  background-color: transparent;
  text-decoration: none;
`;

export const NavLink = styled.link`
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    background-color: #fff;
    color: #50BDE4;
    text-decoration: none;
  }
`;

export const Form = styled.form`
  margin: 20px auto;
  padding: 10px;
  width: 300px;
  border: 0.5px solid blue;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const Label = styled.label`
  text-align: left;
  margin: 5px;
`;

export const Header = styled.label`
  text-align: left;
  margin: 5px;
  font-size: 60px;
  color: white;
`;

export const Input = styled.input`
  border: 1px solid blue;
  border-radius: 3px;
  margin: 3px;
  padding: 10px;
  width: 270px;
  font-size: 14px;
`;

export const LoginButton = styled.button`
  background-color: #50BDE4;
  border: 2px solid #50BDE4;
  border-radius: 100px;
  margin: 20px 5px;
  padding: 10px;
  font-size: 18px;
  color: white;
  width: 250px;
  cursor: pointer;
  
  &:hover {
    background-color: #fff;
    color: #50BDE4;
  }
`;

export const Button = styled.button`
  background-color: blue;
  border: 1px solid blue;
  border-radius: 3px;
  margin: 3px;
  padding: 10px;
  font-size: 14px;
  color: #fff;
  width: 200px;
`;