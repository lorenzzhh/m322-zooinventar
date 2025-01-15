import AnimalTable from "./AnimalTable.tsx";
import {useState} from "react";
import {Animal, Species} from "./types.ts";
import {Box, Container, createTheme, Dialog, IconButton, ThemeProvider} from "@mui/material";
import Form from "./Form.tsx";
import Header from "./Header.tsx";
import {Add} from "@mui/icons-material";
import './App.css'
import {v4 as uuidv4} from 'uuid';
import SuccessMessage from "./SuccessMessage.tsx";
import dayjs from "dayjs";


const animalsData: Array<Animal> = [
    {id: uuidv4(), name: "Elephant", species: Species.Mammal, birthday: dayjs("2010-06-21"), price: 5000},
    {id: uuidv4(), name: "Crocodile", species: Species.Reptile, birthday: dayjs("2010-06-21"), price: 1200},
    {id: uuidv4(), name: "Tiger", species: Species.Mammal, birthday: dayjs("2010-06-21"), price: 4500}
];

const theme = createTheme({
    palette: {
        primary: {
            main: '#0052CC'
        },
        secondary: {
            main: '#c62828'
        }
    }
});

function App() {
    const [animals, setAnimals] = useState(animalsData);
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
    const [showForm, setShowForm] = useState(false)
    const [existingAnimal, setExistingAnimal] = useState<Animal>()


    const handleDelete = (uuid: string) => {
        setAnimals((prev) => prev.filter((animal) => animal.id !== uuid));
    };

    const handleEdit = (uuid: string) => {
        const animalToEdit = animals.find((animal) => animal.id === uuid);
        if (animalToEdit) {
            setExistingAnimal(animalToEdit);
        }
        setShowForm(true);
    };

    const addAnimal = (newAnimal: Animal) => {
        const animalIndex = animals.findIndex((animal) => animal.id === newAnimal.id);

        if (animalIndex !== -1) {
            setAnimals((prev) => {
                const updatedAnimals = [...prev];
                updatedAnimals[animalIndex] = newAnimal;
                return updatedAnimals;
            });
        } else {
            setAnimals((prev) => [...prev, newAnimal]);
        }

        setExistingAnimal(undefined);
        setShowSuccessMessage(true);
    };


    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    width: '80%',
                    margin: '0 auto',
                    marginTop: '2rem',
                    '@media (max-width: 480px)': {
                        width: '95%',
                    }
                }}
            >
                <AnimalTable
                    animals={animals}
                    onDelete={handleDelete}
                    onEdit={handleEdit}

                />
                <Box sx={{
                    marginTop: '10px',
                    display: 'flex',
                    justifyContent: 'flex-end',
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
                    <Dialog open={showForm} onClose={() => {
                        setShowForm(false);
                        setExistingAnimal(undefined);
                    }}>
                        <Form
                            existingAnimal={existingAnimal}
                            setShowForm={(x) => {
                                setShowForm(x);
                                setExistingAnimal(undefined);
                            }}
                            addAnimal={(a) => addAnimal(a)}
                            setShowSuccessMessage={() => setShowSuccessMessage(true)}
                        />
                    </Dialog>
                )}
        </ThemeProvider>

    );
}

export default App
