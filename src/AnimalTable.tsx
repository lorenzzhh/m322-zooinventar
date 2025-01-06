import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    TableSortLabel,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {Animal} from "./types.ts";

type Props = {
    animals: Animal[];
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
    onSort: (column: keyof Animal) => void;
    sortOrder: "asc" | "desc";
    sortColumn: keyof Animal;
};

const AnimalTable: React.FC<Props> = ({
                                          animals,
                                          onDelete,
                                          onEdit,
                                          onSort,
                                          sortOrder,
                                          sortColumn,
                                      }) => {
    return (
        <TableContainer component={Paper} sx={{maxWidth: 800, margin: "auto"}}>
            <Table aria-label="Animal Inventory">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <TableSortLabel
                                active={sortColumn === "name"}
                                direction={sortOrder}
                                onClick={() => onSort("name")}
                            >
                                Name
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortColumn === "species"}
                                direction={sortOrder}
                                onClick={() => onSort("species")}
                            >
                                Art
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortColumn === "birthday"}
                                direction={sortOrder}
                                onClick={() => onSort("birthday")}
                            >
                                Geburtstag
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortColumn === "price"}
                                direction={sortOrder}
                                onClick={() => onSort("price")}
                            >
                                Preis
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>Aktionen</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {animals.map((animal) => (
                        <TableRow key={animal.id}>
                            <TableCell>{animal.name}</TableCell>
                            <TableCell>{animal.species}</TableCell>
                            <TableCell>
                                {animal.birthday
                                    ? new Date(animal.birthday).toLocaleDateString("de-DE")
                                    : "–"}
                            </TableCell>
                            <TableCell>{animal.price} CHF</TableCell>
                            <TableCell>
                                <IconButton
                                    aria-label="edit animal"
                                    onClick={() => onEdit(animal.id)}
                                >
                                    <EditIcon/>
                                </IconButton>
                                <IconButton
                                    aria-label="delete animal"
                                    onClick={() => onDelete(animal.id)}
                                >
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AnimalTable;
