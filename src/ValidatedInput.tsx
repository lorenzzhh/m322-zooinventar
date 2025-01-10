import {FormControl, FormHelperText} from '@mui/material';
import CheckBoxValid from "./CheckboxValid.tsx";
import {ReactNode} from "react";

type ValidatedInputProps = {
    error?: boolean;
    helperText: string;
    children: ReactNode;
}

const ValidatedInput = ({error, helperText, children}: ValidatedInputProps) => {
    return (
        <FormControl
            fullWidth
            error={error}
            required
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '1rem'
            }}
        >
            {children}
            <CheckBoxValid isChecked={!error}/>
            <FormHelperText sx={{position: 'absolute', bottom: '-0.7rem'}}>
                {helperText}
            </FormHelperText>
        </FormControl>
    );
};

export default ValidatedInput;
