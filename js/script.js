
let img_html = document.getElementById('img-html');

img_html.onmouseover = function(){
    overIMG(this.id)
}
img_html.onmouseout = function(){
    outIMG(this.id)
}

// -------------------------------------
let img_js = document.getElementById('img-js');

img_js.onmouseover = function(){
    overIMG(this.id)
}
img_js.onmouseout = function(){
    outIMG(this.id)
}

// ------------------------------------------
let img_es6 = document.getElementById('img-es6');

img_es6.onmouseover = function (){
    overIMG(this.id)
}
img_es6.onmouseout =function(){
    outIMG(this.id)
}

// ------------------------------------------
let img_linux = document.getElementById('img-linux');

img_linux.onmouseover = function(){
    overIMG(this.id)
}
img_linux.onmouseout = function(){
    outIMG(this.id)
}

let img_java = document.getElementById('img-java');

img_java.onmouseover = function(){
    overIMG(this.id)
}
img_java.onmouseout = function(){
    outIMG(this.id)
}



function overIMG (id){

    document.getElementById(id).style.boxShadow = '0px 0px 20px 1px #010c0f96';
}

function outIMG (id){

    document.getElementById(id).style.boxShadow = '0px 0px 0px 0px #fff';
}
