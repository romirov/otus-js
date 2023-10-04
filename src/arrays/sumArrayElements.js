export const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function sumArrayElements(){
    let initialValue = 0;
    let sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

    console.log(sumWithInitial);
}