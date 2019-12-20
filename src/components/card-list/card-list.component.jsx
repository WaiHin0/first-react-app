import React from 'react';
import { Card } from '../card/card.component';

export const CardList = (props) => (
    <div className="row">
        {props.students.map((student) =>
            <Card key={student.id} student={student} image={student.image}/>
        )}
    </div>
)