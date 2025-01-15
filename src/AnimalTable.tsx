import React from "react";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Animal} from "./types.ts";
import {Button} from "@mui/material";

type Props = {
    animals: Animal[];
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
};

const AnimalTable: React.FC<Props> = ({animals, onDelete, onEdit}) => {
    const columns: GridColDef[] = [
        {field: 'name', flex: 1, headerName: 'Name', width: 160, minWidth: 100},
        {field: 'species', headerName: 'Tierart', width: 160, flex: 1, minWidth: 100},
        {
            field: 'price', headerName: 'Preis', flex: 1, width: 160, minWidth: 100,
            renderCell: params => "CHF " + params.row.price
        },
        {
            field: 'birthdate',
            headerName: 'Geburtsdatum',
            sortable: false,
            width: 180,
            minWidth: 110,
            flex: 1,
            renderCell: (params) => {
                return params.row.birthdate ? new Date(params.row.birthdate).toLocaleDateString('de-DE', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                }) : '-';
            },
        },
        {
            field: 'actions',
            headerName: 'Aktionen',
            width: 180,
            minWidth: 100,
            sortable: false,
            renderCell: (params) => (
                <>
                    <Button sx={{marginRight: 1}} size={"small"} variant={"contained"}
                            onClick={() => onEdit(params.row.id)}>Edit</Button>
                    <Button size={"small"} variant={"contained"} color={"secondary"}
                            onClick={() => onDelete(params.row.id)}>Delete</Button>
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
            pageSizeOptions={[5, 10, 25, {value: -1, label: 'All'}]}
            initialState={{
                pagination: {
                    paginationModel: {pageSize: 10}
                }
            }}
            rows={rows}
            sx={{
                maxHeight: '30rem',
                minHeight: '30rem',
            }}
        />
    );
};

export default AnimalTable;
