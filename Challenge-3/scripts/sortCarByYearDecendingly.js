function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (var x = 0; x < result.length; x++) {
    for (var y = 0; y < result.length -x - 1; y++) {
      if (result[y].year < result[y + 1].year) {
        var storage   = result[y]
        result[y]     = result[y + 1]
        result[y + 1] = storage
      }
    }
  }

  console.log(result);
  console.table(result);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
