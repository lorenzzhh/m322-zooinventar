import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";


type CheckBoxValidProps = {
    isChecked: boolean;
};

const CheckBoxValid = ({isChecked}: CheckBoxValidProps) => {
    return (<>{
            isChecked ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>
        }</>
    );
};

export default CheckBoxValid;
