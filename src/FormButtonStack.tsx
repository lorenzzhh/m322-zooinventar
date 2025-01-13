import {Button, DialogActions} from '@mui/material';


type FormButtonStackProps = {
    isButtonDisabled: boolean;
    onCancel: () => void;
    buttonText: string;
}


const FormButtonStack = ({isButtonDisabled, onCancel, buttonText}: FormButtonStackProps) => {
    return (
        <DialogActions>
            <Button onClick={onCancel} color="secondary">
                CANCEL
            </Button>
            <Button disabled={isButtonDisabled} type="submit">
                {buttonText}
            </Button>
        </DialogActions>
    );
}

export default FormButtonStack;
