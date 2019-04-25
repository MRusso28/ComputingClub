function validate(){

  // variable that holds a regular expression
  var reg = /^[0-9]*$/;

    if ($("#firstname").val() === "" || $("#lastname").val() === "" || $("#email").val() === "" || $("#inputState").val() === "Choose..."){ // if username not typed
      alert("Please make sure all parts of form are filled out before submitting!");
    } else if ($("#phone").val().length != 10 || !reg.test($("#phone").val())) { // if phone not in right format
        alert("Invalid phone number! Please make sure it is 10 digits long!");
    } else { // if all is done correctly
      alert("Form successfully submitted!");
    }
}
