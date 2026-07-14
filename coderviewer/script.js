async function reviewCode(){

const code = document.getElementById("code").value;

const resultBox = document.getElementById("result");

resultBox.innerHTML = "Analyzing your code...";

const response = await fetch("/review",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({code})
});

const data = await response.json();

resultBox.innerText = data.review;

}