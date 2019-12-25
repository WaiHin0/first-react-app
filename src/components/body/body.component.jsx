import React from 'react';

import {LeftSidebar, RightSidebar} from '../sidebar/sidebar.component';
import JobPost from '../job-post/jobpost.component';
import {MainSearch, CitySearch} from '../search/search.component';
import JobAdd from '../job-add/jobadd.component';

class Body extends React.Component {
	constructor() {
		super();
		this.state = {
			employes : [],
			searchField : ''
		}
		this.add = this.add.bind(this);
		this.input_name = React.createRef();
		this.input_email = React.createRef();
		this.input_company_name = React.createRef();
	}
	add() {
		var new_employes = this.state.employes;
		var new_name = this.input_name.current.value;
		var new_email = this.input_email.current.value;
		var new_company_name = this.input_company_name.current.value;
		new_employes.push({name: new_name, email: new_email, company: 
			{
				name : new_company_name
			}
		});
		this.setState ({
			employes : new_employes
		})
		this.input_name.current.value = "";
		this.input_email.current.value = "";
		this.input_company_name.current.value = "";
	}
	componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState({employes : users}))
    }
    render() {
		const {employes, searchField} = this.state;
        const filteredemployes = employes.filter(employe => 
            employe.name.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <div className="wrapper container">
                <div className="row">
					<MainSearch
						handleChange={e => {
							this.setState({ searchField: e.target.value})
					}} />
                    <LeftSidebar />
                    <div className="col-lg-6">
						<div className="main-ws-sec">
							<div className="posts-section">
								<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
									Launch demo modal
								</button>
								<JobAdd 
									add={this.add}
									input_name={this.input_name}
									input_email={this.input_email}
									input_company_name={this.input_company_name}/>
								{filteredemployes.map((employe, i) =>
									<JobPost key={i} name={employe.name} email={employe.email} company_name={employe.company.name}/>
								)}
								<div className="process-comm">
									<div className="spinner">
										<div className="bounce1"></div>
										<div className="bounce2"></div>
										<div className="bounce3"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
                    <RightSidebar />
					{/* <CitySearch
						handleChange1={e => {
							this.setState({ searchField: e.target.value})
					}} /> */}
                </div>
            </div>
        )
    }
}

export default Body;