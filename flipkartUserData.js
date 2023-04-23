// ***Register func*****
function register(event){
    event.preventDefault();

    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;
    var confirmPassword = document.getElementById("userConfirmPassword").value;

    if(name && email && password && confirmPassword){
        if(password.length >=8 && confirmPassword.length>=8){
            if(password == confirmPassword){

                var userData = JSON.parse(localStorage.getItem("fKartUsers")) || [];
                var flagForEmail = false;
                for(i=0; i<userData.length; i++){
                    if(userData[i].uEmail == email){
                        flagForEmail = true;
                    }
                }
                if(!flagForEmail){
                    var UserInfo = {uName: name, uEmail: email, uPassword: password, uConfirmPassword: confirmPassword};
                    userData.push(UserInfo);
                    alert("Registration Successful.");
                    localStorage.setItem("fKartUsers", JSON.stringify(UserInfo));
                    document.getElementById("userName").value ="";
                    document.getElementById("userEmail").value ="";
                    document.getElementById("userPassword").value ="";
                    document.getElementById("userConfirmPassword").value ="";
                }else{
                    alert("You're already registered.");
                }

            }else{
                alert("Password doesn't match");
            }
        }else{
            alert("Passwords must be 8 or more than 8");
        }
    }else{
        alert("All fields are Mandatory");
    }


}



// *********login func*****
function login(event){
    event.preventDefault();

    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;

    var activeUser = JSON.parse(localStorage.getItem("fKartUsers"));

    var flagForEmail = false;
    var currentUser;
    
    for(var i=0; i<activeUser.length; i++){
        if(activeUser[i].uEmail == email){
            flagForEmail = true;
            
        }
    }if(flagForEmail){
        localStorage.setItem("fKartcurrentUser", JSON.stringify())
    }else{
        alert("Register to Login");
    }
}