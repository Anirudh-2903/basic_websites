function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest= principal * rate * years /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = parseInt(interest);
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
function validate(){  
    var num=document.getElementById("principal").value;
    var num1=parseInt(num); 
    if (num1<=0||num==""){  
      alert("Enter a positive number");
      principal.focus();
      return false;  
    }else{  
      return true;  
      }  
    }  
        
