// function Change()
// {
//     var color=document.getElementById("opendiv");
//     var barclose=document.getElementById("bar");
//     var sk=document.getElementById("sk");
//     if(color.style.display===`block`&&barclose.style.display===`none`)
// {
//     color.style.display=`none`;
//     barclose.style.display=`block`;
//     sk.style.marginTop=`262px`;
//     sk.style.display=`block`;
  
// }
// else{
//     color.style.display=`block`;
//     barclose.style.display=`none`;
//     sk.style.marginTop=`225px`;
//     sk.style.display=`block`;
  
// }
// }
// function Close()
// {     var close=document.getElementById("closing");
//     if(close.style.display===`none`)
//         {
//             close.style.display=`block`;
//        }
//        else
//        {
//         close.style.display=`none`;
//        }
// }

//increment and decrement
var increment=0;
function incrementt()
{
    increment=increment+1;
    document.getElementById("display").innerHTML=`${increment}`;
   
}
function decrementt()
{
    increment=increment-1;
    document.getElementById("display").innerHTML=`${increment}`;

}
