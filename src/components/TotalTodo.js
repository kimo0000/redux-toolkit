import React from  'react';
import { useSelector } from 'react-redux';

const TotalTodo = () => {
    const length = useSelector(state => state.todo);

    return(
       <h4 className="mt-3">
           total todo: {length.courses.length}
       </h4>
    )
}

export default TotalTodo;