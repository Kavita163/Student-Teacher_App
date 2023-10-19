import { deleteData, getData, saveData, updateData } from "../context.service";

const url = "http://localhost:3000/trainerdetails/";


export function getTrainerDetails(){
    return getData(url);
}

export function saveTrainerDetails(data){
    return saveData(url, data);
}

export function updateTrainerDetails(data){
    return updateData(url, data.id, data);
}

export function deleteTrainerDetails(){
    return deleteData(url);
}

