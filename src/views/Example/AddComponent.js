import React from "react";

class AddComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            salary: '',
        }
    }
    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            alert("Missing title or salary");
            return;
        }
        console.log(this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100) + 1,
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <>
                <h1>Hello add component</h1>
                <form action="/action_page.php">
                    <label htmlFor="fname">Title jobs:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitle(event)}
                    /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    /><br /><br />
                    <button type='button' onClick={(event) => this.handleSubmit(event)}>Submit</button>
                </form>
            </>
        )
    }
}

export default AddComponent;