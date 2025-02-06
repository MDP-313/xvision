import { useState } from 'react';

import "./styles.css"; // Import the CSS file

const Timeline = ({ activities }) => {


    const totalMinutes = 24 * 60; // Total minutes in a day

    const parseTime = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    };

    const timelineSegments = [];
    let lastEnd = 0;

    activities.forEach(({ start, end }) => {
        const startTime = parseTime(start);
        const endTime = parseTime(end);

        if (startTime > lastEnd) {
            timelineSegments.push({ start: lastEnd, end: startTime, active: false });
        }

        timelineSegments.push({ start: startTime, end: endTime, active: true, startLabel: "02:35 AM", endLabel: "04:30 AM" });
        lastEnd = endTime;
    });

    if (lastEnd < totalMinutes) {
        timelineSegments.push({ start: lastEnd, end: totalMinutes, active: false });
    }

    return (
        <div className="timeline">
            {timelineSegments.map(({ start, end, active, startLabel, endLabel }, index) => (
                <div
                    key={index}
                    className={`segment ${active ? "active" : "inactive"}`}
                    style={{ width: `${((end - start) / totalMinutes) * 100}%` }}
                >
                    {active && (
                        <div className="popover">
                            {startLabel} - {endLabel}
                            <button onClick={() => console.log('click')}>Close</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Timeline;
