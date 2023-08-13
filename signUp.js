let firstNameFlag=0;
let middleNameFlag=0;
let lastNameFlag=0;
let familyNameFlag=0;
let emailFlag=0;
let mobileFlag=0;

//.....................first name.............. //
//.....................first name.............. //
//.....................first name.............. //
let firstName=document.getElementById("fname");
firstName.addEventListener("focus",function(){
    document.getElementById("fnameP").style.display="block";
})
firstName.addEventListener("blur",function(){
    document.getElementById("fnameP").style.display="none";
})
firstName.addEventListener("keyup",function(){
    let fNameRE=/[a-zA-Z]{1,}/g;
    if(firstName.value.match(fNameRE)==firstName.value){
        document.getElementById("fnameP").classList.remove("invalid");
        document.getElementById("fnameP").classList.add("valid");
        firstNameFlag=1;
    }else{
        document.getElementById("fnameP").classList.remove("valid");
        document.getElementById("fnameP").classList.add("invalid");
    }
})

//.....................middle name.............. //
//.....................middle name.............. //
//.....................middle name.............. //
let middleName=document.getElementById("mname");
middleName.addEventListener("focus",function(){
    document.getElementById("mnameP").style.display="block";
})
middleName.addEventListener("blur",function(){
    document.getElementById("mnameP").style.display="none";
})
middleName.addEventListener("keyup",function(){
    let mNameRE=/[a-zA-Z]{1,}/g;
    if(middleName.value.match(mNameRE)==middleName.value){
        document.getElementById("mnameP").classList.remove("invalid");
        document.getElementById("mnameP").classList.add("valid");
        middleNameFlag=1;
    }else{
        document.getElementById("mnameP").classList.remove("valid");
        document.getElementById("mnameP").classList.add("invalid");
    }
})

//.....................last name.............. //
//.....................last name.............. //
//.....................last name.............. //
let lastName=document.getElementById("lname");
lastName.addEventListener("focus",function(){
    document.getElementById("lnameP").style.display="block";
})
lastName.addEventListener("blur",function(){
    document.getElementById("lnameP").style.display="none";
})
lastName.addEventListener("keyup",function(){
    let lNameRE=/[a-zA-Z]{1,}/g;
    if(lastName.value.match(lNameRE)==lastName.value){
        document.getElementById("lnameP").classList.remove("invalid");
        document.getElementById("lnameP").classList.add("valid");
        lastNameFlag=1;
    }else{
        document.getElementById("lnameP").classList.remove("valid");
        document.getElementById("lnameP").classList.add("invalid");
    }
})

//.....................family name.............. //
//.....................family name.............. //
//.....................family name.............. //
let familyName=document.getElementById("family");
familyName.addEventListener("focus",function(){
    document.getElementById("famnameP").style.display="block";
})
familyName.addEventListener("blur",function(){
    document.getElementById("famnameP").style.display="none";
})
familyName.addEventListener("keyup",function(){
    let famNameRE=/[a-zA-Z]{1,}/g;
    if(familyName.value.match(famNameRE)==familyName.value){
        document.getElementById("famnameP").classList.remove("invalid");
        document.getElementById("famnameP").classList.add("valid");
        familyNameFlag=1;
    }else{
        document.getElementById("famnameP").classList.remove("valid");
        document.getElementById("famnameP").classList.add("invalid");
    }
})

//.....................Email.............. //
//.....................Email.............. //
//.....................Email.............. //
let email=document.getElementById("email");
email.addEventListener("focus",function(){
    document.getElementById("emailP").style.display="block";
})
email.addEventListener("blur",function(){
    document.getElementById("emailP").style.display="none";
})
email.addEventListener("keyup",function(){
    let emailRE=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // let matchResult=email.value.match(emailRE);
    if(email.value.match(emailRE)){
        document.getElementById("emailP").classList.remove("invalid");
        document.getElementById("emailP").classList.add("valid");
        emailFlag=1;
    }else{
        document.getElementById("emailP").classList.remove("valid");
        document.getElementById("emailP").classList.add("invalid");
    }
    
})

//.....................Mobile.............. //
//.....................Mobile.............. //
//.....................Mobile.............. //
let mobile=document.getElementById("mobile");
mobile.addEventListener("focus",function(){
    document.getElementById("mobileNumP").style.display="block";
})
mobile.addEventListener("blur",function(){
    document.getElementById("mobileNumP").style.display="none";
})
mobile.addEventListener("keyup",function(){
    let mobileRE=/^\d{14}$/;
    // let matchResult=email.value.match(emailRE);
    if(mobile.value.match(mobileRE)){
        document.getElementById("mobileNumP").classList.remove("invalid");
        document.getElementById("mobileNumP").classList.add("valid");
        mobileFlag=1;
    }else{
        document.getElementById("mobileNumP").classList.remove("valid");
        document.getElementById("mobileNumP").classList.add("invalid");
    }
    
})

//.....................Password.............. //
//.....................Password.............. //
//.....................Password.............. //
let password=document.getElementById("password");
password.addEventListener("focus",function(){
        document.getElementById("capitalPass").style.display="block";
        document.getElementById("letterPass").style.display="block";
        document.getElementById("numberPass").style.display="block";
        document.getElementById("spChPass").style.display="block";
        document.getElementById("lengthPass").style.display="block";
})
password.addEventListener("blur",function(){
    document.getElementById("capitalPass").style.display="none";
    document.getElementById("letterPass").style.display="none";
    document.getElementById("numberPass").style.display="none";
    document.getElementById("spChPass").style.display="none";
    document.getElementById("lengthPass").style.display="none";
})
password.addEventListener("keyup",function(){
    // let passwordRE=/(^[A-Z])(?=.*\d)(?=.*[a-z]).{8,32}/g;
    
    var upperCaseLetters = /([A-Z])/g;
    if(password.value.match(upperCaseLetters)) {  
        capitalPass.classList.remove("invalid");
        capitalPass.classList.add("valid");
        up=1;
    } else {
        capitalPass.classList.remove("valid");
        capitalPass.classList.add("invalid");
    }
    var lowerCaseLetters = /(?=.*[a-z])/g;
    if(password.value.match(lowerCaseLetters)) {  
        letterPass.classList.remove("invalid");
        letterPass.classList.add("valid");
        lw=1;
    } else {
        letterPass.classList.remove("valid");
        letterPass.classList.add("invalid");
    }
    var numbers = /(?=.*\d)/g;
    if(password.value.match(numbers)) {  
        numberPass.classList.remove("invalid");
        numberPass.classList.add("valid");
        nm=1;
    } else {
        numberPass.classList.remove("valid");
        numberPass.classList.add("invalid");
    }
    if(password.value.length >= 8 && password.value.length<=32) {
        lengthPass.classList.remove("invalid");
        lengthPass.classList.add("valid");
        lg=1;
    } else {
        lengthPass.classList.remove("valid");
        lengthPass.classList.add("invalid");
    }if(up && lw && nm && lg){
        passwordFlag=1;
    }
})