import React, { Component } from 'react'
import axios from 'axios'

class CreateUser extends Component {
    state = {
        username: ''
    }

    onChangeUsernameHandler = (event) => {
        this.setState({ username: event.target.value })
    }
    onSubmitHandler = event => {
        event.preventDefault()

        const user = {
            username: this.state.username
        }
        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        this.setState({ username: '' })

    }
    render() {
        return (
            <div>
                <h4>Create New User</h4>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsernameHandler}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}
export default CreateUser