var select;

document.addEventListener("DOMContentLoaded", function() {
    var names = ["권현빈", "강휘성", "김초원", "정지혁", "오희원", "유호원"];
    var users = [];

    for (var i = 0; i < names.length; i++) {
        (function(i) {
            var block = document.createElement("button");
            var text = document.createElement("h1");
            block.className = "personalProfile";
            text.className = "profileExpl";
            text.textContent = names[i];
            block.appendChild(text);
            document.getElementById("users").appendChild(block);
            users[i] = block;

            block.addEventListener("click", function() {
                block.style.backgroundColor = "darkseagreen";
                select = block;

                for(var i = 0; i < names.length; i++){
                    if(block == users[i]) continue;
                    users[i].style.backgroundColor = "white";
                }
            });
        })(i);
    }
});