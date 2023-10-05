export function getMinutesPassedSinceBeginningDay(){
    let now = new Date();
    let minutesPassedSinceBeginningDay = (now.getHours() * 60) + now.getMinutes()
    console.log(minutesPassedSinceBeginningDay);
}