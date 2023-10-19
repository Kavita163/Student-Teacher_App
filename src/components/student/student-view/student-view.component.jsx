import GridComponent from '../../shared/grid/grid.component';
import './student-view.component.css'



export function StudentsData() {
    let tableHeaders = ["ID", "Student Name", "Email", "Phone No", "Gender"];
    let tableData = [
        {id:1, firstname:"Karthik Kumar", email:'karthik@gmail.com', phone:9865452525, gender:"Male"},
        {id:2, firstname:"Suman Mishra", email:'suman@gmail.com', phone:9988556262, gender:"Female"}
    ]

    return(
        <div className='m-5'>
          <GridComponent headers={tableHeaders} data={tableData}></GridComponent>
        </div>
    )
    
}
