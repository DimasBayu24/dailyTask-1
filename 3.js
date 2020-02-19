function treeHeight(height, year) {
  if (year % 1 === 0){                     // if/else statement to check wether the year is a full year or half
    for (let i = 0; i < year; i++) {       
      var height = height * 2 + 1;          //formula to find out the growth for tree of imagination
      
    }
    return console.log("Tree's height: ", height);
     }
     else {
      for (let i = 0; i < year; i++) {
        var height = height * 2 + 1;
     }
     height = height-1;
     return console.log("Tree's height: ", height);
}
}
  
  treeHeight(2, 3.5); //growth result in the mid year
  treeHeight(2, 4); //growth result in a full year


