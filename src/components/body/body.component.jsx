import React from 'react';
import {CardList} from '../card-list/card-list.component';
import {LeftSidebar, RightSidebar} from '../sidebar/sidebar.component';


class Body extends React.Component {
    constructor() {
        super();
        this.state = {
          students : []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({students : users}))
    }
    render() {
        return(
            <main className="wrapper container-fluid">
                <div className="row">
                    <LeftSidebar />
                    <div className="col-md-8">
                        <CardList students={this.state.students} />
                    </div>
                    <RightSidebar />
                </div>
            </main>
        )
    }
}

export default Body;
