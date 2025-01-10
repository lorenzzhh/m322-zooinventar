import {Autocomplete, Button, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {Animal, Species} from "./types.ts";
import React, {FormEvent, useState} from "react";
import ValidatedInput from "./ValidatedInput.tsx";

interface FormProps {
    setShowForm: (x: boolean) => void;
    addAnimal: (x: Animal) => void;
}

function Form({setShowForm, addAnimal}: Readonly<FormProps>) {

    const [animal, setAnimal] = useState<Animal>({
        id: 1,
        name: "",
        species: Species.Mammal,
        price: 0,
        birthday: new Date()
    })

    const addAnimalButtonHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (animal) {
            addAnimal(animal);
            setShowForm(false);
        } else {
            alert('Please fill out all fields.');
        }
    };

    const [errors, setErrors] = useState({name: false, species: false, price: false, birthday: false});

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        setAnimal((prev) => ({...prev, name}));
        setErrors((prev) => ({...prev, name: name.trim().length < 3}));
        //validateForm();
    };

    const handleSpeciesChange = (_event: React.SyntheticEvent, value: string | null) => {
        const speciesValue = value as Species | null;
        if (speciesValue !== null) {
            setAnimal((prev) => ({...prev, species: speciesValue}));
        }
        setErrors((prev) => ({...prev, species: speciesValue === null}));
        // validateForm();
    };


    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const price = parseInt(e.target.value);
        setAnimal((prev) => ({...prev, price}));
        setErrors((prev) => ({...prev, price: price < 0}));
        //validateForm();
    };

    const handleBirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const birthday = new Date(e.target.value);
        console.log(birthday)
        setAnimal((prev) => ({...prev, birthday: birthday}));
        setErrors((prev) => ({...prev, birthday: false}));
        //validateForm();
    };

    // const validateForm = () => {
    //     const isValid = animal.name.trim().length >= 3 && Object.values(AnimalType).includes(animal.type) && animal.price > 0;
    //     setAddDisabled(!isValid);
    // };

    return (
        <>
            <DialogTitle>Add an Animal</DialogTitle>
            <form onSubmit={addAnimalButtonHandler}>
                <DialogContent>

                    <ValidatedInput
                        error={errors.name}
                        helperText={errors.name ? 'Name must be at least 3 characters long' : ' '}>
                        <TextField
                            required
                            label="Name"
                            margin="normal"
                            value={animal.name}
                            onChange={handleNameChange}
                            error={errors.name}
                            fullWidth
                        />
                    </ValidatedInput>

                    <ValidatedInput
                        error={errors.species}
                        helperText={errors.species ? 'Please choose a Species' : ' '}>
                        <Autocomplete
                            disablePortal
                            options={Object.values(Species)}
                            fullWidth
                            value={animal.species}
                            onChange={handleSpeciesChange}
                            renderInput={(params) => <TextField {...params} label="Species" required/>}
                        />
                    </ValidatedInput>


                    <ValidatedInput
                        error={errors.price}
                        helperText={errors.price ? 'Price must be higher than 0' : ' '}>
                        <TextField
                            required
                            fullWidth
                            label="Price"
                            type="number"
                            value={animal.price}
                            onChange={handlePriceChange}
                        />
                    </ValidatedInput>

                    <ValidatedInput
                        error={errors.birthday}
                        helperText={errors.birthday ? 'Birthday error' : ' '}>
                        <TextField
                            fullWidth
                            label="Birthday"
                            type="date"
                            value={animal.birthday}
                            onChange={handleBirthdayChange}
                        />
                    </ValidatedInput>

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
