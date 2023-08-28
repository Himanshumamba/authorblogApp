import mysql from 'mysql';


export const db = mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'Bike@123',
   database:'blogdata',

})
