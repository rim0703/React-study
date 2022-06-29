//client/src/pages/Login.js
import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
 
const Login = () => {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
//   const [code, setCode] = useState("");
 
  const handleID = (e) => {
    setID(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
//   const handleCode = (e) => {
//     setCode(e.target.value);
//   };
  const handleSubmit = (e) => {
  };
 
  return (
    <Row>
      <Col xs={0} md={0}></Col>
      <Col xs={0} md={{span:5, offset:0}}>
        <Card body style={{ marginTop: "10rem", borderRadius: "10px" }}>
            <center>
          <h3>관리자 페이지에 로그인하세요</h3></center>
          <br></br>
          <LoginForm
            ID={ID}
            password={password}
            // showAuthCode={false}
            handleID={handleID}
            handlePassword={handlePassword}
            handleSubmit={handleSubmit}
            // handleCode={handleCode}
          />
        </Card>
      </Col>
      <Col xs={0} md={0}></Col>
    </Row>
  );
};
export default Login;
