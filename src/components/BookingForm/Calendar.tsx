import React, { useState } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendar: React.FC<{ onDateChange: (date: Date) => void }> = ({ onDateChange }) => {
    const [date, setDate] = useState<Date | null>(new Date());

    const handleDateChange = (newDate: Date) => {
        setDate(newDate);
        onDateChange(newDate);
    };

    return (
        <div>
            <ReactCalendar
                onChange={handleDateChange}
                value={date}
                minDate={new Date()}
            />
        </div>
    );
};

export default Calendar;