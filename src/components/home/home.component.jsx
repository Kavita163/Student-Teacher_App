import { MainMenu } from '../menu/menu.component';
import './home.component.css';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getDataFromLocalStorage } from '../../services/storage.service';

export function HomePage(){
//   const navigate = useNavigate();

//   useEffect(()=>{
//           let user = getDataFromLocalStorage("user");
//           if(!user){
//               navigate("/");
//           }
//   },[]);

    return(
        //   Header
        <div>
            <section >
                 <div className='row'>
                    <div className='col-1'>
                        
                    </div>
                    <div className='col-9 '>
                        
                    </div>
                    <div className='col-2'>
                    
                    </div>
                </div>    
            </section>

         {/* body */}
         <div>
         <section className='ms-5 me-5 m-5'>
                <h2 className='m-5 text-center' style={{color:"#f07857", fontSize:"38px"}}>Leading Students Forward</h2 ><hr ></hr>
                <div className='row popular-categories'>
                    <div className='col-2'>Profile Details</div>
                    <div className='col-2'>Placement</div>
                    <div className='col-2'>General</div>
                    <div className='col-2'>Test & Mock Interview</div>
                </div>
            </section>
         </div>
         

            {/* footer */}
        </div>
        
    )
}