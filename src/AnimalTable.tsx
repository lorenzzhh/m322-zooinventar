import React from "react";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Animal} from "./types.ts";

type Props = {
    animals: Animal[];
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
};

const AnimalTable: React.FC<Props> = ({animals, onDelete, onEdit}) => {
    const columns: GridColDef[] = [
        {field: 'name', headerName: 'Name', width: 160  },
        {field: 'species', headerName: 'Tierart', width: 160},
        {field: 'price',flex: 1, headerName: 'Preis', width: 160},
        {
            field: 'birthdate',
            headerName: 'Geburtsdatum',
            sortable: false,
            width: 170,
            flex:1,
            renderCell: (params) => {
                return new Date(params.row.birthdate).toLocaleDateString('de-DE');
            },
        },
        {
            field: 'actions',
            headerName: 'Aktionen',
            width: 150,
            sortable: false,
            flex: 1,
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
            pageSizeOptions={[5, 10, 25]}
            initialState={{
                pagination:{
                    paginationModel:{pageSize: 10}
                }
            }}
            rows={rows}
            sx={{
                maxHeight: '30rem',
                minHeight: '30rem'
            }}
        />
    );
};

export default AnimalTable;
