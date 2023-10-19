import { Link } from "react-router-dom";
import './menu.component.css'

export function MainMenu(){
    return(
        <div>
            <div className='row row-container'>
                <div className='col-3'>
                   
                </div>
                <div className='col-8' >
                    <ul className='menu'>
                        <li className='menu-list-item'><Link to="/" className='menu-list'>Home</Link></li>
                        <li className='menu-list-item'><Link to="/registration-create" className='menu-list'>Registration</Link></li>
                        <li className='menu-list-item'><Link to="/student/login" className='menu-list'>Login</Link></li>
                        <li className='menu-list-item'><Link to="/student/course" className='menu-list'>Course </Link>
                           <ul className='sub-menu'>
                                <li ><Link to="/" className='sub-menu-list'>Python</Link></li>
                                <li ><Link to="/" className='sub-menu-list'>HTML/CSS/JS</Link></li>
                                <li ><Link to="/" className='sub-menu-list'>ReactJS</Link></li>
                                <li ><Link to="/" className='sub-menu-list'>Angular</Link></li>
                                <li ><Link to="/" className='sub-menu-list'>MERN Stack</Link></li>
                                <li ><Link to="/" className='sub-menu-list'>MEAN Stack</Link></li>
                              
                           </ul>
                        
                        </li>
                    </ul>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}