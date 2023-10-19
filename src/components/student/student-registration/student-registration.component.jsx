import './student-registration.component.css';
import {Link} from 'react-router-dom';
import { useState, useRef } from 'react';
//import GridComponent from '../../shared/grid/grid.component';
import { StudentsData } from '../student-view/student-view.component';
//import { MainMenu } from '../../menu/menu.component';

export function StudentRegistration(){
    const [fnameValid, setFnameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [phnoValid, setPhnoValid] = useState(true);
    const [genderValid, setGenderValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [checktermValid, setCheckTermValid] = useState(true);

    const fnameRef = useRef();
    const emailRef = useRef();
    const phnoRef = useRef();
    const mGenderRef = useRef();
    const fGenderRef = useRef();
    const passRef = useRef();
    const checkRef = useRef();
        
    function saveData(){
        validateFullName();
        validateEmail();
        validatePhno();
        validateGender();
        validatePassword();
        validateCheckBox();
    }

    function validateFullName(){
        let isFnameValid = true;
        if(fnameRef.current.value.trim().length === 0){
            setFnameValid(false);
            isFnameValid = false
        } else {
            setFnameValid(true);
        }
        return isFnameValid;
    }

    function validateEmail(){
        let isEmailValid = true;
        if(emailRef.current.value.trim().length === 0){
            setEmailValid(false);
            isEmailValid = false 
        } else {
            setEmailValid(true);
        }
        return isEmailValid;
    }

    function validatePhno(){
        let isPhnoValid = true;
        if(phnoRef.current.value.trim().length ===0){
            setPhnoValid(false);
            isPhnoValid = false 
        } else {
            setPhnoValid(true);
        }
        return isPhnoValid;
    }
  
    function validateGender(){
        let isGenderValid = true;
        if(mGenderRef.current.checked === false && fGenderRef.current.checked === false){
            setGenderValid(false);
            isGenderValid = false 
        } else {
            setGenderValid(true);
        }
        return isGenderValid;
    }

    function validatePassword(){
        let isPassValid = true;
        if(passRef.current.value.trim().length === 0){
            setPasswordValid(false);
            isPassValid = false;
        } else {
            setPasswordValid(true);
        } 
        return isPassValid;
    }

    function validateCheckBox(){
        let isCheckValid = true;
        if(checkRef.current.checked === false){
            setCheckTermValid(false);
            isCheckValid = false;
        } else {
            setCheckTermValid(true);
        }
        return isCheckValid;
    }

    return(
        <div>
        <form className='reg-form'>
            <h2 style={{textAlign: "center", marginTop:"10px"}}>Registration</h2>
            <div className='form-group formdetails'> 
                <label>Student Name:</label><sup className='text-danger'>*</sup>
                <input type='text' ref={fnameRef} placeholder='Write Your Full Name Here...' className='form-control mt-2' onKeyUp={() => {validateFullName()}}></input>
                {fnameValid === false && <div className="text-danger">Full Name is Required.</div> }
            </div>
            
            <div className='form-group mt-2 formdetails'>
                <label>Email ID:</label><sup className='text-danger'>*</sup>
                <input type='text' ref={emailRef} placeholder='Enter Your Email ID.....' className='form-control mt-2' onKeyUp={() =>{validateEmail()}}></input>
                {emailValid === false && <div className='text-danger'>Email ID is Required.</div>}
            </div>

            <div className='form-group mt-2 formdetails'>
                <label>Phone No :</label><sup className='text-danger'>*</sup>
                <input type='number' ref={phnoRef} placeholder='Enter Your Phone No.....' className='form-control mt-2' onKeyUp={() =>{validatePhno()}}></input>
                {phnoValid === false && <div className='text-danger'>Phone No is Required.</div>}
            </div>

            <div className='form-group mt-2 formdetails'>
                <label>Gender:</label><sup className='text-danger'>*</sup>
                <input type='radio' ref={mGenderRef} name='gender' className='m-2' onChange={()=>{validateGender()}}></input><span>Male</span>
                <input type='radio' ref={fGenderRef} name='gender' className='m-2' onChange={()=>{validateGender()}}></input><span>Female</span>
                {genderValid === false && <div className='text-danger'>This Field is Required.</div>}
            </div>

            <div className='form-group mt-2 formdetails'>
                <label>Password:</label><sup className='text-danger'>*</sup>
                <input type='password' ref={passRef} className='form-control mt-2' onKeyUp={() => {validatePassword()}}></input>
                {passwordValid === false && <div className='text-danger'>Please Enter Password.</div>}
            </div><br></br>
     
            <div className='mt-2 formdetails'>
                <input type='checkbox' ref={checkRef} onClick={() => {validateCheckBox()}}></input><label style={{marginLeft:"20px"}}>Please accept <Link>Terms & Conditions?</Link></label>
                {checktermValid === false && <div className='text-danger'>Please Select Checkbox.</div>}
            </div>
            <div className='form-group text-center'>
                <input type='button' value="Register" className='btn btn-primary m-2' onClick={()=>{saveData()}}></input>
                <input type='reset' value="Cancel" className='btn btn-secondary'></input>
            </div>
            <div className='formdetails'>
                <label>Already have an account?<Link to="/student/login" style={{color: "blue", textDecoration: "none", fontSize:"18px", marginLeft:"10px"}}>Login Here.</Link></label> 
            </div>
            <StudentsData/>
        </form>

    </div>
    )

}