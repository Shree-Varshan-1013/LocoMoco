import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, IconButton, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TrainService from "../TrainService";
import FadeLoader from "react-spinners/FadeLoader";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


const Passengers = () => {
  // const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await TrainService.getPassengers();
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const eventEdit = (event, serialNo) => {
    event.preventDefault();
    navigate(`/passengers/edit/${serialNo}`);
  };

  const eventDelete = (event, serialNo) => {
    event.preventDefault();
    console.log(serialNo);
    TrainService.deletePassenger(serialNo).then((res) => {
      if (data) {
        setData((prevElement) => {
          return prevElement.filter(
            (passenger) => passenger.serialNo != serialNo
          );
        });
      }
    });
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'The record has been successfully deleted',
      showConfirmButton: false,
      timer: 1500
    })
  };

  const eventShow = (event) => {
    Swal.fire(event.target.name);
  };

  const handleOpen = (serialNo) => {
    console.log(serialNo)
    navigate(`/passengers/view/${serialNo}`);
  }

  return (
    <div>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            p: 30,
          }}
        >
          <FadeLoader
            color="#102b3f"
            cssOverride={{}}
            height={20}
            loading
            margin={5}
            radius={10}
            speedMultiplier={1}
            width={4}
          />
          <h1>Hang on...!</h1>
        </Box>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Serial Number</StyledTableCell>
                  <StyledTableCell align="center">UserName</StyledTableCell>
                  <StyledTableCell align="center">Password</StyledTableCell>
                  <StyledTableCell align="center">First Name</StyledTableCell>
                  <StyledTableCell align="center">Last Name</StyledTableCell>
                  <StyledTableCell align="center">Email</StyledTableCell>
                  <StyledTableCell align="center">Phone Number</StyledTableCell>
                  <StyledTableCell align="center">Address</StyledTableCell>
                  <StyledTableCell align="center">Country</StyledTableCell>
                  <StyledTableCell align="center">Pincode</StyledTableCell>
                  <StyledTableCell align="center">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((ele) => (
                  <StyledTableRow key={ele.serialNo}>
                    <StyledTableCell component="th" scope="row">
                      {ele.serialNo}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {ele.username}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {ele.password}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {ele.firstName}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {ele.lastName}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {ele.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {ele.phoneNumber}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {ele.address}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {ele.country}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {ele.pincode}
                    </StyledTableCell>
                    <IconButton
                      name={ele.serialNo}
                      onClick={(e, id) => eventEdit(e, ele.serialNo)}
                      size="small"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      name={ele.serialNo}
                      onClick={(e, id) => eventDelete(e, ele.serialNo)}
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      name={ele.serialNo}
                      onClick={(event, id) => handleOpen(ele.serialNo)}
                      size="small"
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default Passengers;
