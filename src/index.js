
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (matrix == null) {
    return [];
} else {
 return  matrix.reduce((acc,item,index) => {
    return acc.concat(((index%2 == 0) ? item : item.reverse()));
  }, []);
}
}
