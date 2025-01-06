import {Autocomplete, Button, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {Animal, Species} from "./types.ts";
import {FormEvent, useState} from "react";

interface FormProps {
    setShowForm: (x: boolean) => void;
    addAnimal: (x: Animal) => void;
}

function Form({setShowForm, addAnimal}: Readonly<FormProps>) {

    const [name, setName] = useState<string>('');
    const [species, setSpecies] = useState<Species | null>(null);
    const [price, setPrice] = useState<number | ''>('');
    const [birthday, setBirthday] = useState<string>('');


    const addAnimalButtonHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name && species && price) {
            const newAnimal: Animal = {
                id: 2,
                name,
                species,
                price: Number(price),
                birthday: new Date(birthday),
            };
            addAnimal(newAnimal);
            setShowForm(false);
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <>
            <DialogTitle>Add an Animal</DialogTitle>
            <form onSubmit={addAnimalButtonHandler}>
                <DialogContent>
                    <TextField
                        required
                        sx={{width: 300}}
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Autocomplete
                        disablePortal
                        options={Object.values(Species)}
                        sx={{width: 300}}
                        value={species}
                        onChange={(event, newValue) => setSpecies(newValue)}
                        renderInput={(params) => <TextField {...params} label="Species" required/>}
                    />
                    <TextField
                        required
                        sx={{width: 300}}
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value !== '' ? Number(e.target.value) : '')}
                    />
                    <TextField
                        sx={{width: 300}}
                        id="outlined-basic"
                        label="Birthday"
                        variant="outlined"
                        type="date"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowForm(false)} color="secondary">
                        CANCEL
                    </Button>
                    <Button type="submit">ADD ANIMAL</Button>
                </DialogActions>
            </form>
        </>
    );
}

export default Form;
