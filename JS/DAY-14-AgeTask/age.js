window.onload = function(){
    let todayDate = new Date();
    let formattedDate = todayDate.toISOString().split("T")[0];

    document.getElementById("currentDate").value=formattedDate;
};

//! function to calculate age 
function calculateAge() {
   
    let birthDate =document.getElementById("birthDate").value;

         if(!birthDate){
        alert("Please Provide birthdate..");
        return;
    }
    let today = new Date();

    let birthDateObj = new Date(birthDate);

    let yearDiff = today.getFullYear() - birthDateObj.getFullYear();
    let monthDiff = today.getMonth() - birthDateObj.getMonth();
    let dayDiff = today.getDate() - birthDateObj.getDate();
    console.log(birthDate);

    if(monthDiff < 0){
        yearDiff--;
        monthDiff += 12;
    }
    if(dayDiff < 0){
        let prevDate = new Date(today.getFullYear(),today.getMonth(),0);
        dayDiff = dayDiff+prevDate.getDate();
        monthDiff--;
    }

    document.getElementById("result").innerHTML = `Age : ${yearDiff} Years ${monthDiff} Months ${dayDiff} Days`;
}