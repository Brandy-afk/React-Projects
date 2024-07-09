export default class Car {
  #key;

  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
    this.#key = this.#generateRandomKey();
  }

  returnObject() {
    return {
      key: this.#key,
      name: this.name,
      cost: this.cost,
    };
  }

  returnKey() {
    return this.#key;
  }

  #generateRandomKey(length = 8) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      key += characters.charAt(randomIndex);
    }

    return key;
  }
}
