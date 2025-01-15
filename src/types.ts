import {Dayjs} from "dayjs";

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
    id: string;
    name: string;
    species: Species | null;
    price: number | null;
    birthday: Dayjs | null;
}
