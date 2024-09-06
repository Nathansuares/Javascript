const checkbox= document.getElementById("mybox");
const visa = document.getElementById("visa");
const master = document.getElementById("master");
const paypal = document.getElementById("paypal");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const radioresult = document.getElementById("radioresult");

mysubmit.onclick= function(){
    if(mybox.checked){
        subresult.textContent= `You are subscribed!!`;
    }
    else{
        subresult.textContent= `You are not subscribed`;
    }

    if(visa.checked){
        radioresult.textContent= `visa checked`;
    }
    else if(master.checked){
        radioresult.textContent= `master checked`;
    }
    else if(paypal.checked){
        radioresult.textContent= `paypal checked`;
    }
    else{
        radioresult.textContent= `you must select a payment type`;
    }
}

