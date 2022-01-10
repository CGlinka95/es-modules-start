// Using A Module
// ** NOT USING A MODULE BUNDLER**
//      parcel..., react webpack, svelte...rollup...
// ** USING MODULES IN THE BROWSER...**
//      when using import, the file path must have the .js extension
//      >> import moduleName from 'path-to-the-module' <<

import fetcher, {postRequest as postFetcher, putRequest, deleteRequest} from "./utils/fetcher.js";

console.log(fetcher(), postFetcher(), putRequest(), deleteRequest())

//      PROMISE
//      Resolve Reject
//      then   catch

// Create Delay .... server code .... PROMISE
function delay(){
    return new Promise((resolve, reject)=>{
        // operation set time out data read write update or delete on the server 
        setTimeout(()=>{
            resolve("here is your data");
        }, 2000)
    })
}

delay().then(item => {const data = item})

//  ASYNC AWAIT OPERATION 
//      it's not real time Sync...
// async function getData(){
//     const data = await delay();
//     console.log(data);
// }

// getData();


// Start up the app entry to the app

// go to the internet and retrieve JSON data....
// async function getUsers(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     return data;
// }

// async function appInit(){
//     // start up code --> get the data...
//     // call async function fetch data 
//     const userData = await getUsers();
//     console.log(userData);
// }

// appInit();

// ************************************************************************************************
import { getFetcher } from "./utils/dataFetcher.js";

// Make call for data
async function appInit(){
    const users = await getFetcher('https://jsonplaceholder.typicode.com/users');
    console.log(users);
}

appInit();