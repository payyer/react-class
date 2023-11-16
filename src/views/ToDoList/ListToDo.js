import React from "react";
import AddtoDo from "./AddToDo";
import Nav from "../Nav/Nav";

class ListToDo extends React.Component {
    constructor() {
        super();
        this.state = {
            ListToDo: [
                { id: 1, title: 'Phụ vợ nấu cơm' },
                { id: 2, title: 'Phụ vợ chăm bé' },
                { id: 3, title: 'Phụ vợ ăn hàng kaka' },
            ],
            editToDo: {}
        }
    }

    addToDo = (todo) => {
        console.log(todo)
        this.setState({
            ListToDo: [...this.state.ListToDo, todo]
        })
    }

    handleOnClickDelete = (todo) => {
        let currentTodo = this.state.ListToDo
        currentTodo = currentTodo.filter(item => item.id !== todo)
        this.setState({
            ListToDo: currentTodo
        })
    }

    handleOnClickToDo = (todo) => {
        let { editToDo, ListToDo } = this.state;
        let checkEmptyObj = Object.keys(editToDo).length === 0;

        if (!checkEmptyObj && editToDo.id === todo.id) {
            let ListToDoCopy = [...ListToDo]
            const objIndex = ListToDoCopy.findIndex((obj => obj.id === todo.id));
            ListToDoCopy[objIndex].title = editToDo.title
            this.setState({
                ListToDo: ListToDoCopy,
                editToDo: {}
            })
            return;
        }
        this.setState({
            editToDo: todo
        })
    }

    handleOnChangeEdit = (event) => {
        let editToDoCopy = { ...this.state.editToDo }
        editToDoCopy.title = event.target.value;
        this.setState({
            editToDo: editToDoCopy
        })

    }

    render() {
        let listToDo = this.state.ListToDo;
        let editToDo = this.state.editToDo
        let checkEmptyObj = Object.keys(editToDo).length === 0;

        return (
            <>
                <Nav />
                <div className="list-todo-container">
                    <AddtoDo addToDo={this.addToDo} />
                    <div className="list-todo-content">
                        {
                            listToDo.map(item => {
                                return (
                                    <div key={item.id}>
                                        {checkEmptyObj === true ?
                                            <span>{item.title}</span>
                                            :
                                            <>
                                                {item.id === editToDo.id ?
                                                    <input
                                                        value={editToDo.title}
                                                        onChange={(event) => this.handleOnChangeEdit(event)}
                                                    >
                                                    </input>
                                                    :
                                                    <span>{item.title}</span>
                                                }
                                            </>
                                        }

                                        <button onClick={() => this.handleOnClickToDo(item)}>
                                            {item.id === editToDo.id ? 'Save' : 'Edit'}
                                        </button>
                                        <button type="button" onClick={() => this.handleOnClickDelete(item.id)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ListToDo;