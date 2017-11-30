var reflection = { 
    "login-btn": {".tologin":"none",".hasLogined":"flex",".login-container":"none"},
    "tologin": {".login-container":"flex"},
    "toRegister": {".register-container":"flex"},
    "registerToLogin": {".register-container":"none",".login-container":"flex"},
    "register-btn": {".register-container":"none",".login-container":"flex"},
};

var body = document.body;
body.onclick = function(e){
    console.log("I am clicking the body");
    var item = e.target;
    if( reflection[item.className] != null ){
        console.log("I am clicking on button");
        var actions = reflection[item.className];
        for( actionKey in actions )
            document.querySelector(actionKey).style.display = actions[actionKey];
    }
}

