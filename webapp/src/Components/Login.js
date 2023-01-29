import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const LoginForm = () => {

  //states to hold the username and password variables
    const [details, setDetails] = useState(
      { email: '', 
        password: '',
      role:''});
//state to hold generated error from the inputs
  const [err, setErr] = useState({});
  /*function to validate the inputs.
  If the username or password inputs are empty, an error message is generated
  the function returns the generated error.
  If successfully compiled, the entered value is captured in the respective variables, i.e. 
  details.username or/and details.password.
  */
  const validateDetails = async(details) => {
    let err = {};
    if (details.email === '') {
      return window.alert("Please enter your email")     
    }
    if (details.password === '') {
      return window.alert("Please enter your password")
    }
    if (details.role === '') {
      return window.alert("Please choose your role")
    }
    const docx = await axios.get(`http://localhost:8080/login?email=${details.email}&password=${details.password}&role=${details.role}`)
    
    console.log("hey",docx)
    if(!docx.data){
      return window.alert("Invalid credentials")
    }
    localStorage.setItem('role',details.role)
    window.alert("Logged in successfully!")
    window.location.replace("/home")
    return err;
  }
  /*
  function to respond to changes to the input
  if the changes are validated, the set state function updates the value of the inputs
  */
  const handlechange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (<div class="container h-500">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  <div class="d-flex justify-content-center h-100">
    <div class="user_card">
      <div class="d-flex justify-content-center">
        <div class="brand_logo_container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSMHUS7cfTIy3RcJNCa--B7Sm0caxaXmHfw&usqp=CAU" class="brand_logo" alt="Logo"/>
        </div>
      </div>
      <div class="d-flex justify-content-center form_container">
        <form>
          <div class="input-group mb-3">
            <div class="input-group-append">
              <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div>
            <input type="text" name="email" class="form-control input_user"  placeholder="email"  defaultvalue={details.email} onInput={(e) => handlechange(e)}/>
          </div>
         <div class="input-group mb-2">
            <div class="input-group-append">
              <span class="input-group-text"><i class="fas fa-key"></i></span>
            </div>
            <input type="password" name="password" class="form-control input_pass" defaultvalue={details.password} placeholder="password" onInput={(e) => handlechange(e)}/>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-append">
              <span class="input-group-text"><i class="fa fa-user "></i></span>
            </div>
            <select class="form-control input-user"  onInput={(e) => handlechange(e) } name="role">
              <option value='' selected disabled>Role</option>
              <option value='1'>HOD</option>
              <option value='2'>Librarian</option>
              <option value='3'>Teacher</option>
             </select>
          </div>
          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customControlInline"/>
              <label class="custom-control-label" for="customControlInline">Remember me</label>
            </div>
          </div>
            <div class="d-flex justify-content-center mt-3 login_container">
         <button type="button" name="button" class="btn login_btn"  onClick={ (evt)=>{
                evt.preventDefault();
                setErr(() => ({ ...validateDetails(details) }));
              }
            } >Login</button>
         </div>
        </form> 
      </div>
  
     
    </div>
  </div>
</div>
  );
}
export default LoginForm;
