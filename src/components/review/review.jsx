import React from 'react';
import './review.css'

const review = ({title, date, user}) => (
    <>
        <div className = "backgroundReview">
            <h3>
                {title}
            </h3>
            <p>{date}| {user} </p>
            <br/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod rutrum risus. Pellentesque non ullamcorper dui, 
                sed lacinia elit. Curabitur rhoncus augue nunc, eu convallis velit fermentum vel. Vivamus non velit varius, tristique 
            </p>
        </div>
    </>
)

export default review;