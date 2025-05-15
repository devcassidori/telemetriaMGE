// PAGES CALL
function login() {
    $("#page").load("pages/login.html");
}

function exit() {
    $("#page").load("pages/logout.html");
}

function padrao (){
    $("#page").load("pages/default.html");
    $("#painel").load("pages/painel.html");
}

function main() {
    $("#content-display").load("pages/main.html");
    $("#titulo").html("MAIN MEASUREMENTS");
    closeMenu();
}

function user() {
    $("#content-display").load("pages/users.html");
    $("#titulo").html("USERS SETTINGS");
    $("#edit-user").load("pages/edit-user.html");
    closeMenu();
}

// MENU FUNCTIONALITY
function openMenu() {
    $("#menu").load("pages/menu.html");
    $("#menu-nav").css("width", "550px");
    $("#close-menu").fadeIn();
    $(".blur").css("filter", "blur(2px)");
}

function closeMenu() {
    $("#menu-nav").css("width", "0");
    $("#close-menu").fadeOut();
    $(".blur").css("filter", "blur(0)");
}

//MODAL USER EDIT
function openEdit() {
    $(".modal-user").fadeIn();
}

function closeEdit() {
    $(".modal-user").fadeOut();
}