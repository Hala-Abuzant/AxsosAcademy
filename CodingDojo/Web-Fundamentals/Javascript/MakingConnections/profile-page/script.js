

function change (x){

document.getElementById("name1").innerText="Ahmad Hamdan";


}

function add1(){

   var c= document.getElementById("card-list-item");
   c.remove();

   var x=document.getElementById("badge").innerText;
   var y=parseInt(x);
   document.getElementById("badge").innerText=y-1;

   var x=document.getElementById("badge1").innerText;
   var y=parseInt(x);
   document.getElementById("badge1").innerText=y+1;

}


function rem1(){

    var c= document.getElementById("card-list-item");
    c.remove();
 
 }




