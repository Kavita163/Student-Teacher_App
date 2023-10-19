

import GridCell from '../../atomic/grid-cell/grid-cell.component';
import './grid-approve.component.css'

const GridApproveComponent = (props) => {

    function approveStudentDetails(item){
        props.approveStudentDetails(item);
    }

    function rejectStudentDetails(item){
        props.rejectStudentDetails(item);  //passing a function from child to parent
    }
    return(
        <div>
            <h2 className='text-center mt-3' style={{color:"brown"}}> Student Confirmation Details</h2>
            <table className='table table-bordered table-striped table-hover mt-5 text-center'>
                <thead className='table-info'>
                    <tr>
                    {
                        props && props.headers && props.headers.map((item, index, arr) => {
                            return(
                                <th>{item}</th>
                            )
                           
                        })
                    }
                     <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            props && props.data && props.data.map((item, index, arr) => {
                                return(
                                    <tr>
                                        {
                                            Object.values(item).map((d) => {
                                                return(
                                                    <GridCell data={d}></GridCell>
                                                )
                                            })
                                        }
                                        <div>
                                            <input type='button' className='btn btn-primary' value="Confirm" onClick={()=>{approveStudentDetails(item)}} style={{marginRight:"30px"}}></input>
                                            <input type='reset' className='btn btn-danger' value="Reject" onClick={()=>{rejectStudentDetails(item)}}></input>
                                        </div>
                                    </tr>
                                )
                                
                            })
                        }
                        {
                             props && props.data?.length === 0  && <div className='text-danger'>No Records to Display</div>
                        }
                    
                </tbody>
        </table>
        </div>
    )
} 

export default GridApproveComponent;
