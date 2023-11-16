import React from "react";

class AddtoDo extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }
    handleOnChangeToDo = (event) => {
        this.setState({
            todo: event.target.value
        })
    }
    handleOnClickToDo = (todo) => {
        if (!todo) {
            return alert('Chưa nhập gì hết')
        }
        todo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: this.state.todo
        }
        this.props.addToDo(todo)
    }
    render() {
        return (
            <>
                <div className="add-todo">
                    <input
                        type="text"
                        placeholder="Add your to do"
                        value={this.state.todo}
                        onChange={(event) => this.handleOnChangeToDo(event)}
                    >
                    </input>
                    <button
                        type="button"
                        onClick={() => this.handleOnClickToDo(this.state.todo)}
                    >Add
                    </button>
                </div>
            </>
        )
    }
}

export default AddtoDo;