// 1
console.log("**************** Flatten nested array *******************");

function Flatten(arr){

    let result =[];

    for(let element of arr){
        if(Array.isArray(element)){
            result = result.concat(Flatten(element));
        }else{
            result.push(element)
        }
    }
    return result
}
console.log(Flatten([1,[2,3],[4,[5,6]]]));


// practice
function Flatten( arr){
    let result = [];

    for(let  element of arr){
        if( Array.isArray(element)){
            result = result.concat(Flatten(element))
        }else{
        result.push(element)
    }
    }
    return result
}
console.log(Flatten([1,[2,3],[4,[5,6]]]));


// 2
console.log("************Deep clone an object*************");

