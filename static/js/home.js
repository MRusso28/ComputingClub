let trash = document.querySelector('#trashIcon');

function myFunction() {
    document.getElementById("myTable").deleteRow(1);
}

$( "#trashIcon1" ).click(function() {
  myFunction();
});

function myFunction2() {
    document.getElementById("myTable").deleteRow(2);
}

$( "#trashIcon2" ).click(function() {
  myFunction2();
});

function myFunction3() {
    document.getElementById("myTable").deleteRow(3);
}

$( "#trashIcon3" ).click(function() {
  myFunction3();
});

