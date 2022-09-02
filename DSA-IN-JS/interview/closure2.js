function experiment() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 100);
    }

    inner(i);
  }
}

experiment();
