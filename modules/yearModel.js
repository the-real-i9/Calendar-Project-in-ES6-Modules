import event from './events.js';
import DOM from './DOMStrings.js';
import { selector as select } from './functionsUI.js';
import { navigateYear } from './yearView.js';
import { calendarInfo, monthServer as serveMonth } from './calendarYearModel.js';

const navigateYearFunc = (ev) => {
    if (ev.type === 'click') {
        if (ev.target.id === 'prev-year' && `${select(DOM.year).innerHTML}`.includes('19') && `${select(DOM.year).innerHTML}`.includes('70')) return;
        // eslint-disable-next-line no-unused-expressions
        (ev.target.id === 'next-year'
        ? navigateYear(calendarInfo({ nextOrPrev: 'next' }), serveMonth)
        : navigateYear(calendarInfo({ nextOrPrev: 'prev' }), serveMonth));
    } else if (ev.type === 'keyup') {
        if (select(DOM.yearCalendar).style.display === 'none') return;
        if (ev.keyCode === 37 && `${select(DOM.year).innerHTML}`.includes('19') && `${select(DOM.year).innerHTML}`.includes('70')) return;
        // eslint-disable-next-line no-unused-expressions
        (ev.keyCode === 39
        ? navigateYear(calendarInfo({ nextOrPrev: 'next' }), serveMonth)
        : (ev.keyCode === 37 && navigateYear(calendarInfo({ nextOrPrev: 'prev' }), serveMonth)));
    }
};

event(DOM.nextYearBtn, 'click', navigateYearFunc);
event(DOM.prevYearBtn, 'click', navigateYearFunc);
document.addEventListener('keyup', navigateYearFunc);
