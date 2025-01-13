import {
    Autocomplete,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import {FormEvent,  useState} from "react";
import {Animal, Species} from "./types.ts";
import ValidatedInput from "./ValidatedInput.tsx";
import {v4 as uuidv4} from 'uuid';


interface FormProps {
    setShowForm: (x: boolean) => void;
    addAnimal: (x: Animal) => void;
    setShowSuccessMessage: () => void;
    existingAnimal ?: Animal
}

function Form({setShowForm, addAnimal, setShowSuccessMessage, existingAnimal}: Readonly<FormProps>) {

    const [formState, setFormState] = useState<{
        animal: Animal;
        errors: { name: boolean; species: boolean; price: boolean; birthday: boolean };
    }>({
        animal: {
            id: existingAnimal ? existingAnimal.id : uuidv4(), // Increment ID only if adding new animal
            name: existingAnimal ? existingAnimal.name : "",
            species: existingAnimal ? existingAnimal.species : null,
            price: existingAnimal ? existingAnimal.price : null,
            birthday: existingAnimal ? existingAnimal.birthday : null,
        },
        errors: {
            name: !existingAnimal,
            species: !existingAnimal,
            price: !existingAnimal,
            birthday: !existingAnimal,
        },
    });


    const handleChange = (
        field: keyof Animal,
        value: string | number | Species | Date
    ) => {
        setFormState((prev) => {
            const updatedAnimal = {...prev.animal, [field]: value};
            const updatedErrors = {...prev.errors};

            if (field === "name") updatedErrors.name = (value as string).trim().length < 3;
            if (field === "species") updatedErrors.species = value === null;
            if (field === "price") updatedErrors.price = (value as number) <= 0;

            return {animal: updatedAnimal, errors: updatedErrors};
        });
    };

    const addAnimalButtonHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {animal, errors} = formState;
        if (animal.price == null || animal.species == null || Object.values(errors).some((err) => err)) {
            alert("Please fill out all fields correctly.");
            return;
        }

        addAnimal(animal);

        setShowSuccessMessage();
        setShowForm(false);
    };

    const {animal, errors} = formState;

    const isButtonDisabled =
        Object.values(errors).some((value) => value) ||
        animal.name === "" ||
        animal.species === null ||
        animal.price === null;

    return (
        <>
            <DialogTitle>Add an Animal</DialogTitle>
            <form onSubmit={addAnimalButtonHandler}>
                <DialogContent>
                    <ValidatedInput
                        isChecked={animal.name !== "" && !errors.name}
                        error={errors.name}
                        helperText={errors.name ? "Name must be at least 3 characters long" : " "}
                    >
                        <TextField
                            required
                            label="Name"
                            margin="normal"
                            value={animal.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            error={errors.name}
                            fullWidth
                        />
                    </ValidatedInput>

                    <ValidatedInput
                        isChecked={animal.species !== null && !errors.species}
                        error={errors.species}
                        helperText={errors.species ? "Please choose a Species" : " "}
                    >
                        <Autocomplete
                            disablePortal
                            options={Object.values(Species)}
                            fullWidth
                            value={animal.species}
                            onChange={(_, value) => handleChange("species", value || "")}
                            renderInput={(params) => <TextField {...params} label="Species" required/>}
                        />
                    </ValidatedInput>

                    <ValidatedInput
                        isChecked={animal.price !== null && !errors.price}
                        error={errors.price}
                        helperText={errors.price ? "Price must be higher than 0" : " "}
                    >
                        <TextField
                            required
                            fullWidth
                            label="Price"
                            type="number"
                            value={animal.price}
                            onChange={(e) => handleChange("price", parseInt(e.target.value))}
                        />
                    </ValidatedInput>

                    <ValidatedInput
                        isChecked={animal.birthday !== null && !errors.birthday}
                        error={errors.birthday}
                        helperText={errors.birthday ? "Invalid birthday" : " "}
                    >
                        <TextField
                            fullWidth
                            label="Birthday (optional)"
                            type="date"
                            value={animal.birthday}
                            onChange={(e) => handleChange("birthday", e.target.value)}
                        />
                    </ValidatedInput>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowForm(false)} color="secondary">
                        CANCEL
                    </Button>
                    <Button
                        disabled={isButtonDisabled}
                        type="submit">ADD ANIMAL</Button>
                </DialogActions>
            </form>
        </>
    );
}

export default Form;
