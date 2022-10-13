function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  
  for (var x = 0; x  < result.length; x++) { 
    for (var y = 0; y < result.length -x - 1 ; y++) {  
      if (result[y].year > result[y + 1].year) {        
       var z          = result [y]                                                   
       result [y]     = result [y + 1]                   
       result [y + 1] = z
      }
    }
  }


 
    //for (var i = 0; i < result.length; i++) {
    //for (var j = 0; j < result.length - 1 ; j++) {
    //if (result[j].year > result[j + 1].year) {
       // var temp = result[j];
         // result[j] = result[j + 1];
          // result[j + 1] = temp;
         //}
        //}
      //}

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
