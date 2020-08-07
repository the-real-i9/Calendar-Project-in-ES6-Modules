import calendarInfoFunc from './calendarInfoModel.js';
import monthServerFunc from './monthServerModel.js';

const d = new Date();

const calendarInfo = ({ nextOrPrev }) => (nextOrPrev === 'next'
        ? calendarInfoFunc({ nextOrPrev: 1, d }) : nextOrPrev === 'prev'
        ? calendarInfoFunc({ nextOrPrev: -1, d }) : calendarInfoFunc({ d }));

const monthServer = ({ monthNum }) => monthServerFunc({ d, monthNum });

export { calendarInfo, monthServer };
