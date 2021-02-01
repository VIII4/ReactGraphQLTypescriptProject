//Create interface so that object will be restricted to specified types when creating data
interface TestData {
  id: string;
  title: string;
  image: string;
  address: string;
  prices: number;
  numOfGuest?: number;
  numOfBeds?: number;
  rating?: number;
}

interface Animal {
  name: string;
  age: number;
  species: string;
  mammal: boolean;
  female: boolean;
}

//global variables
let numY: number;
let numX: number;

const myfunction = (num: number, multiple: number) => num * multiple;

//data array to be exported
export const testData: TestData[] = [
  {
    id: "001",
    title: "some kind of title",
    image: "linkaddress",
    address:
      "https://res.cloudinary.com/ixport-tech/image/upload/v1611768856/samples/landscapes/beach-boat.jpg",
    prices: 1000,
    numOfGuest: 2,
    numOfBeds: 2,
    rating: 5,
  },
  {
    id: "002",
    title: "some kind of title",
    image: "linkaddress",
    address:
      "https://res.cloudinary.com/ixport-tech/image/upload/v1611768856/samples/landscapes/beach-boat.jpg",
    prices: 1000,
    numOfGuest: 2,
    numOfBeds: 2,
    rating: 5,
  },
  {
    id: "003",
    title: "some kind of title",
    image: "linkaddress",
    address:
      "https://res.cloudinary.com/ixport-tech/image/upload/v1611768856/samples/landscapes/beach-boat.jpg",
    prices: 1000,
    numOfGuest: 2,
    numOfBeds: 2,
    rating: 5,
  },
];
