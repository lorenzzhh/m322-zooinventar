import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";


type CheckBoxValidProps = {
    isChecked: boolean;
};

const CheckBoxValid = ({isChecked}: CheckBoxValidProps) => {
    return (<>{
            isChecked ? <CheckBoxIcon sx={{marginLeft: '1rem'}} color={"success"}/> : <CheckBoxOutlineBlankIcon sx={{marginLeft: '1rem'}}/>
        }</>
    );
};

export default CheckBoxValid;
