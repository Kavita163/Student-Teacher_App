import { getData } from "./context.service";

const url = "http://localhost:3000/students/";

export function getStudents(){
    return getData(url);
}