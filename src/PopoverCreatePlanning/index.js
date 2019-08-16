import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import AccessTime from "@material-ui/icons/AccessTime";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Done from "@material-ui/icons/Done";
import "./style.css";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default function PopoverCreatePlanning() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const colors = [
    {
      name: "purple",
      cod: "#BC29D4"
    },
    {
      name: "gree",
      cod: "#1B9A77"
    },
    {
      name: "orange",
      cod: "#E57B1E"
    },
    {
      name: "blue",
      cod: "#29B1D4"
    },
    {
      name: "pink",
      cod: "#D42973"
    }
  ];

  const date = ["19 Jul 2019", "23 Jul 2019"];

  const hours = [
    "00:00",
    "00:30",
    "01:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30"
  ];

  const renderHours = hours.map((hour, i) => (
    <MenuItem value={i}>{hour}</MenuItem>
  ));

  const renderDate = date.map((date, i) => (
    <MenuItem value={i}>{date}</MenuItem>
  ));

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Create Planning
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        style={{ marginLeft: "10px" }}
      >
        <div style={{ padding: "40px 26px 0px 26px" }}>
          <Grid container spacing={3}>
            <Grid
              xs={12}
              sm={12}
              style={{ marginBottom: "10px", marginLeft: "6px" }}
            >
              <div className="colors-group">
                <div className="color-item">
                  <div
                    className="color-box"
                    style={{ backgroundColor: "green" }}
                  ></div>
                </div>
                <div className="color-item">
                  <div
                    className="color-box"
                    style={{ backgroundColor: "orange" }}
                  >
                    <Done style={{ color: "white" }} />
                  </div>
                </div>
                <div className="color-item">
                  <div
                    className="color-box"
                    style={{ backgroundColor: "blue" }}
                  ></div>
                </div>
                <div className="color-item">
                  <div
                    className="color-box"
                    style={{ backgroundColor: "purple" }}
                  ></div>
                </div>
                <div className="color-item">
                  <div
                    className="color-box"
                    style={{ backgroundColor: "red" }}
                  ></div>
                </div>
              </div>
            </Grid>

            {/* 
            Usuário 
          */}
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="user-simple">Usuário</InputLabel>
              <Select
                fullWidth
                inputProps={{
                  name: "user",
                  id: "user-simple"
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>

            {/* 
            Checklist 
          */}
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="check-simple">Checklist</InputLabel>
              <Select
                fullWidth
                inputProps={{
                  name: "check",
                  id: "check-simple"
                }}
              >
                <MenuItem value={10}>Manutenção</MenuItem>
                <MenuItem value={20}>Serviço</MenuItem>
                <MenuItem value={30}>Atualização</MenuItem>
              </Select>
            </Grid>

            {/* 
            Start  
            Start Date 
          */}
            <Grid item xs={12} sm={4}>
              <Grid container alignItems="flex-end">
                <Grid item xs={1} sm={2}>
                  <CalendarToday />
                </Grid>
                <Grid item xs={11} sm={10}>
                  <Select fullWidth>{renderDate}</Select>
                </Grid>
              </Grid>
            </Grid>

            {/* 
            Start Hour 
          */}
            <Grid item xs={12} sm={2}>
              <Grid container alignItems="flex-end">
                <Grid item xs={1} sm={3}>
                  <AccessTime />
                </Grid>
                <Grid item xs={11} sm={9}>
                  <Select fullWidth>{renderHours}</Select>
                </Grid>
              </Grid>
            </Grid>

            {/* 
            End
            End Date 
          */}
            <Grid item xs={12} sm={4}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={1} sm={2}>
                  <CalendarToday />
                </Grid>
                <Grid item xs={11} sm={10}>
                  <Select fullWidth>{renderDate}</Select>
                </Grid>
              </Grid>
            </Grid>
            {/* 
            End Hour 
          */}
            <Grid item xs={12} sm={2}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={1} sm={3}>
                  <AccessTime />
                </Grid>
                <Grid item xs={11} sm={9}>
                  <Select fullWidth>{renderHours}</Select>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "30px",
              marginBottom: "10px"
            }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
            >
              Salvar
            </Button>
            <Button>Cancelar</Button>
          </div>
        </div>
      </Popover>
    </div>
  );
}
