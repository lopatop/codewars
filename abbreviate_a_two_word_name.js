// DESCRIPTION:
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// SOLUTION: 
function abbrevName(name){
    let name1 = name.split(" "); //разбиваем строку на массив слов 
    let firstLetters = name1[0].charAt(0).toUpperCase() + "." + name1[1].charAt(0).toUpperCase(); //берем первый символ каждого слова и преобразуем в верхний регистр
    return firstLetters;
}