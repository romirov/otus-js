export function getDayOfWeekByDate(){
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dateStr = /\d{2}.\d{2}.\d{4}/.exec(prompt("Enter date(dd.MM.yyyy): "));
    if(dateStr !== null){
        let date = new Date();
        date.setFullYear(dateStr[0].substring(6, 10), dateStr[0].substring(3, 5) - 1, dateStr[0].substring(0, 2));
        let dayOfWeek = daysOfWeek[date.getDay()];
        console.log(dayOfWeek);
    } else {
        console.log("Wrong day format");
    }
}