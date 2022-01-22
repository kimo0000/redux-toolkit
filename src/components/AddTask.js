import React from 'react';
import { useRef, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, SEARCH_TODO } from '../redux/todoSlice';

const AddTask = () => {
    const [ warning, setWarning ] = useState(false);
    const [ value, setValue ] = useState('');

    const desc = useRef(null);
    const note = useRef(null);
    
    const {isLoggedIn} = useSelector(state => state.auth);
    const course = useSelector(state => state.todo.courses);
    const dispatch = useDispatch();


    const HandleSubmit = (e) => {
        e.preventDefault();
        if(desc.current.value || note.current.value !== ''){
            warning && setWarning(!warning)

            const data = {id: new Date().getTime(),
                          desc: desc.current.value,
                          note: note.current.value};
            dispatch(ADD_TODO(data));
            desc.current.value = null;
            note.current.value = null;

            } else {
            setWarning(!warning)
        }
    }
    const warningMsg = warning && <div className="alert alert-primary h6" role='alert'>veillez inserer un todo...</div>



    const HandleChange = () => {
        dispatch(SEARCH_TODO())
    };


    return (
        <div className="list-group">
            {warningMsg}

           <form className="form-group mb-3" onSubmit={HandleSubmit}>
              <input className="form-control mb-2" 
                     type='text' 
                     placeholder="Add Todo..." 
                     ref={desc}
              />
              <input className="form-control mb-2" 
                     type='text' 
                     placeholder="Add Note..." 
                     ref={note} />
              <button  className="btn btn-primary mb-4" disabled={!isLoggedIn}>submit</button>
           </form>
           <form onChange={HandleChange}>
              <input className="form-control mb-2" 
                     type='text' 
                     placeholder="search course..." 
                     onChange={(e) => setValue(e.target.value)}
                     value={value}
              />
           </form>
               
        </div>
        
    )
}

export default AddTask;