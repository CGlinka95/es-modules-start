// Data Fecther Modules
//  this function returns a promise
// Get Method 
// paramter: url
// 
// return array of object...

async function getFetcher(url = null){
    const res = await fetch(url);
    const data = await res.json();
    // res.text, res.blob, res.arrayBuffer, etc.
    return data;
}

export {getFetcher};