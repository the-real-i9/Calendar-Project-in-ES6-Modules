import event from './events.js';
import DOM from './DOMStrings.js';
import { navigateMonth } from './monthView.js';
import { calendarInfo, monthServer as serveMonth } from './calendarMonthModel.js';
import { selector as select } from './functionsUI.js';

const navigateMonthFn = (ev) => {
    if (ev.type === 'click') {
        if (ev.target.id === 'prev-month' && `${select(DOM.monthYear).innerHTML}`.includes('January') && `${select(DOM.monthYear).innerHTML}`.includes('19') && `${select(DOM.monthYear).innerHTML}`.includes('70')) return;
        // eslint-disable-next-line no-unused-expressions
        (ev.target.id === 'next-month'
        ? navigateMonth(calendarInfo({ nextOrPrevMonth: 'next' }), serveMonth)
        : navigateMonth(calendarInfo({ nextOrPrevMonth: 'prev' }), serveMonth));
    } else if (ev.type === 'keydown') {
        if (select(DOM.monthCalendar).style.display === 'none') return;
        if (ev.keyCode === 37 && `${select(DOM.monthYear).innerHTML}`.includes('January') && `${select(DOM.monthYear).innerHTML}`.includes('19') && `${select(DOM.monthYear).innerHTML}`.includes('70')) return;
        // eslint-disable-next-line no-unused-expressions
        (ev.keyCode === 39
        ? navigateMonth(calendarInfo({ nextOrPrevMonth: 'next' }), serveMonth)
        : (ev.keyCode === 37 && navigateMonth(calendarInfo({ nextOrPrevMonth: 'prev' }), serveMonth)));
    }
};

event(DOM.nextMonthBtn, 'click', navigateMonthFn);
event(DOM.prevMonthBtn, 'click', navigateMonthFn);
document.addEventListener('keydown', navigateMonthFn);
