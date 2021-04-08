import React, {useState} from 'react'
import { Navbar } from '../ui/Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment';
import 'moment/locale/es';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-message-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

const localizer = momentLocalizer(moment);
moment.locale('es');

export const CalendarScreen = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar)

    const [lastView, setLastView] = useState(localStorage.getItem('lastItem') || 'month')

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }
    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e));
    }
    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastItem', e);
    }

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#367cf7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block'
        }

        return {
            style
        };
    }

    const onSelectSlot = (e) => {
        dispatch(eventClearActiveEvent());
    }

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccesor="start"
                endAccesor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onSelectSlot={onSelectSlot}
                selectable={true}
                onView={onViewChange}
                components={{
                    event: CalendarEvent
                }}
                view={lastView}
            />

            <CalendarModal />

            {
                (activeEvent) && <DeleteEventFab />
            }
            
            <AddNewFab />
        </div>
    )
}
