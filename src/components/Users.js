import React from "react"
import User from "./User";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Bob',
                    surname: 'Marley',
                    bio: 'Bob\'s bio',
                    age: 40,
                    isHappy: true,
                },
                {
                    id: 2,
                    firstname: 'John',
                    surname: 'Doe',
                    bio: 'John\'s bio',
                    age: 22,
                    isHappy: false,
                },
            ]
        }
    }
    render() {
        if (this.state.users.length === 0) {
            return (
                <div className='user'>
                    <h3>No users</h3>
                </div>
            )
        }
        return (
            <div>
                {this.state.users.map((el) => (
                    <User el={el}/>
                ))}
            </div>
        )
    }
}

export default Users