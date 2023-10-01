export function getMonthByNumber(){
    let months = ["","January","February","March","April","May","June","July","August","September","October","November","December"];
    let result = prompt("Enter month number: ");
    if(result > 1 && result <= 12)
        console.log(months[result])
    else
        alert("Wrong month number")
}