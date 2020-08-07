import { classAction, setStyle } from './functionsUI.js';
import DOMStrings from './DOMStrings.js';

const preset = () => {
    classAction(DOMStrings.monthSwitch, 'add', 'switch-on');
    setStyle(DOMStrings.yearCalendar, 'display', 'none');
    setStyle(DOMStrings.monthCalendar, 'display', 'flex');
};

const switchCal = ({ on, off }) => {
    const [{ switchBtnOn, calendarOn }, { switchBtnOff, calendarOff }] = [on, off];
    classAction(switchBtnOn, 'add', 'switch-on');
    classAction(switchBtnOff, 'remove', 'switch-on');
    setStyle(calendarOn, 'display', 'flex');
    setStyle(calendarOff, 'display', 'none');
};

export { preset, switchCal };
