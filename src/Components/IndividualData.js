import { Box, Button, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

export default function IndividualData({ individualExcelData }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "black",
          // display: "flex",
          flexDirection: "row",
          color: 'white'
        }}
      >
        <TableRow
          sx={{
            width: '100%',
          }}
        >
          <TableCell sx={{ color: 'white' }}>{individualExcelData.Id}</TableCell>
          <TableCell sx={{ color: 'white' }}>{individualExcelData.FirstName}</TableCell>
          <TableCell sx={{ color: 'white' }}>{individualExcelData.LastName}</TableCell>
          <TableCell sx={{ color: 'white' }}>{individualExcelData.Address}</TableCell>
          <TableCell sx={{ color: 'white' }}>{individualExcelData.phone}</TableCell>
          <TableCell sx={{ color: 'white' }}>{individualExcelData.email}</TableCell>
          <TableCell sx={{ color: 'white' }}>{individualExcelData.Gender}</TableCell>
          <TableCell sx={{ color: 'white' }}>{individualExcelData.Role}</TableCell>
          <TableCell sx={{ color: 'white' }}><Button variant="contained">add</Button></TableCell>
        </TableRow>
      </Box>
    </>
  );
}
