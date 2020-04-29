import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


class EditExercise extends Component {
    state = {
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []
    }


    componentDidMount() {

        axios.get(`http://localhost:5000/exercises/${this.props.match.params.id}`)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    description: response.data.description,
                    duration: response.data.duration,
                    date: new Date(response.data.date)
                })
            })
            .catch(error => {
                console.log(error);
            })

        axios.get('http://localhost:5000/users/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username),
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }



    onChangeUsernameHandler = (event) => {
        this.setState({ username: event.target.value })
    }
    onChangeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value })
    }
    onChangeDurationHandler = (event) => {
        this.setState({ duration: event.target.value })
    }
    onChangedateHandler = (date) => {
        this.setState({ date: date })
    }
    onSubmitHandler = (event) => {
        event.preventDefault()

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(exercise);
        axios.post(`http://localhost:5000/exercises/update/${this.props.match.params.id}`, exercise)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        window.location = '/'

    }
    render() {
        return (
            <div>
                <h4>Edit Exercise</h4>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsernameHandler}>
                            {this.state.users.map(user => {
                                return <option key={user} value={user}>{user}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescriptionHandler} />
                    </div>
                    <div className="form-group">
                        <label>Duration(min): </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDurationHandler} />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangedateHandler} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Edit Exercise' className="btn btn-danger" />
                    </div>
                </form>
            </div>
        )
    }

}
export default EditExercise