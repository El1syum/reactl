import React from "react"

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            surname: '',
            bio: '',
            age: 1,
            isHappy: false
        }
    }
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Firstname" type="text" onChange={(e) => this.setState({firstname: e.target.value})}/>
                <input placeholder="Surname" type="text" onChange={(e) => this.setState({surname: e.target.value})}/>
                <textarea placeholder="Bio" onChange={(e) => this.setState({bio: e.target.value})}></textarea>
                <input placeholder="Age" type="text" onChange={(e) => this.setState({age: e.target.value})}/>
                <label htmlFor="isHappy">Are you happy?</label>
                <input id="isHappy" type="checkbox" onChange={(e) => this.setState({isHappy: e.target.checked})}/>
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.props.onAdd(
                    {
                        firstname: this.state.firstname,
                        surname: this.state.surname,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy
                    }
                )}
                }>Add user</button>
            </form>
        )
    }
}

export default AddUser