 anArray = [1, 2, 3, 4, 5, "8", 7, 88, 99, 99, 00];

//  console.log(anArray.length);

const arrLength = anArray.length;

// for(i=0; i <= arrLength; i++)
// {
//     console.log(anArray[i]);
// }

function printArray() {
    i = 0;
while(i < arrLength) {
    console.log(anArray[i])
    i++;
}
}

printArray()
