// LOGIN PAGE AUTHENTICATION

function check(form)
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "kcbnkv" && password === "hello") 
    { 
        alert("Welcome!");
        window.open("https://www.linkedin.com/in/kcbnkv/");
        
    }
    else 
    {
        alert("The username and password you entered don't match");
    } 
}


// SELF UPDATING DATE 

function display_time() {
    var x = new Date()
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    hours = x.getHours( ) % 12;
    hours = hours ? hours : 12;
    hours=hours.toString().length==1? 0+hours.toString() : hours;
    
    var minutes=x.getMinutes().toString()
    minutes=minutes.length==1 ? 0+minutes : minutes;
    
    var seconds=x.getSeconds().toString()
    seconds=seconds.length==1 ? 0+seconds : seconds;
    
    var month=(x.getMonth() +1).toString();
    month=month.length==1 ? 0+month : month;
    
    var dt=x.getDate().toString();
    dt=dt.length==1 ? 0+dt : dt;
    
    var x1=dt + "/" + month + "/" + x.getFullYear();
//     var x1=month + "/" + dt + "/" + x.getFullYear(); month first, followed by day.
    x1 = x1 + " - " +  hours + ":" +  minutes + ":" +  seconds + " " + ampm;
    document.getElementById('time').innerHTML = x1;
    display_c7();
    }
     function display_c7(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_time()',refresh)
    }
    display_time()



