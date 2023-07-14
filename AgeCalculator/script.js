var day = document.getElementById('day');
var month = document.getElementById('month');
var year = document.getElementById('year');
var button=document.getElementById('btn');
var spans = document.getElementsByTagName('span');
var labels = document.getElementsByTagName('label');

//now get today date,month, year then only we can calculate///

var date= new Date();

var currentDay = date.getDate();
var currentMonth = date.getMonth();
var currentYear = date.getFullYear();

const AgeCalculator = ()=>{
    let newyear = Math.abs(currentYear - year.value);

     newMonth =0;
    if(currentMonth >= month.value){
        newMonth = currentMonth - month.value;
    }else{
        newyear--;
        newMonth = 12 + currentMonth - month.value
    }

    let newDay=0;
    if(currentDay >= day.value){
        newDay = currentDay - day.value;
    }

    if(newMonth < 0){
        newMonth = 11;
        newyear--;
    }
    if(newMonth < currentMonth){
        newDay++;
    }

    spans[0].innerHTML = newyear;
    spans[1].innerHTML = newMonth;
    spans[2].innerHTML = newDay;

}

const isDayCorrect = ()=>{
    if(day.value == ""){
        labels[0].style.color='red';
        return false;
    }else if(day.value <=0 || day.value >31){
        labels[0].style.color='red';
        return false;
    }
    else{
        return true;
    }
}
const isMonthCorrect = ()=>{
    if(month.value == ""){  
        labels[1].style.color='red';
        return false;
    }else if(month.value <=0 || month.value > 12){
        labels[1].style.color='red';
        return false;
    }
    else{
        return true;
    }
}
const isYearCorrect = ()=>{
    if(year.value == ""){
        labels[2].style.color='red';
        return false;
    }
    else{
        return true;
    }
}

button.addEventListener('click',()=>{
    isDayCorrect();
    isMonthCorrect();
    isYearCorrect();

if(isDayCorrect() && isMonthCorrect()&& isYearCorrect()){
    AgeCalculator();
}
   
})

