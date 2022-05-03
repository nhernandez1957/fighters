class Fighter{
    static count = 0;
    constructor(name, weight, strength, speed, color){
        //name, weight(1-10), percentage, strength(1-10), speed(1-10), color, playerNum
        this.name = name;
        this.weight = weight;
        this.percentage = 0;
        this. strength = strength;
        this.speed = speed;
        this.color = color;
        this.playeNum = ++Fighter.count;
    }

    attack(opponent){
        if(opponent instanceof Fighter){
            opponent.percentage += this.strength;
            console.log(`${this.name} attacked ${opponent.name} and dealt ${this.strength}% damage!!`)
        }
    }

    special(opponent){
        if(opponent instanceof Fighter){
            opponent.percentage += this.strength * this.weight;
            console.log(`${this.name} performed a special on ${opponent.name} and dealt ${this.strength * this.weight}% damage!!`)
        }
    }
}

// const sora = new Fighter("Sora", 3, 6, 5, "Red");
// const yoshi = new Fighter("Yoshi", 3, 5, 6, "Green")
// yoshi.special(sora);
// console.log(sora);

module.exports = Fighter;