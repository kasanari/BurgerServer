"use strict";

function docLoaded(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function MenuItem(name, kcal, gluten, lactose, imgsrc) {
    this.name = name;
    this.imgsrc = imgsrc;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.disp = function () {
        return "Name: " + this.name + ", KCal: " + this.kcal;
    };
}

function generateMenu() {

    var menu = document.createElement('div');
    var headline = document.createElement('h1');
    var txt = document.createTextNode('Välj en burgare: ');

    headline.appendChild(txt);
    menu.appendChild(headline);
    menu.setAttribute("id", "menu");
    document.body.appendChild(menu);

    food.forEach(function (element) {
        var image = document.createElement("img");
        var p = document.createElement("p");
        var header = document.createElement("h3");
        var check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.setAttribute("class", "burgers");
        check.setAttribute("name", "item[]");
        check.setAttribute("value", element.name);
        image.setAttribute("src", element.img);
        image.setAttribute("width", "100px");

        header.appendChild(document.createTextNode(element.name));
        menu.appendChild(header);

        if (element.lactose) {
            p.appendChild(document.createElement("br"));
            p.appendChild(document.createTextNode("Laktos"));
        }

        if (element.gluten) {
            p.appendChild(document.createElement("br"));
            p.appendChild(document.createTextNode("Gluten"));
        }


        menu.appendChild(image);
        menu.appendChild(p);
        menu.appendChild(check);

    });
}


function indexPageLoaded() {
    generateMenu();
}