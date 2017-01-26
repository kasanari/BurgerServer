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
    var items = [];
    items.push(new MenuItem("Burger", 123, true, true, "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg"));
    items.push(new MenuItem("\"Burger\"", 444, true, true, "https://upload.wikimedia.org/wikipedia/commons/0/0a/Japanese_Soba_Noodles_Tsuta_01.jpg"));
    items.push(new MenuItem("Burger Vego", 333, true, true, "https://upload.wikimedia.org/wikipedia/commons/7/77/Hamburger_%285%29.jpg"));

    var menu = document.createElement('div');
    var headline = document.createElement('h1');
    var txt = document.createTextNode('Välj en burgare: ');

    headline.appendChild(txt);
    menu.appendChild(headline);
    menu.setAttribute("id", "menu");
    document.body.appendChild(menu);

    var p = document.createElement("p");
    var image = document.createElement("img");

    items.forEach(function (element) {
        var image = document.createElement("img")
            , p = document.createElement("p");
        image.setAttribute("src", element.imgsrc);
        image.setAttribute("width", "100px");
        p.appendChild(document.createTextNode(element.disp()));
        menu.appendChild(image);
        menu.appendChild(p);
    });
}


function indexPageLoaded() {
    generateMenu();
}