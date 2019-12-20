import React from 'react';

export const Card = (props) => (
    <div className="col-md-3 mb-3">
        <div className="card h-100">
            <img src={`https://robohash.org/${props.student.id}?set=set2`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.student.name}</h5>
                <p className="card-text">{props.student.email}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    </div>
)