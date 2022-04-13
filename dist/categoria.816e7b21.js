//app.js solo se carga en la página "categoria"
window.onload = function() {
    var infancia = document.getElementById("infancia");
    infancia.onmouseover = function() {
        document.getElementById("infancia").innerHTML = "Infancia";
    };
    infancia.onmouseout = function() {
        document.getElementById("infancia").innerHTML = "Ver";
    };
    var filmografia = document.getElementById("filmografia");
    filmografia.onmouseover = function() {
        document.getElementById("filmografia").innerHTML = "Filmografía";
    };
    filmografia.onmouseout = function() {
        document.getElementById("filmografia").innerHTML = "Ver";
    };
    var politico = document.getElementById("politico");
    politico.onmouseover = function() {
        document.getElementById("politico").innerHTML = "Político";
    };
    politico.onmouseout = function() {
        document.getElementById("politico").innerHTML = "Ver";
    };
    var compositor = document.getElementById("compositor");
    compositor.onmouseover = function() {
        document.getElementById("compositor").innerHTML = "Compositor";
    };
    compositor.onmouseout = function() {
        document.getElementById("compositor").innerHTML = "Ver";
    };
    var exilio = document.getElementById("exilio");
    exilio.onmouseover = function() {
        document.getElementById("exilio").innerHTML = "Exilio";
    };
    exilio.onmouseout = function() {
        document.getElementById("exilio").innerHTML = "Ver";
    };
    var familia = document.getElementById("familia");
    familia.onmouseover = function() {
        document.getElementById("familia").innerHTML = "Familia";
    };
    familia.onmouseout = function() {
        document.getElementById("familia").innerHTML = "Ver";
    };
};

//# sourceMappingURL=categoria.816e7b21.js.map
