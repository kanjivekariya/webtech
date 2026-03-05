//! 1. if statement
let status=200;
if(status==200)
{
    console.log("Get: OK");

}
//! 2. if-else statement
if(status==201)
{
    console.log("GET : OK");

}
else{
    console.log("POST : Created");
}
//! 3. else-if ladder
// if(condition){

// }
// else if(){

// }
// else if(){

// }
// else if(){

// }

//! 4.switch:
let statusCode=201;
switch(statusCode){
    case 200:
        console.log("Status Text : Ok");
        break;
    case 201:
        console.log("Status Text:  Created");
        break;
    case 401:
        console.log("Status Text: Page Not Found");
        break;
    case 500:
        console.log("Status Text : Server Error");
        break;
    default:
        console.log("Provide a valid status code");
                
        
}
//! break and continue keyword in loopin statements
for(let i=0; i<=10; i++)
{
    if(i==5){
        continue;
    }
    console.log(i);
    
}
for(let i=0; i<=10; i++)
{
    if(i==5){
        break;
    }
    console.log(i);
    
}