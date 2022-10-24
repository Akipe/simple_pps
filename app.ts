// Class

class PlanningManager
{
    private min: number;
    private max: number;

    constructor()
    {
        this.min = 0;
        this.max = 0;

        console.log("manager")
    }

    public selectCard(num: number)
    {
        if (num < this.getLowerCard()) {
            this.min = num
        }
        else if (num > this.getLargestCard()) {
            this.max = num
        }
    }

    public getLowerCard(): number
    {
        return this.min;
    }

    public getLargestCard(): number
    {
        return this.max;
    }
}

class Card
{
    public readonly value: string
    public readonly valueNb : number | null
    private counter: number

    constructor(value: string)
    {
        this.value = value;

        let number = Number(value)

        if (isNaN(number)) {
            this.valueNb = null
        } else {
            this.valueNb = number
        }

        this.counter = 0
    }

    public select(): void
    {
        this.counter++
    }

    public unSelect(): void
    {
        if (this.counter > 0) {
            this.counter--
        }
    }
}

// Main code

let manager : PlanningManager;

manager = new PlanningManager();

let allCardsElements = document.querySelectorAll<HTMLElement>(".card");
let allCards : Array<Card> = Array()

if (allCardsElements.length > 0) {
    allCardsElements.forEach(cardNode => {
        cardNode.addEventListener("click", (e) => {
            alert("left click")
        })
        cardNode.addEventListener("contextmenu", (e) => {
            alert("right click")
        })
    });
}
