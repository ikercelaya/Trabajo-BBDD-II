import fetch from 'node-fetch';

let API = 'http://localhost:2002';

export async function getdata() {
const res = await fetch(API);
const data = await res.json();
try {
 //console.log(data);
 return data;
} catch (e) {
 console.log('Some error');
 console.log(e);
 process.exit(0);
}
}