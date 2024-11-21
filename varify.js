document.getElementById("varifyBtn").addEventListener("click",function(){
    document.getElementById("loginModal").style.display = "block";
})

document.getElementById("closeLoginModalBtn").addEventListener("click", function(){
    document.getElementById("loginModal").style.display = "none";
})

document.getElementById("loginCheckbox").addEventListener("click",function(){
    location.href='main.html'
})