import React from 'react';
import ContactsData from '../contacts.json'

class ContactsList extends React.Component {
    state = {
        contacts: ContactsData.slice(0, 5)
    }

    addRandomContact = () => {
        const newArr = ContactsData.slice(5)
        const randomIndex = Math.floor(Math.random() * newArr.length);
        const randomContact = newArr[randomIndex];
        const contactsCopy = this.state.contacts.concat(randomContact)

        this.setState({
            contacts: contactsCopy
        })
    }

    
    sortByPopularityUp = () => {
        var sorted = this.state.contacts.sort(function (a, b) {
            return a.popularity - b.popularity;
        }),
        contactsCopy = sorted

        this.setState({
            contacts: contactsCopy
        })
    }

    sortByPopularityDown = () => {
        var sorted = this.state.contacts.sort(function (a, b) {
            return b.popularity - a.popularity;
        }),
        contactsCopy = sorted

        this.setState({
            contacts: contactsCopy
        })
    }

    sortByName = () => {
        var sorted = this.state.contacts.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        }),
        contactsCopy = sorted
        this.setState({
            contacts: contactsCopy
        })
    }

    render() {
        return (
            <div>
                <h1>Iron Contacts</h1>
                <button onClick={this.addRandomContact}>Add Random Contact</button>
                <button onClick={this.sortByPopularityUp}>Sort by Ascending Popularity</button>
                <button onClick={this.sortByPopularityDown}>Sort by Descending Popularity</button>
                <button onClick={this.sortByName}>Sort by Name</button>
                {this.state.contacts.map((item) => {
                    return <table>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                        <tr>
                            <td><img style={{ "width": "60px" }} src={item.pictureUrl} /></td>
                            <td>{item.name}</td>
                            <td>{item.popularity}</td>
                        </tr>
                    </table>
                })}
            </div>
        )
    }
}

export default ContactsList;