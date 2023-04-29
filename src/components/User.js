import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

class User extends React.Component {
    user = this.props.el
    render() {
        return (
            <div className='user' key={this.user.id}>
                <IoCloseCircleSharp className="delete-icon" onClick={() => this.props.onDelete(this.user.id)} />
                <IoHammerSharp className="edit-icon" />
                <h3>{this.user.firstname} {this.user.surname}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? "Happy!" : "Not happy :("}</b>
            </div>
        )
    }
}

export default User