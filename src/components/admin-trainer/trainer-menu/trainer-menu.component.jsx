import { Link } from 'react-router-dom'
import './trainer-menu.component.css'

export function TrainerMenu(){
    return(
        <div>
            <ul className='admin-menu'>
                <li className='admin-menu-item'>
                    <Link to="/admin/trainer/category/" className='admin-menu-item-list'>Category</Link>
                </li>
                {/* <li className='admin-menu-item'>
                    <Link to="/admin/event/gallery/" className='admin-menu-item-list'>Gallery/Services</Link>
                </li> */}
                <li className='admin-menu-item'>
                    <Link to="/admin/trainer/approve/" className='admin-menu-item-list'>Student Confirmation</Link>
                </li>
            </ul>
        </div>
    )
}