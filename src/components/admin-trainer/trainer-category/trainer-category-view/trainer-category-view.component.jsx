import React from "react";
import GridComponent from "../../../shared/grid/grid.component";
import { getTrainerDetails } from "../../../../services/trainer/trainer-category.service";
import { NotificationMessage } from "../../../common/note-message/note-message.component";

export class TrainerDetailsView extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            trainerDetails: [],
            notificationMessage: "",
            notificationType: "",
            id: -1
        };
        this.headers = ["ID", "Trainer Name", "Trainer Education", "Trainer Experience", "Batch No & Timings", "Active Status"];
    }

    componentDidMount(){
        this.getData();
    }

    shouldComponentUpdate(){
        if(this.props.id !== this.state.id){
            this.getData();
            this.setState({id: this.props.id});
            return true;        
        } else{
            return false;
        }
    }
    componentDidUpdate(){
        //this.getData();
      
    }

    editRecord(item){
        //alert(JSON.stringify(item));
        this.props.edit(item);    
    }

    deleteRecord(item){
        this.props.delete(item);
    }
    getData(){    
        getTrainerDetails().then((res)=>{
            let activeRecords = res.data.filter((item)=>item.isactive === true)
            this.setState({trainerDetails: activeRecords});
        }).catch(()=>{
            this.setState({notificationType:"error", notificationMessage:"Network error occured, please contact admin..."});
        });
    }
    render(){
        return( 
        <div>
            <GridComponent headers={this.headers} data={this.state.trainerDetails} edit={(item)=>{this.editRecord(item)}} delete={(item)=>{this.deleteRecord(item)}}></GridComponent>
            <NotificationMessage type={this.state.notificationType} message={this.state.notificationMessage}></NotificationMessage>
        </div>
        )
    }
    
}

// function approveStudentDetails(data){
//     data.status = "Confirmed"
//     updateStudentDetailsData(data).then((res)=>{
//         // alert("Event Approved...");
//         getStudentDetails();
//     })
// }

// function rejectStudentDetails(data){
//     data.status = "Rejected"
//     updateStudentDetailsData(data).then((res)=>{
//         // alert("Event Rejected");
//         getStudentDetails();
//     })
// }