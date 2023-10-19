// Redux Code - 

import { createContext } from "react";

import { createStore } from "redux";

const reducer = (state, action) =>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "userinfo":
            return {
                ...state, user: action.data
            }
    }
}

export const store = createStore(reducer);


//Local Storage

export function saveDataToLocalStorage(key, value){
    localStorage.setItem(key, value);
}

export function getDataFromLocalStorage(key){
    return localStorage.getItem(key);
}

export function removeDataFromLocalStorage(key){
    localStorage.removeItem(key);
}

export function clearDataFromLocalStorage(key){
    localStorage.clear();
}


//Session Storage

export function saveDataToSessionStorage(key, value){
    sessionStorage.setItem(key, value);
}

export function getDataFromSessionStorage(key){
    return sessionStorage.getItem(key);
}

export function removeDataFromSessionStorage(key){
    sessionStorage.removeItem(key);
}

export function clearDataFromSessionStorage(key){
    sessionStorage.clear();
}

//Cookies

export function saveDataToCookie(key, value, expires){
    document.cookie = key+"="+value+";expires="+expires+";";
}

export function getDataFromCookie(){
    return document.cookie;
}

//Window Object Storage

export function setDatainWindowObject(data){
    window.user = data;
    //user key wil be created in window object and data assigned to that object
}

export function getDataFromWindowObject(){
    return window.user;
    //getting value/data from window object using key
}


export const UserContext = createContext();




