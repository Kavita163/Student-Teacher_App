
import GridCell from '../../atomic/grid-cell/grid-cell.component';
import './grid.component.css'

const GridComponent = (props) => {

    function editRecord(item){
        props.edit(item);

    }


    function deleteRecord(item){
        props.delete(item);  //passing a function from child to parent  
    }
    return(
        <div>
            <h2 className='text-center' style={{color:"blue"}}>Trainer Details</h2>
            <table className='table table-bordered table-striped table-hover mt-3 text-center'>
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
                                            <input type='submit' className='btn btn-primary' value="Edit" onClick={()=>{editRecord(item)}} style={{marginRight:"30px"}}></input>
                                            <input type='reset' className='btn btn-danger' value="Delete" onClick={()=>{deleteRecord(item)}}></input>
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

export default GridComponent;
