// JavaScript Document

function myForm() { 
    var name = document.forms["RegForm"]["fullName"];               
    var email = document.forms["RegForm"]["emailAddress"];    
    var phone = document.forms["RegForm"]["mobilePhone"]; 
   
    if (name.value == "") { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    }  
       
    if (email.value == "") { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0) { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0) { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (phone.value == "") { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
   
    return true; 
}