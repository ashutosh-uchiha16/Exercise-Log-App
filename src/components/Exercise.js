import React from 'react'
import { Link } from 'react-router-dom'

const exercise = (props) => (
    <tr>
        <td>{props.username}</td>
        <td>{props.description}</td>
        <td>{props.duration}</td>
        <td>{props.date.substring(0, 10)}</td>
        <td>
            <Link to={'/edit/' + props.id}>Edit</Link> <a href='/' onClick={props.action}>| Delete</a>
        </td>
    </tr>
)
export default exercise