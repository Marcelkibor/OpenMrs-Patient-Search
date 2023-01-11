import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Authenticated from './Authenticated';
import { Form,Button, Alert } from 'react-bootstrap';
function Login(){
  const [authenticated, setauthenticated] = useState(JSON.parse(localStorage.getItem("JSESSIONID")|| false));
  const [FormData,SetFormData] = useState({
    username:'',
    password:'',
})
const { username, password} = FormData;
const onChange = (e)=>{
SetFormData({...FormData, [e.target.name]:e.target.value})
}
  const gotEmail=(e)=>{ 
    e.preventDefault();
      fetch("openmrs/ws/rest/v1/session",{
      headers:{
      "Content-Type":"application/x-javascript;charset=UTF-8",
      'Authorization': 'Basic '+btoa(username+":"+password), 
      },
      method:"GET",
      redirect: 'follow'
      }).then((Response)=>Promise.all([Response.json(),Response.headers])).then(([requestBody,headers])=>{
      window.localStorage.setItem("JSESSIONID",JSON.stringify(requestBody.sessionId))
      setauthenticated(!authenticated)
      console.log(requestBody)
      },)

  }
  return (
    <div>
      {authenticated ? <Authenticated/>:<>
<form >
<Form.Label>Username:</Form.Label>&nbsp;
<Form.Control type="text" placeholder="username" 
name = 'username' value  = {username} onChange = {onChange} autoComplete = "on"/>
<br></br><Form.Label>Password:</Form.Label>&nbsp;&nbsp;
<Form.Control type="password" placeholder="******" 
name = 'password' value  = {password} onChange = {onChange} autoComplete = "on"/><br></br>
</form>
<Button
variant="primary" 
type = 'submit'
onClick={gotEmail}
>
 
Login
</Button>
      </>}
  </div>
  )
}

export default Login