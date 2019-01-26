import React, { Component } from "react";

class CandidateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidateForm: {
        cnp: "",
        firstName: "",
        lastName: "",
        examLanguage: "",
        examField: "",
        examType: "",
        highSchool: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = propertyName => event => {
    const { candidateForm } = this.state;
    const newContact = {
      ...candidateForm,
      [propertyName]: event.target.value
    };
    this.setState({ candidateForm: newContact });
  };

  handleSubmit(event) {
    console.log(this.state.candidateForm);
    this.insertCandidate(this.state.candidateForm);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          CNP:
          <input
            type="text"
            value={this.state.candidateForm.cnp}
            onChange={this.handleChange("cnp")}
          />
          Nume:
          <input
            type="text"
            value={this.state.candidateForm.firstName}
            onChange={this.handleChange("firstName")}
          />
          Prenume:
          <input
            type="text"
            value={this.state.candidateForm.lastName}
            onChange={this.handleChange("lastName")}
          />
          Limba:
          <input
            type="text"
            value={this.state.candidateForm.examLanguage}
            onChange={this.handleChange("examLanguage")}
          />
          Materie:
          <input
            type="text"
            value={this.state.candidateForm.examField}
            onChange={this.handleChange("examField")}
          />
          Tip examen:
          <input
            type="text"
            value={this.state.candidateForm.examType}
            onChange={this.handleChange("examType")}
          />
          Liceu:
          <input
            type="text"
            value={this.state.candidateForm.highSchool}
            onChange={this.handleChange("highSchool")}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }

  insertCandidate(data) {
    return fetch("http://localhost:8080/candidates/", {
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
export default CandidateForm;
