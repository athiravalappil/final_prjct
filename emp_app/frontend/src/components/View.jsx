import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button } from '@mui/material';

const View = () => {
    var [emp, setEmp] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3004/view")
            .then((res) => {
                console.log(res);
                setEmp(res.data);
            })
            .catch((err) => console.log(err));

    }, [])



    const delValue = (id) => {
        axios.delete("http://localhost:3004/remove/" + id)
            .then((res) => {
                alert(res.data.message);
            })
    }


    return (
        <div>
            <h1>VIEW</h1>
            <TableContainer>
                <Table  >

                    <TableHead>
                        <TableRow>
                            <TableCell >Name&nbsp;</TableCell>
                            <TableCell >Age&nbsp;</TableCell>
                            <TableCell >Department&nbsp;</TableCell>
                            <TableCell >Salary&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {emp.map((val) => {
                            return (
                                <TableRow>
                                    <TableCell >{val.Name}</TableCell>
                                    <TableCell >{val.Age}</TableCell>
                                    <TableCell >{val.Dept}</TableCell>
                                    <TableCell >{val.Sal}</TableCell>
                                    <TableCell>
                                        <Button size="small" variant='contained' >update</Button>&nbsp;
                                        <Button size="small" variant='contained' onClick={() => {
                                            delValue(val._id)
                                        }}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>

                </Table>
            </TableContainer>

        </div>
    )
}

export default View