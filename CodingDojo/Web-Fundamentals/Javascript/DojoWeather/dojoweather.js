
var element = document.querySelector(".third");
function hide() 
{
    element.remove();
}


    function change(){
    var y=document.querySelector(".cf").value;
    console.log(y);

    var x = document.querySelectorAll(".degree");//.innerHTML doesn't work

    
    for(var i=0;i<x.length;i++)
    {
        
            if( y=="Celsius")
            {
                x[i].innerHTML=Math.floor(((x[i].innerHTML)-32)/1.8);

            }

                        if(y=="Fahrenheit")
                    {

                        x[i].innerHTML= Math.floor(x[i].innerHTML*1.8+32);
                    } }

    

    

    

}