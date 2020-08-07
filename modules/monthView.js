/* eslint-disable prefer-const */
import DOMStrings from './DOMStrings.js';
import leftArrow from '../img/left-arrow-btn.png';
import rightArrow from '../img/right-arrow-btn.png';
import {
    insertHtml, offset, classAction, setProp,
} from './functionsUI.js';

setProp(DOMStrings.prevMonthBtn, 'src', leftArrow);
setProp(DOMStrings.nextMonthBtn, 'src', rightArrow);


const monthCalendar = ({
    monthYear, currDate, currWeek, currMonthYear, currTime,
}, serveMonthFn) => {
    const [fh, sh] = monthYear.split(' ');
    const [shfh, shsh] = [sh.slice(0, 2), sh.slice(2, sh.length)];
    insertHtml(DOMStrings.nextMonthBtn, 'beforebegin', `<div class="month-year">${fh} ${shfh}<span id='relv'>${shsh}</span></div>`);

    const serveMonth = ({
        daysInMonth, weekStart, weekEnd,
    }) => {
        let dateCount = 1;
        let countOffsetStart = 0;
        let countOffsetEnd = 0;
        const noOffsetStart = 0;
        const noOffsetEnd = 0;

        const offsetStart = offset;
        offsetStart(DOMStrings.datesContMonth, weekStart, countOffsetStart, noOffsetStart);

        const supplyDates = (count, compareTo, elem) => {
            insertHtml(elem, 'beforeend', `<span class="mdate" id="mdate-${count}">${count}</span>`);
            count++;
            if (count > compareTo) return;
            supplyDates(count, compareTo, elem);
        };
        supplyDates(dateCount, daysInMonth, DOMStrings.datesContMonth);

        const offsetEnd = offset;
        offsetEnd(DOMStrings.datesContMonth, weekEnd, countOffsetEnd, noOffsetEnd);

        if (currMonthYear === monthYear) {
            classAction(`#mdate-${currDate}`, 'add', 'curr-mdate');
            classAction(`#mwday-${currWeek}`, 'add', 'curr-mwday');
            insertHtml(`#mdate-${currDate}`, 'beforeend', `<span id='curr-time'>${currTime}</span>`);
            setInterval(() => {
                setProp(DOMStrings.currTime, 'textContent', new Date().toLocaleTimeString());
            }, 1000);
        } else {
            classAction(`#mdate-${currDate}`, 'remove', 'curr-mdate');
            classAction(`#mwday-${currWeek}`, 'remove', 'curr-mwday');
        }
    };
    serveMonth(serveMonthFn({}));
};

const navigateMonth = ({
    monthYear, currDate, currWeek, currMonthYear, currTime,
}, serveMonthFn) => {
    setProp(DOMStrings.monthYear, 'outerHTML', '');
    setProp(DOMStrings.datesContMonth, 'innerHTML', '');
    monthCalendar({
        monthYear, currDate, currWeek, currMonthYear, currTime,
    }, serveMonthFn);
};

export { monthCalendar, navigateMonth };
