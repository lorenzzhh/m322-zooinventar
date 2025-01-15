import {
    Autocomplete,
    Container,
    DialogActions,
    DialogContent,
    DialogTitle,
    InputAdornment,
    TextField,
} from "@mui/material";
import {FormEvent, useState} from "react";
import {Animal, Species} from "./types.ts";
import ValidatedInput from "./ValidatedInput.tsx";
import {v4 as uuidv4} from 'uuid';
import FormButtonStack from "./FormButtonStack.tsx";
import dayjs, {Dayjs} from 'dayjs';

interface FormProps {
    setShowForm: (x: boolean) => void;
    addAnimal: (x: Animal) => void;
    setShowSuccessMessage: () => void;
    existingAnimal?: Animal;
}

function Form({setShowForm, addAnimal, setShowSuccessMessage, existingAnimal}: Readonly<FormProps>) {

    const [formState, setFormState] = useState<{
        animal: Animal;
        errors: { name: boolean; species: boolean; price: boolean; birthday: boolean };
    }>({
        animal: {
            id: existingAnimal ? existingAnimal.id : uuidv4(),
            name: existingAnimal ? existingAnimal.name : "",
            species: existingAnimal ? existingAnimal.species : null,
            price: existingAnimal ? existingAnimal.price : null,
            birthday: existingAnimal ? existingAnimal.birthday : null,
        },
        errors: {
            name: false,
            species: false,
            price: false,
            birthday: false,
        },
    });

    const handleChange = (
        field: keyof Animal,
        value: string | number | Species | Dayjs | null
    ) => {
        setFormState((prev) => {
            const updatedAnimal = {...prev.animal, [field]: value};
            const updatedErrors = {...prev.errors};

            if (field === "name") updatedErrors.name = (value as string).trim().length < 3;
            if (field === "species") updatedErrors.species = value === null;
            if (field === "price") updatedErrors.price = (value as number) <= 0;
            if (field === "birthday") updatedErrors.birthday = dayjs(value).isAfter(dayjs()) || dayjs(value).isBefore(dayjs().subtract(150, "years"));

            return {animal: updatedAnimal, errors: updatedErrors};
        });
    };

    const addAnimalButtonHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
        <Container sx={{
            width: '500px',
            maxWidth: '90%'
        }}>
            <DialogTitle>Add an Animal</DialogTitle>
            <form onSubmit={addAnimalButtonHandler}>
                <DialogContent>
                    <ValidatedInput
                        isChecked={animal.name !== "" && !errors.name}
                        error={errors.name}
                        helperText={"Name must be at least 3 characters long"}
                    >
                        <TextField
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
                        helperText={"Please choose a Species"}
                    >
                        <Autocomplete
                            disablePortal
                            options={Object.values(Species)}
                            fullWidth
                            value={animal.species}
                            onChange={(_, value) => handleChange("species", value ?? "")}
                            renderInput={(params) => <TextField {...params} label="Species"/>}
                        />
                    </ValidatedInput>
                    <ValidatedInput
                        isChecked={animal.price !== null && !errors.price}
                        error={errors.price}
                        helperText={"Price must be higher than 0"}
                    >
                        <TextField
                            fullWidth
                            label="Price"
                            type="number"
                            value={animal.price}
                            onChange={(e) => handleChange("price", parseFloat(e.target.value))}
                            slotProps={{
                                input: {
                                    startAdornment: <InputAdornment position="start">CHF</InputAdornment>,
                                },
                            }}
                        />
                    </ValidatedInput>
                    <ValidatedInput
                        isChecked={animal.birthday !== null && !errors.birthday}
                        error={errors.birthday}
                        helperText={"Birthday can't be older than 150 years or be in the future"}
                    >
                        <TextField
                            fullWidth
                            label="Birthday (optional)"
                            type="date"
                            value={animal.birthday !== null ? animal.birthday : dayjs()}
                            onChange={(e) => handleChange("birthday", e.target.value)}
                        />
                    </ValidatedInput>
                </DialogContent>
                <DialogActions>
                    <FormButtonStack
                        isButtonDisabled={isButtonDisabled}
                        onCancel={() => setShowForm(false)}
                        buttonText={existingAnimal ? "Change Animal" : "ADD ANIMAL"}
                    />
                </DialogActions>
            </form>
        </Container>
    );
}

export default Form;
