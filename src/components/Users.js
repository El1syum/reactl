import React from "react"
import User from "./User";

class Users extends React.Component {
    render() {
        if (this.props.users.length === 0) {
            return (
                <div className='user'>
                    <h3>No users</h3>
                </div>
            )
        }
        return (
            <div>
                {this.props.users.map((el) => (
                    <User el={el} onDelete={this.props.onDelete}/>
                ))}
            </div>
        )
    }
}

export default Users