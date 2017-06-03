var num = 0;
var num2 = 0;
var addOperator = false;
var equalOp = false;

$(document).ready(function() {
$( "#target1" ).click(function() {
  console.log(num + " number");
  if (addOperator) {
		num2 += this.value.toString();
	}
  else {
	  num += this.value.toString();
  }
});
//How to implement +?
$( "#plus" ).click(function() {
  addOperator = true;
});
$( "#equal" ).click(function() {
  equalOp = true;
  num = parseInt(num);
  num2 = parseInt(num2);
  alert(num + num2);
});

});


