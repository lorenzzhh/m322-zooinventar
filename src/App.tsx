import AnimalTable from "./AnimalTable.tsx";
import {useState} from "react";
import {Animal, Species} from "./types.ts";
import {Box, Container, createTheme, Dialog, IconButton, ThemeProvider} from "@mui/material";
import Form from "./Form.tsx";
import Header from "./Header.tsx";
import {lime, purple} from "@mui/material/colors";
import {Add} from "@mui/icons-material";
import './App.css'
import SuccessMessage from "./SuccessMessage.tsx";


const animalsData: Array<Animal> = [
    {id: 1, name: "Elephant", species: Species.Mammal, birthday: new Date("2010-06-21"), price: 5000},
    {id: 2, name: "Crocodile", species: Species.Reptile, birthday: new Date("2010-06-21"), price: 1200},
    {id: 3, name: "Tiger", species: Species.Mammal, birthday: new Date("2010-06-21"), price: 4500},
];

const theme = createTheme({
    palette: {
        primary: lime,
        secondary: purple,
    },
});

function App() {

    const [animals, setAnimals] = useState(animalsData);
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);



    const handleDelete = (id: number) => {
        setAnimals((prev) => prev.filter((animal) => animal.id !== id));
    };

    const handleEdit = (id: number) => {
        console.log(`Edit animal with id: ${id}`);
    };

    const [showForm, setShowForm] = useState(false)

    const addAnimal = (animal: Animal) => {
        setAnimals([...animals, animal]);
    }

    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '80%',
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
                    <Dialog open={showForm} onClose={() => setShowForm(false)}>
                        <Form setShowForm={(x) => setShowForm(x)} addAnimal={(a) => addAnimal(a)}
                              setShowSuccessMessage={() => setShowSuccessMessage(true)}/>
                    </Dialog>
                )
            }

        </ThemeProvider>

    );
}

export default App
