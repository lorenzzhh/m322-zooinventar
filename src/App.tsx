import AnimalTable from "./AnimalTable.tsx";
import {useState} from "react";
import {Animal, Species} from "./types.ts";
import {Box, Container, createTheme, Dialog, IconButton, ThemeProvider} from "@mui/material";
import Form from "./Form.tsx";
import Header from "./Header.tsx";
import {Add} from "@mui/icons-material";
import './App.css'
import SuccessMessage from "./SuccessMessage.tsx";


const animalsData: Array<Animal> =[
    { id: 1, name: "Elephant", species: Species.Mammal, birthday: new Date("2010-06-21"), price: 5000 },
    { id: 2, name: "Crocodile", species: Species.Reptile, birthday: new Date("2010-06-21"), price: 1200 },
    { id: 3, name: "Tiger", species: Species.Mammal, birthday: new Date("2010-06-21"), price: 4500 },
    { id: 4, name: "Giraffe", species: Species.Mammal, birthday: new Date("2012-07-15"), price: 3500 },
    { id: 5, name: "Penguin", species: Species.Bird, birthday: new Date("2015-11-22"), price: 800 },
    { id: 6, name: "Panda", species: Species.Mammal, birthday: new Date("2013-09-10"), price: 4200 },
    { id: 7, name: "Koala", species: Species.Mammal, birthday: new Date("2014-12-03"), price: 2500 },
    { id: 8, name: "Kangaroo", species: Species.Mammal, birthday: new Date("2011-04-10"), price: 3000 },
    { id: 9, name: "Snake", species: Species.Reptile, birthday: new Date("2016-02-18"), price: 400 },
    { id: 10, name: "Cheetah", species: Species.Mammal, birthday: new Date("2012-05-30"), price: 6000 },
    { id: 11, name: "Leopard", species: Species.Mammal, birthday: new Date("2013-08-14"), price: 5500 },
    { id: 12, name: "Wolf", species: Species.Mammal, birthday: new Date("2014-10-21"), price: 2300 },
    { id: 13, name: "Parrot", species: Species.Bird, birthday: new Date("2017-01-15"), price: 700 },
    { id: 14, name: "Zebra", species: Species.Mammal, birthday: new Date("2011-03-11"), price: 3800 },
    { id: 15, name: "Rhinoceros", species: Species.Mammal, birthday: new Date("2012-06-22"), price: 7500 },
    { id: 16, name: "Gorilla", species: Species.Mammal, birthday: new Date("2010-09-05"), price: 9000 },
    { id: 17, name: "Hippopotamus", species: Species.Mammal, birthday: new Date("2014-03-08"), price: 6500 },
    { id: 18, name: "Shark", species: Species.Fish, birthday: new Date("2016-07-14"), price: 10000 },
    { id: 19, name: "Lion", species: Species.Mammal, birthday: new Date("2011-12-19"), price: 8500 },
    { id: 20, name: "Alligator", species: Species.Reptile, birthday: new Date("2015-10-25"), price: 1500 },
];

const theme = createTheme({
    palette: {
        primary: {
            main: '#0052CC'
        },
        secondary: {
            main: '#ff5e4e'
        }
    }
});

function App() {

    const [animals, setAnimals] = useState(animalsData);
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
    const [showForm, setShowForm] = useState(false)
    const [existingAnimal, setExistingAnimal] = useState<Animal>()


    const handleDelete = (id: number) => {
        setAnimals((prev) => prev.filter((animal) => animal.id !== id));
    };

    const handleEdit = (id: number) => {
        const animalToEdit = animals.find((animal) => animal.id === id);
        if (animalToEdit) {
            setExistingAnimal(animalToEdit);
        }
        setShowForm(true);
    };

    const addAnimal = (animal: Animal) => {
        if (!animal.id) {
            const newId = Math.max(...animals.map((a) => a.id)) + 1;
            animal.id = newId;
        }
        setAnimals((prev) => [...prev, animal]);
        setExistingAnimal(undefined);
        setShowSuccessMessage(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '70%',
                margin: '0 auto',
                marginTop: '1rem'
            }}>
                <AnimalTable
                    animals={animals}
                    onDelete={handleDelete}
                    onEdit={handleEdit}

                />
                <Box sx={{
                    marginTop: '10px',
                    display: 'flex',
                    justifyContent: 'space-around',
                }}>

                    <IconButton
                        sx={{
                            backgroundColor: "primary.main"
                        }}
                        onClick={() => setShowForm(true)}
                        aria-label="add-animal">
                        <Add/>
                    </IconButton>
                </Box>

                {
                    showSuccessMessage && (
                        <SuccessMessage/>
                    )
                }
            </Container>

            {
                showForm && (
                    <Dialog open={showForm} onClose={() => setShowForm(false)}>
                        <Form existingAnimal={existingAnimal} setShowForm={(x) => setShowForm(x)} addAnimal={(a) => addAnimal(a)}
                              setShowSuccessMessage={() => setShowSuccessMessage(true)}/>
                    </Dialog>
                )
            }

        </ThemeProvider>

    );
}

export default App
