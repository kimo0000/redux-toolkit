import React from 'react';
import { useSelector } from 'react-redux'
import Task from './Task'


const ListeTask = () => {
    const course = useSelector((state) => state.todo.courses);
    
    const length = course.length;
    const courseListe = length ? 
                                course.map((cour, index) => <Task  key={cour.id}
                                                                   index={index}
                                                                   desc={cour.desc} 
                                                                   note={cour.note} 
                                                                   isdone={cour.isdone}
                                                                  />)
                               : 
                                <div className="alert alert-danger" role='alert' >veuillez inserez un cour</div>

    return (
        <ul className="liste-group">
           {courseListe}
        </ul>
    )
}

export default ListeTask;