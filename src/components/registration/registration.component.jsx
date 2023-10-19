
import { useForm } from "react-hook-form";
import './registration.component.css';
import { Link, useNavigate } from "react-router-dom";
import { saveStudentDetailsData } from "../../services/studentregdetails";
//import { saveRegistrationData } from "../../services/registration.service";
//import { MainMenu } from "../menu/menu.component";


export const RegistrationDetails = () => {

    const navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm();

    function validateRegForm(data){
        data.id = 0;
        data.status = "Pending";
        //saveRegistrationData(data).then((res) => {
        saveStudentDetailsData(data).then((res) => {
            alert(JSON.stringify(res.data));
            //document.location.reload("/registration-create");
           navigate("/student/login");   
           //this.refresh(); 
           //<Link to="/registration-create" refresh="true"></Link>
        });
    }

    return(
        <div className="row home-container">
            <div className="col-2"></div>
            <div className="col-8">
                <div className="ms-5 me-5" >
                    <h2 className="text-center mt-3" style={{color:"#f07857"}}>Registration Form</h2>
                    <form onSubmit={handleSubmit((data) => {validateRegForm(data)})}>
                        <div className="form-group">
                            <label className="m-2 label-details">Student Name :</label>
                            <input type="text" className="form-control" {...register("name", {required:true})} placeholder="Enter Your Name Here..."></input>
                            {errors.name && <div className="text-danger">Full Name is Mandatory.</div>}
                        </div>

                        <div className="form-group">
                            <label className="m-2 label-details">Email ID :</label>
                            <input type="email" className="form-control" {...register("email", {required:true})} placeholder="Enter Email ID Here..."></input>
                            {errors.email && <div className="text-danger">Email ID is Mandatory.</div>}
                        </div>

                        <div className="form-group">
                            <label className="m-2 label-details">Phone Number</label>
                            <input type="number" maxLength={10} className="form-control" {...register("phone", {required:true})} placeholder="Enter Phone Number Here..." ></input>
                            {errors.phone && <div className="text-danger">Phone Number is Mandatory..</div>}
                        </div>

                        <div className='form-group'>
                            <label className="m-2 label-details">Gender:</label>
                            <input type='radio' className='m-2' {...register("radio", {required:true})} value="Male"></input><span>Male</span>
                            <input type='radio' className='m-2' {...register("radio", {required:true})} value="Female"></input><span>Female</span>
                            {errors.radio && <div className='text-danger'>This Field is Required.</div>}
                        </div>

                        <div className='form-group'>
                            <label className="m-2 label-details">Password:</label><sup className='text-danger'>*</sup>
                            <input type='password' className="form-control" {...register("password", {required:true})}></input>
                            {errors.password && <div className='text-danger'>Please Enter Password.</div>}
                        </div><br></br>

                        <div>
                            <input type='checkbox' {...register("checkin", {required:true})}></input><label style={{marginLeft:"20px"}}>Please accept <Link style={{marginLeft:"10px"}}>Terms & Conditions?</Link></label>
                            {errors.checkin && <div className='text-danger'>Please Select Checkbox.</div>}
                        </div><br></br>

                        <div className="text-center">
                            <input type="submit" value="Register" className="btn btn-primary" style={{marginRight:"30px"}} ></input>
                            <input type="reset" value="Cancel" className="btn btn-danger"></input>
                        </div><br></br>

                        <div className='formdetails mb-5'>
                            <label>Already have an account?<Link to="/student/login" style={{color: "blue", textDecoration: "none", fontSize:"18px", marginLeft:"10px"}}>Login Here.</Link></label> 
                        </div>

                    </form>

                </div>
            </div>
            <div className="col-3"></div>
        </div>
    )
}