/**
 * Класс предмета
 * @class
 */
class Item {
    /**
     * @param {string} name - Название
     * @param {number} weight - Вес
     * @param {string} rarity - Редкость
     */
    constructor(name, weight, rarity) {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
    }

    /**
     * Инфо о предмете
     * @returns {string}
     */
    getInfo() {
        return `${this.name} (Weight: ${this.weight}, Rarity: ${this.rarity})`;
    }

    /**
     * Изменить вес
     * @param {number} newWeight - Новый вес
     */
    setWeight(newWeight) {
        this.weight = newWeight;
    }
}

/**
 * Класс оружия
 * @class
 * @extends Item
 */
class Weapon extends Item {
    /**
     * @param {string} name - Название
     * @param {number} weight - Вес
     * @param {string} rarity - Редкость
     * @param {number} damage - Урон
     * @param {number} durability - Прочность
     */
    constructor(name, weight, rarity, damage, durability) {
        super(name, weight, rarity);
        this.damage = damage;
        this.durability = durability;
    }

    /**
     * Использовать оружие
     */
    use() {
        if (this.durability > 0) this.durability -= 10;
    }

    /**
     * Починить оружие
     */
    repair() {
        this.durability = 100;
    }
}

// Пример
const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());   // Longbow (Weight: 2, Rarity: uncommon)
bow.use();
console.log(bow.durability);  // 90
bow.repair();
console.log(bow.durability);  // 100