function userAuthentication(form) {  //to be edited
    var theUsername = form.username.value;
    var thePassword = form.password.value;

    var userDetails = ['Olaitan Bakare', 'thisPassword'];
    if(theUsername === userDetails[0] && thePassword === userDetails[1]){
         return salaryCalculator.html; //to be edited
    }else{
    	document.getElementById('failed').innerHTML = "Please enter the correct user details"
    }
  }

