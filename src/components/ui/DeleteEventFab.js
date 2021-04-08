import React from 'react'
import { useDispatch } from 'react-redux'
import { eventDeletedActiveEvent } from '../../actions/events'

export const DeleteEventFab = () => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(eventDeletedActiveEvent());
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={handleDelete}
        >
            <i className="fas fa-trash"></i>
            <span> Borrar Evento</span>
        </button>
    )
}
