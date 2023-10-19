import { getData, saveData, updateData  } from "./context.service"

const url = "http://localhost:3000/registrationdata/";

export function getRegistrationData(){
    return getData(url);
}

export function saveRegistrationData(data){
    return saveData(url, data);
}

export function updateRegistrationData(data){
    return updateData(url, data.id, data);
}