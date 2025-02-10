import React, { Component } from 'react';
import './App.css'
import { callApi } from './api';
class App extends Component {
    constructor(){
        super();
        this.userRegistration=this.userRegistration.bind(this);
    }
    showSignin(){
        let popup=document.getElementById("popup");
        popup.style.display="block";
        let popupHeader=document.getElementById("popupheader");
        popupHeader.innerHTML="login";
        let signin =document.getElementById("signin");
        let signup=document.getElementById("signup");
        signin.style.display="block";
        signup.style.display="none";
    }
    closeSignin(event){
        if(event.target.id==="popup"){
        let popup=document.getElementById("popup");
        popup.style.display="none";
        }        
    }
    showSignUp(){
        let popup=document.getElementById("popup");
        popup.style.display="block";
        let popupHeader=document.getElementById("popupheader");
        popupHeader.innerHTML="create new account";
        let signin =document.getElementById("signin");
        let signup=document.getElementById("signup");
        signin.style.display="none";
        signup.style.display="block";
        let fullname=document.getElementById("fullname");
        let email=document.getElementById("email");
        let role=document.getElementById("role");
        let signuppassword=document.getElementById("signuppassword");
        let confirmpassword=document.getElementById("confirmpassword");
        fullname.value="";
        email.value="";
        role.value="";
        signuppassword.value="";
        confirmpassword.value="";
        }
    userRegistration = () => {
        let fullname=document.getElementById("fullname");
        let email=document.getElementById("email");
        let role=document.getElementById("role");
        let signuppassword=document.getElementById("signuppassword");
        let confirmpassword=document.getElementById("confirmpassword");
        fullname.style.border="";
        email.style.border="";
        role.style.border="";
        signuppassword.style.border="";
        if(fullname.value===""){
            fullname.style.border="3px solid red";
            fullname.focus();
            return;
        }
        
        if(email.value===""){
            email.style.border="3px solid red";
            email.focus();
            return;
        }

        if(role.value===""){
            role.style.border="3px solid red";
            role.focus();
            return;
        }

        if(signuppassword.value===""){
            signuppassword.style.border="3px solid red";
            signuppassword.focus();
            return;
        }
        if(confirmpassword.value===""){
            confirmpassword.style.border="3px solid red";
            confirmpassword.focus();
            return;
        }
        if(signuppassword.value!=confirmpassword.value){
            signuppassword.style.border='3px solid red';
            signuppassword.focus();
            return;
        }
        var data=JSON.stringify({
            fullname:fullname.value,
            email:email.value,
            role:role.value,
            password:signuppassword.value

        });
        console.log(data);
        callApi("POST","http://localhost:8024/users/signup",data,this.getResponse);
    }
    getResponse(res)
    {

        let resp=res.split('::')
        alert(resp[1]);
        if(resp[0]==='200'){
            let signin=document.getElementById("signin");
            let signup=document.getElementById("signup");
            signin.style.display="block";
            signup.style.display="none";
        }
    }
    render() {
        return (
            <div id='container'>
                <div id="popup"onClick={this.closeSignin}>
                    <div id='popupwindow' >
                        <div id="popupheader">
                            <label>LOGIN</label>
                        </div>
                        <div id="signin">
                            <label className='usernamelabel' >Username : </label>
                            <input type="text" id='username' />
                            <label className='passwordlabel'>Password</label>
                            <input type="password" id='password' />
                            <div className="forgetpassword">forget <label>Password</label></div>
                            <button className='signinButton'>Sigin In</button>
                            <div className="div1"></div>
                            <div className="div2">
                                Don't have Account 
                                <br/>
                                <label onClick={this.showSignUp}>  Sign Up Now</label>
                            </div>
                        </div>
                        <div id="signup">
                            <label >FullName</label>
                            <input type="text" id='fullname' />
                            <label >Email</label>
                            <input type="text" id='email' />
                            <label >Select Role</label>
                            <select name="" id="role">
                                <option value=""></option>
                                <option value="1">Admin</option>
                                <option value="2">Employee</option>
                                <option value="3">JOB Seeker</option>
                            </select>
                            <label >Password</label>
                            <input type="password" id='signuppassword' />
                            <label >Confirm Password</label>
                            <input type="password" id='confirmpassword' />
                            <button onClick={this.userRegistration}>Register</button>
                            <div>Already Have an Account  <span onClick={this.showSignin}>SignIn</span></div>
                        </div>
                    </div>
                </div>
               <div id="header">
                <img className='logo'src="logo.png" alt="job-portal logo" />
                <div className="logoText"><span>Job</span> portal</div>
                <img className="signinIcon"src="user.png" onClick={this.showSignin}alt="" />
                <label className='signinText'onClick={this.showSignin}>sign in</label>
                </div>
               <div id="content">
               <div className='text1'>India's No.1 Job Portal</div>
                <div className='text2'>Your job search ends here</div>
                <div className='text3'>discover career opportunities</div>
                <div className='searchBar'>
                  <input type="text" className='searchjobText' placeholder='Search job by "skill"' />
                  <input type="text" className='joblocationText' placeholder='Job location' />
                  <button className='searchjob'>Search Jobs</button>
                  </div>
                </div>
               <div id="footer">
                <label className='copyrightText'>Copyright @2025 Jobs Portal. All rights reserved.</label>
                <img className='socialmediaIcon' src='facebook.png'alt='facebook icon'></img>
                <img className='socialmediaIcon' src='linkedin.png'alt='linkedin icon'></img>
                <img className='socialmediaIcon' src='twitter.png'alt='twitter icon'></img>
                </div>
            </div>
        );
    }
}

export default App;
