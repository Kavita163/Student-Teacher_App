import GridApproveComponent from "../../../shared/grid-approve/grid-approve.component";
import { getStudentDetailsData, updateStudentDetailsData } from "../../../../services/studentregdetails";
import { useEffect, useState } from "react";

export const StudentDetailsView=()=>{
    const header=["Id","Student Name", "Email ID", "Phone No.", "Gender", "Password", "Checkin", "Status"];

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [studentData, setStudentData] = useState();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        getStudentDetails();
    },[])

    function getStudentDetails(){
        getStudentDetailsData().then((res)=>{
            setStudentData(res.data)         
        })
    }

    function approveStudentDetails(data){
        data.status = "Confirmed"
        updateStudentDetailsData(data).then((res)=>{
            // alert("Event Approved...");
            getStudentDetails();
        })
    }

    function rejectStudentDetails(data){
        data.status = "Rejected"
        updateStudentDetailsData(data).then((res)=>{
            // alert("Event Rejected");
            getStudentDetails();
        })
    }
    return(
        <div>
             <GridApproveComponent headers={header} data={studentData} approveStudentDetails={(data)=>{approveStudentDetails(data)}} rejectStudentDetails={(data)=>{rejectStudentDetails(data)}}></GridApproveComponent>
        </div>

    )
}
