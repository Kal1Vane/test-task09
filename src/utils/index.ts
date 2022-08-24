import { ProductType } from "../types";

const MAKE_FAKE_PRODUCTS = 4;

export function makeFakeProducts(): ProductType[] {
  const arr = [];
  for (let i = 0; MAKE_FAKE_PRODUCTS > i; i++) {
    
    arr.push({
      title: makeFakeTitle(),
      img: "img/product.png",
      price: randomIntFromInterval(500, 800),
    });
  }
  return arr;
}

function makeFakeTitle() {
  const arrayTitle = ["Термокружка", "Фен-щетка", "Внешний аккумулятор"];
  const count = randomIntFromInterval(0, arrayTitle.length - 1);
  return arrayTitle[count];
}

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
