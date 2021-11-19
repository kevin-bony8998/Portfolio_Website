import React, { useContext } from "react";
import DataTable, { TableColumn } from 'react-data-table-component';
import { Styled } from "./index.styles";
import { ThemeContext } from "../../../../App";

export const TaskListComponent = () => {
    interface DataRow {
        task: string;
        points: string;
    }    
    const data = React.useMemo(
        () => [
            {
                task: "Task1",
                points: "20",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task2",
                points: "10",
            },
            {
                task: "Task3",
                points: "10",
            },
        ],
        []
    );
    const contextValues = useContext(ThemeContext);
    const isDarkMode = contextValues[0];
    const itemsPerPage = 4;
    const paginationArray = [itemsPerPage];
    const columns:TableColumn<DataRow>[] = [
        {
            name: 'Task',
            selector: row => row.task,
            sortable: true,
        },
        {
            name: 'Points',
            selector: row => row.points,
            sortable: true,
        },
    ];
    const customStyles = {
        rows: {
            style: {
                alignItems: 'center', // override the row height
                justifyContent: 'center',
            },
        },
        cells: {
            style: {
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        headCells: {
            style: {
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid black',
            },
        },
    };
    return (
        <>
            <Styled>
                <div  className={`task-table ${isDarkMode? "dark-mode":"light-mode"}`}>
                    <div className="task-table-header">
                        Your Tasks Listed so far:
                    </div>
                    <DataTable 
                        columns={columns} 
                        data={data}
                        customStyles={customStyles}  
                        pagination
                        paginationRowsPerPageOptions={paginationArray}
                        paginationPerPage={itemsPerPage}/>
                </div>
            </Styled>
        </>
    );
}