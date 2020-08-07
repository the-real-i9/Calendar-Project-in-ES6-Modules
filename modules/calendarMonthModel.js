import calendarInfoFunc from './calendarInfoModel.js';
import monthServerFunc from './monthServerModel.js';

const d = new Date();

const calendarInfo = ({ nextOrPrevMonth }) => (nextOrPrevMonth === 'next'
        ? calendarInfoFunc({ nextOrPrevMonth: 1, d }) : nextOrPrevMonth === 'prev'
        ? calendarInfoFunc({ nextOrPrevMonth: -1, d }) : calendarInfoFunc({ d }));

const monthServer = ({ monthNum }) => monthServerFunc({ d, monthNum });

export { calendarInfo, monthServer };
