import React from 'react';

class JobAdd extends React.Component {
    render() {
        return(
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Add Job Post</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="title">Name</label>
                                <input type="text" className="form-control" id="title" ref={this.props.input_name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Email</label>
                                <input type="text" className="form-control" id="description" ref={this.props.input_email}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Company Name</label>
                                <input type="text" className="form-control" id="image" ref={this.props.input_company_name}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={this.props.add} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default JobAdd;