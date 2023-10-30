const removeFromArray = (array, ...args) =>{
    /* rest params aka ..args are array instances and have access to all array methods
       unlike arguments object which does not.
     */
    args.map((item) => {
        let itemToRemove = (element) => element === item  //do not add {curly braces} , seems to mess up the callback function.
        let index = array.findIndex(itemToRemove);
        if(index === -1){   //callback function returns -1  when its false, hence -1 means item to remove is not = to item to be removed in args array
            // do nothing
        }else{
            console.log(array.findIndex(itemToRemove));
            array.splice(index, 1);
        }
    });
    //console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
