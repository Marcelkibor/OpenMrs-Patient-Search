import React, { useState } from 'react'
import Login from './Login';
function Authenticated (){
const [logOut,isLoggedOut] = useState(false);
//get btoa for destroying a session
const getBtoa = JSON.parse(window.localStorage.getItem("BTOA"))
const logOutSession = ()=>{
fetch("openmrs/ws/rest/v1/session",{
headers:{
"Content-Type":"application/x-javascript;charset=UTF-8",
'Authorization': 'Basic '+getBtoa, 
},
method:"DELETE",
redirect: 'follow'
}).then(response => response.text())
.then(result => console.log(result))
//if successful, destroy the btoa and session id
.then(window.localStorage.removeItem("JSESSIONID"))
.then(window.localStorage.removeItem("BTOA"))
.then(window.localStorage.removeItem("BT"))
.then(window.localStorage.removeItem("GN"))
.then(window.localStorage.removeItem("NM"))
.then(window.localStorage.removeItem("UUID"))
.then(window.localStorage.removeItem("VISIT"))
.then(window.localStorage.removeItem("VITALS"))

.then(isLoggedOut(true))
.catch(error => console.log('error', error));
};
 return (
<>
{logOut ? <Login/>:<>
<div style={{margin:"2% 0% 0% 2%"}}>
<h6 style={{fontWeight:"600"}}>You can perform the following operations:</h6>
<ul>
<li>
<a href='/search'> Search Patient</a>
</li>
<li>
<a  href = "/"onClick={logOutSession}>Log Out</a>
</li>
</ul>
</div>

</>
}
</>
  )
}
export default Authenticated