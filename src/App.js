import react, {useState} from 'react'
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@mui/material";
import Data from './Components/Data';
import * as XLSX from 'xlsx'


function App() {
  // on change states
  const [excelFile, setExcelFile]=useState(null);
  console.log('ssss', excelFile)
  const [excelFileError, setExcelFileError]=useState(null);  
 
  // submit
  const [excelData, setExcelData]=useState(null);
  // it will contain array of objects

  // handle File
  const fileType=['application/vnd.ms-excel'];
  const handleFile = (e)=>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
      // console.log(selectedFile.type);
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFileError(null);
          setExcelFile(e.target.result);
        } 
      }
      else{
        setExcelFileError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else{
      console.log('plz select your file');
    }
  }

  // submit function
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    }
    else{
      setExcelData(null);
    }
  }
  return (
    <>
      <Box>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "gray",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            component={"form"}
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "gray",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
              py: 5,
              px: 5,
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Typography
              component="div"
              sx={{
                textAlign: "center",
                width: "100%",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "33px",
              }}
            >
              Upload Excel file
            </Typography>
            <TextField
              type="file"
               onChange={handleFile}
              required
            />
            {excelFileError&&<div className='text-danger'
          style={{marginTop:5+'px'}}>{excelFileError}</div>}
            <Button
              sx={{
                width: "300px",
                height: "30px",
                color: "white",
                backgroundColor: "green",
                border: "none",
              }}
              type="submit"
              style={{ marginTop: 5 + "px" }}
            >
              Submit
            </Button>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              backgroundColor: "black",
              display: "flex",
              flexDirection: "column",
              color: "white",
            }}
          >
            {excelData === null && <>No file selected</>}
          {excelData !== null && (
            <Grid>
              <TableContainer>
                <Table>
                  <TableHead sx={{ color: "white", fontWeight: 150 }}>
                    {/* <TableRow>
                      <TableCell sx={{ color: "white" }} align="center">
                        Id
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        firstName
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        lastName
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        Address
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        phone
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        email
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        Gender
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="center">
                        Role
                      </TableCell>
                    </TableRow> */}
                  </TableHead>
                </Table>
                <TableBody>
                  <Data excelData={excelData} />
                </TableBody>
              </TableContainer>
            </Grid>
             )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
