
import { AppRoute } from './App.Route';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MainMenu } from './components/menu/menu.component';
import { UserContext, getDataFromSessionStorage, store } from './services/storage.service';
import { useEffect, useState } from 'react';
import { TrainerLayout } from './components/admin-trainer/trainer-layout.component';

function App() {

  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(()=>{
    subscribeStore();
    let userinfo =  getDataFromSessionStorage("user");
    if(userinfo){
      store.dispatch({type: "userinfo", data: JSON.parse(userinfo)})
    } else {
      if (window.location.pathname !== "" && window.location.pathname !== "/"){
        window.location.href="/";
      }    
    }
  },[])

  function subscribeStore(){
    store.subscribe(()=>{
      const user = store.getState()?.user;
      // alert(JSON.stringify(user));
      if(user){
        setShowAdmin(true);
        // navigate("/admin/event/category");
      } else {      
        setShowAdmin(false);
      }
    })
  }
  return (

    <div>
      <BrowserRouter>
        <UserContext.Provider>
         {/* <MainMenu/>*/}

          { !showAdmin && <section className='home-container'>
             <div className='row row-container'>
                <div className='col-1'></div>
                <div className='col-9 '>
                    <MainMenu/>
                </div>
                <div className='col-2'></div>
              
             </div>
             <AppRoute/>
          </section> }
          {
             showAdmin && 
                <TrainerLayout/>
          }
 
        </UserContext.Provider>  
    </BrowserRouter>
    </div>
  );
}

export default App;
