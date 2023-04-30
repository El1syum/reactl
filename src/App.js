import React from "react"
import Header from "./components/Header"
import Users from "./components/Users";
import AddUser from "./components/AddUser";

class App extends React.Component {
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
                {
                    id: 3,
                    firstname: 'Stiven',
                    surname: 'King',
                    bio: 'Stiven',
                    age: 56,
                    isHappy: true,
                }
            ]
        }
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }

    render() {
        return (
            <div>
                <Header title='Users list' />
                <main>
                    <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
                </main>
                <aside>
                    <AddUser onAdd={this.addUser}/>
                </aside>
            </div>
        )
    }

    deleteUser(id) {
        // console.log(id)
        // console.log(this.state.users.filter((el) => el.id === id))
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        })
    }

    editUser(user) {
        let allUsers = this.state.users
        allUsers[user.id - 1] = user
        this.setState({users: []}, () => {
            this.setState({users: [...allUsers]})
        })
    }

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({users: [...this.state.users, {id, ...user}]})
    }
}

export default App