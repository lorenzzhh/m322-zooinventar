import React from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Animal } from "./types.ts";

type Props = {
    animals: Animal[];
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
};

const AnimalTable: React.FC<Props> = ({ animals, onDelete, onEdit }) => {
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'species', headerName: 'Tierart', width: 150 },
        { field: 'price', headerName: 'Preis', width: 150 },
        { field: 'birthdate', headerName: 'Geburtsdatum', width: 150 },
        {
            field: 'actions',
            headerName: 'Aktionen',
            width: 150,
            renderCell: (params) => (
                <>
                    <button onClick={() => onEdit(params.row.id)}>Edit</button>
                    <button onClick={() => onDelete(params.row.id)}>Delete</button>
                </>
            ),
        },
    ];

    const rows = animals.map((animal) => ({
        id: animal.id,
        name: animal.name,
        species: animal.species,
        price: animal.price,
        birthdate: animal.birthday,
    }));

    return (
        <DataGrid
            columns={columns}
            rows={rows}
        />
    );
};

export default AnimalTable;
