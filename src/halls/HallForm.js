import React, { Component } from "react";

class HallForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formHall: {
        name: "",
        utilizableSize: 0,
        size: 0
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = propertyName => event => {
    const { formHall } = this.state;
    const newContact = {
      ...formHall,
      [propertyName]: event.target.value
    };
    this.setState({ formHall: newContact });
  };

  handleSubmit(event) {
    console.log(this.state.formHall);
    this.insertHall(this.state.formHall);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.formHall.name}
            onChange={this.handleChange("name")}
          />
          Nr utilizabil de locuri:
          <input
            type="text"
            value={this.state.formHall.utilizableSize}
            onChange={this.handleChange("utilizableSize")}
          />
          Nr total de locuri:
          <input
            type="text"
            value={this.state.formHall.size}
            onChange={this.handleChange("size")}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }

  insertHall(data) {
    return fetch("http://localhost:8080/halls/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
export default HallForm;
