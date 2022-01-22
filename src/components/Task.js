import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_TODO, EDIT_TODO } from '../redux/todoSlice';

const Task = ({index, desc, note, isdone}) => { 

    
    const [ isEdit, setIsEdit ] = useState(false);
    const [ value, setValue ] = useState('');
    
     
    const {isLoggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch();


    const renderState = () => {
      return (
        <li className="list-group-item">
              <div className="d-flex justify-content-between">
                 <div>
                    <input type='checkbox' isdone={isdone}  />
                    {desc}
                    <hr />
                    {note}
                 </div>
              <div>
                    <button className="btn btn-success m-2" 
                          onClick={() => toggelState()}
                          disabled={!isLoggedIn}
                          >edit course</button>
                    <button className="btn btn-danger"
                          disabled={!isLoggedIn}
                          onClick={() => dispatch(DELETE_TODO(index))}
                          >delete course</button>
              </div>
          </div>
        </li>
        )
    };


    const toggelState = () => {
        setIsEdit(!isEdit)
    };


    const HandleSubmitFomre = (e) => {
         e.preventDefault();
         dispatch(EDIT_TODO(value));
         toggelState();
    };


    const UpdateForm = () => {
        return (
            <form onSubmit={HandleSubmitFomre}>
               <li className="list-group">
                  <div className="d-flex justify-content-between mb-2">
                     <input className="form-control" 
                            type='text' 
                            defaultValue={desc} 
                            onChange={(e) => setValue(e.target.value)}
                            />
                     <button className="btn btn-success"
                     >update course </button>
                 </div>
               </li>
            </form>
        )
    };


    return (
        <Fragment>
              {isEdit ? UpdateForm() : renderState()}
        </Fragment>
    )
}

export default Task;