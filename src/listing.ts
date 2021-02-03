//Create interface so that object will be restricted to specified types when creating data
interface Listings {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuest?: number;
  numOfBeds?: number;
  numOfBaths?: number;
  rating?: number;
}

//data array to be exported
export const listings: Listings[] = [
  {
    id: "001",
    title: "some kind of title",
    image: "linkaddress",
    address:
      "https://res.cloudinary.com/ixport-tech/image/upload/v1611768856/samples/landscapes/beach-boat.jpg",
    price: 1000,
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
    price: 1000,
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
    price: 1000,
    numOfGuest: 2,
    numOfBeds: 2,
    rating: 5,
  },
];
