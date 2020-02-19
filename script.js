alert("Choose a length of password between 8 and 128 numbers.")


function generate(){
    var complexity = document.getElementById("length").value;

    var values = "ABDCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&'()*+,/:;<=>?[\]^_`{|}!~";
   
    var password = "";

    for(var i = 1; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length + 1)));
    }

    document.getElementById("display").value = password;
}

function copy(){

    document.getElementById("display").select();

    document.execCommand("copy");
}
