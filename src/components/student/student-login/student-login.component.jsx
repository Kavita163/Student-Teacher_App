import { useState } from 'react';
import './student-login.component.css';
import {useForm} from 'react-hook-form';
import { getStudents } from '../../../services/student.service';
import { saveDataToSessionStorage, store } from '../../../services/storage.service';
import { Link, useNavigate } from 'react-router-dom';
//import { saveDataToLocalStorage } from '../../../services/storage.service';
// import { MainMenu } from '../../menu/menu.component';
// import { Placeholder } from 'react-bootstrap';

export function StudentLogin(){

    const [showValidation, setShowValidation] = useState(false);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    function validateUser(data){
        getStudents().then((res) =>{
          let students = res.data;
          let response = students.find((item) => item.email === data.email && item.password === data.password)

          if (response){
            store.dispatch({type:"user", data: response});
           // saveDataToLocalStorage("user", JSON.stringify(response));
            saveDataToSessionStorage("user", JSON.stringify(response));
            // let date = new Date()
            // date.setDate(date.getDate()+1)
            // saveDataToCookie("user", JSON.stringify(response), date)
            //alert("User Exists");
           navigate("/admin/trainer/category/");
           window.location.reload();
            //navigate('/')
          } else {
           // const timeout =  
            setShowValidation(true);
            setTimeout(() =>{
                setShowValidation(false);
              }, 5000);
         //clearTimeout(timeout);
         //alert("User Not Exists");
          }
        }).catch((ex) =>{

        });
    }

    return(
        <div>
             <h2 style={{textAlign:"center", marginTop:"14px", color:"#f07857"}}>Login</h2>
             <div className='row'>
                <div className='col-2'>

                </div>
                <div className='col-8'>
                      <form className='login-form' onSubmit={handleSubmit((data) => validateUser(data))}>
                     
                            <div className='form-group m-3'>
                              <label for="exampleInputEmail1" className='m-2 '>Email ID</label>
                              <input type="email" class="form-control" id="exampleInputEmail1" {...register('email', {required: true})}></input>
                              {errors.email && <div className='text-danger m-2' >Email ID is Required</div>}
                            </div>
                            <div className='form-group m-3'>
                              <label for="exampleInputPassword1" className='m-2'>Password</label>
                              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" {...register('password', {required: true})}></input>
                              {errors.password && <div className='text-danger m-2'>Password is Required</div>}
                            </div>
                            <div className='form-check m-3'>
                              <input type="checkbox" class="form-check-input" id="exampleCheck1" {...register('checkmark', {required: true})}></input>
                              <label class="form-check-label" style={{marginLeft: '20px'}} for="exampleCheck1" >Check me out</label>
                              {errors.checkmark && <div className='text-danger m-2'>Please Select Checkbox.</div>}
                            </div>
                            <button type="submit" className="btn btn-primary m-3" >Login</button>
                            <input type='reset' value="Cancel" className='btn btn-danger'></input>
                            

                            <div className='logformdetails'>
                                <label>Create new account?<Link to="/registration-create" style={{color: "blue", textDecoration: "none", fontSize:"18px", marginLeft:"10px"}}>Click Here.</Link></label> 
                             </div>

                             <div >
                                {showValidation && <div className='no-user'>User Not Exists.</div>}
                            </div>
                            
                    </form>
                </div>
                <div className='col-2'>
                  
                </div>
             </div>
             
         </div>

    )
}