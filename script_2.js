function factorielle(n) {
  if ( n < 0 ) {
    alert("enter an integer superior to 0 !");
    return "### ERROR ###";
  }
  else {
    if ( n == 0 ){
      return 1;
    }
    else {
      return n * factorielle(n-1);
    }

  }
};



let n = prompt("choose an integer please ! ");

console.log(factorielle(n));
