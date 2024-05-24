import * as THREE from 'three';

const fruits = [
  {
    index: 0,
    name: "cherry",
    ratio: 620 / 46,
    image: new THREE.TextureLoader().load(require("../../Assets/Fruits/1.png")),
    color: "#F10E0E",
    mass: 1.6,
    points: 1,
  },
  {
    index: 1,
    name: "strawberry",
    ratio: 620 / 55,
    image: new THREE.TextureLoader().load(require("../../Assets/Fruits/2.png")),
    color: "#FD684D",
    mass: 1.55,
    points: 3,
  },
  {
    index: 2,
    name: "grape",
    ratio: 620 / 67,
    image: new THREE.TextureLoader().load(require("../../Assets/Fruits/3.png")),
    color: "#A16BFF",
    mass: 1.5,
    points: 6,
  },
  {
    index: 3,
    name: "gyool",
    ratio: 620 / 81,
    image: new THREE.TextureLoader().load(require("../../Assets/Fruits/4.png")),
    color: "#FEAD00",
    mass: 1.45,
    points: 10,
  },
  {
    index: 4,
    name: "orange",
    ratio: 620 / 97,
    image: new THREE.TextureLoader().load(require("../../Assets/Fruits/5.png")),
    color: "#FC8513",
    mass: 1.4,
    points: 15,
  },
  {
    index: 5,
    name: "apple",
    ratio: 620 / 117,
    image: new THREE.TextureLoader().load(require("../../Assets/Fruits/6.png")),
    color: "#F10E0E",
    mass: 1.35,
    points: 21,
  },
  {
    index: 6,
    name: "pear",
    ratio: 620 / 200,
    image: new THREE.TextureLoader().load(require("../../Assets/Fruits/7.png")),
    color: "#FAEC89",
    mass: 1.3,
    points: 28,
  },
  {
    index: 7,
    name: "peach",
    ratio: 620 / 142,
    image: new THREE.TextureLoader().load(require("../../Assets/Fruits/8.png")),
    color: "#FECBC4",
    mass: 1.25,
    points: 36,
  },
  {
    index: 8,
    name: "pineapple",
    ratio: 620 / 206,
    image: new THREE.TextureLoader().load(require("../../Assets/Fruits/9.png")),
    color: "#F7E909",
    mass: 1.2,
    points: 45,
  },
  {
    index: 9,
    name: "melon",
    ratio: 620 / 249,
    image: new THREE.TextureLoader().load(require("../../Assets/Fruits/10.png")),
    color: "#171717",
    mass: 1.15,
    points: 55,
  },
  {
    index: 10,
    name: "watermelon",
    ratio: 620 / 300,
    image: new THREE.TextureLoader().load(require("../../Assets/Fruits/11.png")),
    color: "#2CA40C",
    mass: 1.1,
    points: 66,
  },
];

export default fruits;
