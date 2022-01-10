// Fetching Data Modules
// 1) Only one default export
//      a) default export
//      b) JavaScript Classes... 
// 2) Exports {export, export}
//      a) Export as many modules as your want!
//      b) export {name, name, name}
// 3) Function, object, class, const/vars, array...

function getRequest() {
    return "GET request, my dude"
}

function postRequest() {
    return "| POST request, my dude"
}

function putRequest() {
    return "| PUT request, my dude"
}

function deleteRequest() {
    return "| DELETE request, my dude"
}

export  {postRequest, putRequest, deleteRequest}
export default getRequest