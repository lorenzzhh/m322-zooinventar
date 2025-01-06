export enum Species {
    Mammal = "Mammal",
    Bird = "Bird",
    Reptile = "Reptile",
    Fish = "Fish",
    Amphibian = "Amphibian",
    Insect = "Insect",
    Arachnid = "Arachnid",
}


export interface Animal {
    id: number;
    name: string;
    species: Species;
    price: number;
    birthday: Date;
}
