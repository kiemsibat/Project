import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const styles = {
  button: {
    margin: 0,
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      item: "",
      items: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitItem = this.submitItem.bind(this);
  }
  // chuc nang cua ham submitItem la setState cho item khi render ra se dc gia tri id , value va khi submit thi items.push(item) 
  submitItem(e) {
    e.preventDefault();
   
    const item = {
      id: 1 + Math.random(),
      value: this.state.item,
    };

    let items = [...this.state.items];
    //push item moi len tu mang items
    items.push(item);
    //render State moi 
    this.setState({
      items: items,
    });
    console.log(item);
  }
  // ham phat hien su thay doi cua gia tri o input va set gia tri thay doi la gia tri item
  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  }

  deleteItem(id) {
    let items = [...this.state.items];
    let updatedList = items.filter((item) => item.id !== id);
    this.setState({ items: updatedList });
  }
  totalDelete(){
    let items = [...this.state.items];
    let updatedList = items.filter((item) => !item );
    this.setState({ items: updatedList });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <>
          <CssBaseline />
          <Container maxWidth="sm">
            <h1 style={{ color: "blue" }}>TODOLIST</h1>
            <Paper component="form" className={classes.root}>
              {/* khi change input thi ham input se theo doi qua ham  handleInputChange()*/}
              <InputBase
                type="text"
                name="item"
                className={classes.input}
                placeholder="Search Google Maps"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={this.handleInputChange}
              />
              <IconButton type="submit" onClick={this.submitItem}>
                <AddIcon />
              </IconButton>
              <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => this.totalDelete()}
                    size="small"
                  >
                  </Button>
            </Paper>
            {this.state.items.map((item, id) => {
              return (
                <p key={id}>
                  <mat-list-item style={{ marginLeft: 17 }}>
                    {item.value} {/*render ra item gia tri = value*/}
                  </mat-list-item>
                  {/* khi click vao button se khoi dong ham deleteItem xoa cac item duoc phan biet bang id*/}
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => this.deleteItem(item.id)}
                    size="small"
                  >
                    DELETE
                  </Button>
                </p>
              );
            })}
          </Container>
        </>
      </div>
    );
  }
}

export default withStyles(styles)(App);
