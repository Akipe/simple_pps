// Class
var PlanningManager = /** @class */ (function () {
    function PlanningManager() {
        this.min = 0;
        this.max = 0;
        console.log("manager");
    }
    PlanningManager.prototype.selectCard = function (num) {
        if (num < this.getLowerCard()) {
            this.min = num;
        }
        else if (num > this.getLargestCard()) {
            this.max = num;
        }
    };
    PlanningManager.prototype.getLowerCard = function () {
        return this.min;
    };
    PlanningManager.prototype.getLargestCard = function () {
        return this.max;
    };
    return PlanningManager;
}());
var Card = /** @class */ (function () {
    function Card(value) {
        this.value = value;
        var number = Number(value);
        if (isNaN(number)) {
            this.valueNb = null;
        }
        else {
            this.valueNb = number;
        }
        this.counter = 0;
    }
    Card.prototype.select = function () {
        this.counter++;
    };
    Card.prototype.unSelect = function () {
        if (this.counter > 0) {
            this.counter--;
        }
    };
    return Card;
}());
// Main code
var manager;
manager = new PlanningManager();
var allCardsElements = document.querySelectorAll(".card");
var allCards = Array();
if (allCardsElements.length > 0) {
    allCardsElements.forEach(function (cardNode) {
        cardNode.addEventListener("click", function (e) {
            alert("left click");
        });
        cardNode.addEventListener("contextmenu", function (e) {
            alert("right click");
        });
    });
}
