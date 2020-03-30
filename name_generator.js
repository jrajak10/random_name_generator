

function nameGenerator(arr, number){

    let newArr = []
    for(let i=0; i<number; i++){
        newArr.push(arr.splice(Math.floor(Math.random() * arr.length), 1))
    }
return newArr;
   
}


console.log(nameGenerator(['My', 'Name', "Is", "erm", "johann", 1, 2, 3, 4, 5, 6, 7, 8, 9], 4))

