// let sum = 0;
// for (let i=0;i<
//     10;i=i+2){
//     sum=sum+i
// }
// console.log(sum);

// let i = 0;
// while ( i<11){
//     console.log(i);
//     i+=1;
// }



////////////////////ex1///////////////////
//1
function print(){
    let i=1
    for (i=1;i<=10;i++){
        console.log(i);
    }
}
print();
//2
function printEven(){
    for (let i=2;i<=10;i+=2){
        console.log(i);
    }
}
printEven();
//3
function parameterPrintInclude(num){
    for (let i=2;i<=num;i+=2){
        console.log(i);
    }
}
parameterPrintInclude(8);
//4
function skip13(){
    for(let i=1;i<=20;i+=1){
        if (i===13){
            continue;
        }
        console.log(i);
    }
}
skip13();
//5
function reversefunction(){
    for(let i=10;i>=1;i-=1){
        console.log(i);
    }
}
reversefunction();
//6
function stopAtSeven(){
    for(let i=1;1<=10;i++){
        console.log(i);
        if(i===7){
            break;
        }
    }
}
//7
function printarray(array){
    let arrayLength = array.length
for(let i=1;i<arrayLength;i++){
console.log(array.at(i))
}
}
printarray([1,2,3,4,5,6,7,8,9,19,12,3,4,5,6,87,21,1,2])
//8 
function printEvenArray(array){
for(let i=0;i<array.length;i++){
    if(array[i]%2===0){
        console.log(array[i]);
    }
}
}
printEvenArray([1,2,3,4,5,6])

//9
function arraySum(array){
    let sum=0;
    for (let i=1;i<=array.length;i++){
        sum=sum+array.at(i)
    }
console.log(sum);
}
//10
function letterCounter(string){
    let length = string.length;
    let letter = 0;
    for (let i=1;i<=length;i++){
        letter+=1;
    }
   console.log(letter);
}
letterCounter("carrr");
//11
 
function arraySort(array){
    let oddArray=[];
    let evenArray=[];
    for (let i=0;i<=array.length;i++){
        if (array[i]%2===0){
            evenArray.push(array[i]);
        }
        if (array[i]%2!==0){
            oddArray.push(array[i]);
        }
    }
    console.log(oddArray);
    console.log(evenArray);
}
arraySort([2,3,13,18,-5,38,-10,11,0,104]);

//12
function yChecker(string){
    console.log(/[y Y]/.test(string));
}
yChecker("blablab");

//13
// let testArray = [4,8,9];
// console.log(testArray);
// let valueAtIndex1 = testArray.at(2);
// console.log(valueAtIndex1);
function arraysHighest(array){
    let length = array.length;
    console.log(length);
    let highest = array.at(0) ;
    for (let i=1;i<=length;i++){
        let valueAtIndexI = array.at(i);
        console.log(array.at(i));
        if (array.at(i)>highest){
            highest=array.at(i)
        }
    }
    
    console.log(highest);
}
arraysHighest([2,55,6,88,10]);


/////////////////////////////////ex 2/////////////////////
//1
let startingFuelLevel =0;
let astronautsAboard =0;
let altitude = 0;
let i = 1;
function printNumbers() {
while (i<=10){
    console.log(i);
    i+=1;
}
}
printNumbers();
//2
let j = 2;
function printEvenNumbers() {
    while (j<=10){
        console.log(j);
        j+=2;
    }
    }
    printEvenNumbers();//2
//3
function printOddNumbers() {
    let j = 1;
    while (j<=10){
        console.log(j);
        j+=2;
    }
    }
    printOddNumbers();
    //4
    function printReverse() {
        let j = 10;
        while (j>=0){
            console.log(j);
            j-=1;
        }
        }
        printReverse();
        //5
    // function prompt() {
    //     let j = 10;
    //     while (j>=0){
    //         console.log(j);
    //         j-=1;
    //     }
        // }
        function promptUser(){
        let chosenNumb = prompt("Enter number");
        let i = 1;
        while(i<=chosenNumb){
            console.log(i);
            i+=1
        }
        }
        // promptUser(7);
        // //6
        // function promptUserSum() {
        //    // let chosenNumber = prompt("Enter number");
        //     let i = 1;
        //     let sum = 0;
        //     while(i<=chosenNumber){
        //         sum+=i;
        //         i++;
        //     }
        //     console.log(sum);
        //     }
        // promptUserSum();

//7
// function factorial(){
//     let number=prompt("what number to factorial ")
//     console.log(number);
//     let i = 1;
//     let sum = 1;
//     while (i<=number){
//         sum=sum*i
//         i=i+1;
//     }
//     console.log(sum);
// }
// factorial();

//8
function fuelLevel(){
    let fuelLevel = prompt("What is the fuel level?");
    while (fuelLevel<5000 || fuelLevel>30000){
        fuelLevel = prompt("What is the fuel level?");
    }
}
fuelLevel();

////////////////////////////////////////ex3////////////////////////
//A
function astriksB(){
    let astriks = "*";
    for (let i=0;i<=6;i++){
        console.log(astriks);
        astriks+="*"
    }
}
astriksB();


