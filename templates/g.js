


 document.getElementById("r").addEventListener("click",function (){
   fetch('/red' , {method:'post'}).then(console.log('c'));

  });
    
  document.getElementById("y").addEventListener("click",function (){
    fetch('/yellow' , {method:'post'}).then(console.log('c'));


  });
    
 document.getElementById("g").addEventListener("click",function (){
   fetch('/green' , {method:'post'}).then(console.log('c'));


 });
 document.getElementById("tl").addEventListener("click",function (){
  fetch('/left' , {method:'post'}).then(console.log('c'));


});
document.getElementById("tr").addEventListener("click",function (){
  fetch('/right', {method:'post'}).then(console.log('c'));


});
//document.getElementById("ana").addEventListener("click",function (){
//  fetch('http://ec2-13-233-35-84.ap-south-1.compute.amazonaws.com/hack/public/car', {method:'get'}).then(alert("video has been analysed and"+ return(number)+"has been analysed"));
//});
const http = new XMLHttpRequest()

//http.open("GET", "http://ec2-13-233-35-84.ap-south-1.compute.amazonaws.com/hack/public/car")
//http.send();

//http.onload = () => alert(http.responseText);
  
