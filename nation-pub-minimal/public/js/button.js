function sendToKitchen() {
    var soda = document.getElementById("soda").value;
    var sugar = document.getElementsByName("hasSugar");
    var hasSugar;
    var i, k;
    for (i = 0, length = sugar.length; i < length; i++) {
        if (sugar[i].checked) {
            hasSugar = sugar[i].value;
            break;
        }

    }
    var burgers = document.getElementsByClassName("burgers");
    for (k = 0, length = burgers.length; k < length; k++) {
        if (burgers[i].checked) {
            console.log(burgers[i].value);
        }

    }
    console.log(soda);
    console.log(hasSugar);
}

var vm = new Vue({
    el: "#submit"
    , methods: {
        sendTo: function () {
            placeOrder();
        }
    }
});