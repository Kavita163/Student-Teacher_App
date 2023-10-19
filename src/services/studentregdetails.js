import { getData, saveData, updateData } from "./context.service"


const url = "http://localhost:3000/studentdetails/";

export function getStudentDetailsData(){
    return getData(url);
}

export function saveStudentDetailsData(data){
    return saveData(url, data);
}

export function updateStudentDetailsData(data){
    return updateData(url, data.id, data);
}