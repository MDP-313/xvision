import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import "./styles.css";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const Timeline = ({ activities }) => {


    const totalMinutes = 24 * 60;

    const parseTime = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    };

    const timelineSegments = [];
    let lastEnd = 0;

    activities?.forEach(({ start, end }) => {
        const startTime = parseTime(start);
        const endTime = parseTime(end);

        if (startTime > lastEnd) {
            timelineSegments.push({ start: lastEnd, end: startTime, active: false });
        }

        timelineSegments.push({ start: startTime, end: endTime, active: true, startLabel: start, endLabel: end });
        lastEnd = endTime;
    });

    if (lastEnd < totalMinutes) {
        timelineSegments.push({ start: lastEnd, end: totalMinutes, active: false });
    }

    return (
        <motion.div className='timeline-container' initial={{ y: 336 }} animate={{ y: 0 }} exit={{ y: 500 }} transition={{ duration: 0.3, ease: 'easeInOut' }} >
            <div className='time-line-date-picker'>
                <BiSolidLeftArrow color='#30297d' />
                <p>02/12/2025</p>
                <BiSolidRightArrow color='#30297d' />
            </div>
            <div className="timeline">
                {timelineSegments.map(({ start, end, active, startLabel, endLabel }, index) => (
                    <div
                        key={index}
                        className={`segment ${active ? "active" : "inactive"}`}
                        style={{ width: `${((end - start) / totalMinutes) * 100}%` }}
                    >
                        {active && (
                            <div className="popover">
                                <div>
                                    <p>Start: {startLabel}</p>
                                    <p>End: {endLabel}</p>
                                    <p>Distance 160 M</p>
                                </div>
                                <MdOutlineOndemandVideo size={25} color='green' />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

Timeline.propTypes = {
    activities: PropTypes.array
};

export default Timeline;
