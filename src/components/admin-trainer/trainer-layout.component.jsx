import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../App.Route"
import { TrainerMenu } from "./trainer-menu/trainer-menu.component"
import { removeDataFromSessionStorage, store } from "../../services/storage.service";

export function TrainerLayout(){

    const navigate = useNavigate();

    function logoutUser(){
        store.dispatch({type:"userinfo", data: null});
        removeDataFromSessionStorage("user");
        navigate("/");
    }
    return(

        <div>
        <div className='admin-details'>
              <div style={{backgroundColor: "lightgrey", color:"brown", padding: "30px", fontSize:"24px", fontWeight:"500"}}>Welcome, Admin
                  <div style={{float:"right"}}>
                      <input type='button' className='btn btn-primary' value="Logout" onClick={()=>{logoutUser()}}></input>
                  </div>
              </div>
              <div className='row'>
                  <div className='col-2'>
                     <TrainerMenu></TrainerMenu>
                  </div>
              <div className='col-10'>
                  <AppRoute/>
              </div>
        
                      
            </div>
       </div>
       </div>
     )
}