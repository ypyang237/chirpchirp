// function chirp(n) {

//   var myArr = [];
//   var chirpy = ('chirp' + ' ');

// //basecase
// if(myArr.length === n){
//   return n;
// }

//   if(myArr.length < n) {

//   myArr.push(chirpy);
//   console.log(myArr);
//   chirp(n);
//   }


//   return chirpy.concat(myArr);

// }
// chirp(3);

//WRONG SOLUTION ABOVE

function chirp(n) {

  if(n<=1){
    return 'chirp';
  }
  return 'chirp ' + chirp(n-1);
}

module.exports = chirp;