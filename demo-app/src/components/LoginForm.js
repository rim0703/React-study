//client/src/components/LoginForm.js
 
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import {Col, Row} from "react-bootstrap";

import ThemeProvider from 'react-bootstrap/ThemeProvider' // 정렬 
import logo from '../logo.svg';


const LoginForm = (props) => {
  return (

    
    <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '15vh',
        }}
    >

    <Form> 


      {/* 인증번호 화면이 뜰지 안뜰지 설정 / props.showAuthCode가 true이면 안보입니다. */}
      {/* <Collapse in={!props.showAuthCode}> */}
          
        <Form.Group>
        
        <Row>
        <Col>
            <div>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
        </Col>

        <Col>
        <Row>
          <Form.Label>아이디</Form.Label>
          <Col>
            <Form.Control
                type="text"
                // placeholder="아이디를 입력하세요"
                value={props.ID}
                onChange={props.handleID}
            />
          </Col>
          </Row>

          <Row>
            <Form.Label>비밀번호</Form.Label>
            <Col>
            <Form.Control
                type="password"
                // placeholder="비밀번호를 입력하세요"
                value={props.password}
                onChange={props.handlePassword}
            />
            </Col>
          </Row>

          <br></br>
          <Button variant="primary" type="submit">
            로그인
          </Button>
          </Col>
          </Row>
        </Form.Group>


      {/* </Collapse> */}
      {/* 인증번호 화면이 뜰지 안뜰지 설정 / props.showAuthCode가 true이면 나타납니다.
      <Collapse in={props.showAuthCode}>
        <Form.Group>
          <Form.Label>Authentification Code</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={props.code}
            onChange={props.handleCode}
          />
          <Button variant="primary" type="submit">
            Confirm
          </Button>
        </Form.Group>
      </Collapse> */}
    </Form>

    </div>

  );
};
 
export default LoginForm;