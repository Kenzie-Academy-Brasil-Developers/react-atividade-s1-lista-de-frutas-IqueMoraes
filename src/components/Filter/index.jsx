export default function filterRedFruits(fruits, setFruits, setColor) {
  setFruits(fruits.filter((fruit) => fruit.color === "red"));
  setColor("#790a0a");
}
