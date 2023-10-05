export function getCircleLenghtAndSquare(){
    let radius = prompt("Enter circle radius: ");

    let circleLenght = 2 * Math.PI * radius;
    let circleSquare = Math.PI * Math.pow(radius, 2);
    console.log(`C = ${circleLenght}, L = ${circleSquare}`)
}