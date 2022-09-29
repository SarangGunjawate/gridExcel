import { TableRow } from '@mui/material'
import React from 'react'
import IndividualData from './IndividualData'

export default function Data({excelData}) {
    return excelData.map((individualExcelData)=>(
        <TableRow key={individualExcelData.Id}>
            <IndividualData individualExcelData={individualExcelData}/>
        </TableRow>        
    ))
}
