import event from './events.js';
import DOM from './DOMStrings.js';
import { switchCal } from './switchView.js';

const switchCalFunc = (ev) => {
    switchCal(ev.target.id === 'month-switch' ? {
        on: {
            switchBtnOn: DOM.monthSwitch,
            calendarOn: DOM.monthCalendar,
        },
        off: {
            switchBtnOff: DOM.yearSwitch,
            calendarOff: DOM.yearCalendar,
        },
    } : {
        on: {
            switchBtnOn: DOM.yearSwitch,
            calendarOn: DOM.yearCalendar,
        },
        off: {
            switchBtnOff: DOM.monthSwitch,
            calendarOff: DOM.monthCalendar,
        },
    });
};

event(DOM.monthSwitch, 'click', switchCalFunc);
event(DOM.yearSwitch, 'click', switchCalFunc);
