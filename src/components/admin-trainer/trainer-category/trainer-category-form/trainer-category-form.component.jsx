//import { useForm } from 'react-hook-form';

import {saveTrainerDetails, updateTrainerDetails } from '../../../../services/trainer/trainer-category.service';
import { NotificationMessage } from '../../../common/note-message/note-message.component';
import { TrainerDetailsView } from '../trainer-category-view/trainer-category-view.component';
import './trainer-category-form.component.css';
import React from 'react';

export class TrainerDetailsForm extends React.Component{


    constructor(){
       super();
       this.state = {
            id: 0, 
            btnText:"Create",
            type:"",
            message:""
        }
        this.trainerName = React.createRef();
        this.trainerEdu = React.createRef();
        this.trainerExp = React.createRef();
        this.batchDetails = React.createRef();
   }
   
    saveData(event){
        event.preventDefault();
        let data={
            id: this.state.id,
            trainerName: this.trainerName.current.value,
            trainerEdu: this.trainerEdu.current.value,
            trainerExp: this.trainerExp.current.value,
            batchDetails: this.batchDetails.current.value,
            isactive: true
        }
        if(this.state.id === 0){
            saveTrainerDetails(data).then((res)=>{
                this.setState({id: res.data.id});
            });
        } else {
            updateTrainerDetails(data).then((res)=>{
                this.setState({type: "success"});
                this.setState({message: "Data Updated Successfully....."})
                //window.location.reload();
                this.refresh();

            })
        }
   }

    editRecord(item){
        this.trainerName.current.value = item.trainerName;
        this.trainerEdu.current.value = item.trainerEdu;
        this.trainerExp.current.value = item.trainerExp;
        this.batchDetails.current.value = item.batchDetails;
        this.setState({id: item.id});
        this.setState({btnText:"Update"});
    }

    refresh(){
        this.trainerName.current.value = "";
        this.trainerEdu.current.value = "";
        this.trainerExp.current.value = "";
        this.batchDetails.current.value = "";
        this.setState({btnText:"Create"})
    }

    deleteRecord(item){
        let data = {
            id: item.id,
            trainerName : item.trainerName,
            trainerEdu : item.trainerEdu,
            trainerExp: item.trainerExp,
            batchDetails: item.batchDetails,
            isactive: false,
        } 

        updateTrainerDetails(data).then((res)=>{
            this.setState({type: "info"});
            this.setState({message: "Data Deleted Successfully....."});
            //this.setState({item: document.location.reload()})
        });

    }

    true

   render(){
    return(
        <div>
            <form className='m-3' onSubmit={(event)=>{this.saveData(event)}}>
                <div style={{width: "70%"}}>   
                  
                        <div className='form-group' style={{fontSize:"18px"}}>
                            <label className='m-2 event-details'>Trainer Name</label>
                            <input type='text' className='form-control' ref={this.trainerName}></input>
                        </div>

                        <div className='form-group' style={{fontSize:"18px"}}>
                            <label className='m-2 event-details'>Trainer Education</label>
                            <input type='text' className='form-control' ref={this.trainerEdu}></input>
                        </div>

                        <div className='form-group' style={{fontSize:"18px"}}>
                            <label className='m-2 event-details'>Trainer's Experience</label>
                            <input type='number' className='form-control' ref={this.trainerExp}></input>
                        </div>

                        <div className='form-group' style={{fontSize:"18px"}}>
                            <label className='m-2 event-details'>Batch No & Timings</label>
                            <input type='text' className='form-control' ref={this.batchDetails}></input>
                        </div>
                        <div className='m-3'>
                            <input type='submit' className='btn btn-primary' value={this.state.btnText}></input>
                            <input type='reset' className='btn btn-danger m-3' value="Cancel"></input>
                        </div>
                    </div>
                </form>

                <TrainerDetailsView id={this.state.id} edit={(item)=>{this.editRecord(item)}} delete={(item)=>{this.deleteRecord(item)}}> </TrainerDetailsView>
                <NotificationMessage type={this.state.type} message={this.state.message}></NotificationMessage>
        </div>
    )
   }
}