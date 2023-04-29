import React from "react"

class User extends React.Component {
    user = this.props.el
    render() {
        return (
            <div className='user' key={this.user.id}>
                <h3>{this.user.firstname} {this.user.surname}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? "Happy!" : "Not happy :("}</b>
            </div>
        )
    }
}

export default User