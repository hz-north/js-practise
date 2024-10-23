const input = document.getElementById("input");

function check() {
  let value = input.value;

  function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  }
  let reversed = reverseString(value);
  if (reversed === value) {
    console.log("It is pelindrome");
  } else {
    console.log("It is not a pelindrome");
  }
};
