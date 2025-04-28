
function telaLogin() {                                  //TELA LOGIN
    $("#page").load("pages/login.html");
}

function telaLogout() {                                 //TELA LOGOUT
    $("#page").load("pages/logout.html");
}

function telaDefault() {                                //TELA PADRAO
    $("#page").load("pages/default.html");
}

// MENU FUNCTIONALITY
function openMenu() {
    $("#menu-nav").css("width","550px");
    $("#close-menu").fadeIn();
}

function closeMenu() {
    $("#menu-nav").css("width","0");
    $("#close-menu").fadeOut();
}

// PAGES CALL
function displayMain() {
    $("#content-display").load("pages/main.html");
    $("#titulo").html("MAIN MEASUREMENTS");
    closeMenu();
}

function displayUsers() {
    $("#content-display").load("pages/users.html");
    $("#titulo").html("USERS SETTINGS");
    closeMenu();
}
