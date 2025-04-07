// src/components/config/buyingFlowConfig.ts

export const buyingFlowConfig = {
    steps: [
      {
        title: "Pet's Information",
        routes: [
          "/location",
          "/dog-or-cat",
          "/gender",
          "/breed",
          "/age",
          "/weight",
          "/activity",
          "/add-more-pets",
        ],
      },
      {
        title: "Pet's Health",
        routes: ["/choose-our-plans"],
      },
      {
        title: "Plan & Checkout",
        routes: ["/checkout-login", "/checkout"],
      },
    ],
  };
  
  export const breedOptions = {
    dog: [
      "Affenpinscher",
      "Afghan Hound",
      "Airedale Terrier",
      "Akita",
      "Alaskan Malamute",
      // More breeds can be added
    ],
    cat: [
      "Abyssinian",
      "American Bobtail",
      "American Curl",
      "American Shorthair",
      "American Wirehair",
      // More breeds can be added
    ],
  };
  
  export type Pet = {
    id: string;
    type: "dog" | "cat";
    name: string;
    gender: "male" | "female";
    breed: string;
    age: {
      type: "dob" | "approximate";
      value: string | Date;
    };
    weight: number;
    targetWeight: number;
    activityLevel: "sedentary" | "less-active" | "active";
  };
  
  // Initial state for a new pet
  export const initialPetState: Pet = {
    id: "",
    type: "dog",
    name: "",
    gender: "male",
    breed: "",
    age: {
      type: "dob",
      value: new Date(),
    },
    weight: 0,
    targetWeight: 0,
    activityLevel: "less-active",
  };