//client/src/components/LoginForm.js
 
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import {Col, Row} from "react-bootstrap";

import ThemeProvider from 'react-bootstrap/ThemeProvider' // 정렬 
import logo from '../logo.svg';
const { naver } = window;

const LoginForm = (props) => {
useEffect(()=>{
  var mapDiv = document.getElementById('map'); // 'map'으로 선언해도 동일
  var map = new naver.maps.Map(mapDiv);
}, [])

  return (    
    <div id="map" style={{width:"500px", height:"400px"}}></div>
  );
};
 
export default LoginForm;