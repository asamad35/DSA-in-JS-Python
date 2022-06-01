function x() {
  setTimeout(function () {
    i = 1;
    console.log(i);
    var i;
  }, 1000);
}
x();
