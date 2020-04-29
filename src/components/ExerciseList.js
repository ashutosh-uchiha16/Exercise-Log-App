import React, { Component } from 'react'
import axios from 'axios'
import Exercise from './Exercise'

class ExerciseList extends Component {



    state = {
        exercises: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(res => {
                this.setState({ exercises: res.data })
                // console.log(this.state.exercises);

            })
            .catch(err => console.log(err))
    }

    deleteExerciseHandler = (id) => {
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then(res => console.log('Exercise deleted'))
            .catch(err => console.log(err))

        const exercisesList = [...this.state.exercises]
        const UpdatedList = exercisesList.filter(el => el.id !== id)
        this.setState({
            exercises: UpdatedList
        })
    }

    ListExercisehandler = () => {
        const ListOfExercises = this.state.exercises.map(exercise => {
            return <Exercise
                key={exercise._id}
                id={exercise._id}
                username={exercise.username}
                description={exercise.description}
                duration={exercise.duration}
                date={exercise.date}
                action={() => this.deleteExerciseHandler(exercise._id)} />

        })

        return ListOfExercises

    }
    render() {

        return (
            <div>
                <h4>List Of Exercises</h4>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.ListExercisehandler()}
                    </tbody>
                </table>
            </div>
        )
    }

}
export default ExerciseList