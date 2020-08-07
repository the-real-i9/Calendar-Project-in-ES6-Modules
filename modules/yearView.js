/* eslint-disable prefer-const */
import DOMStrings from './DOMStrings.js';
import {
    selectorAll, insertHtml, classAction, setProp, offset,
} from './functionsUI.js';


const yearCalendar = ({
    yearSet, currDate, currWeek, currMonth, currYear,
}, serveMonthFn) => {
    let monthCountStart = 0;
    const monthCountEnd = 11;
    const [fh, sh] = [yearSet.slice(0, 2), yearSet.slice(2, yearSet.length)];
    insertHtml(DOMStrings.nextYearBtn, 'beforebegin', `<div class="year">${fh}<span id='relv'>${sh}</span></div>`);

    // Power House
    const serveMonth = ({
        month, daysInMonth, weekStart, weekEnd,
    }) => {
        if (monthCountStart > monthCountEnd) return;
        let weekCountStart = 0;
        const weekCountEnd = 6;
        let countOffsetStart = 0;
        let countOffsetEnd = 0;
        const noOffsetStart = 0;
        const noOffsetEnd = 7;
        let dateCount = 1;
        const weekText = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

        // insert month to months container
        insertHtml(DOMStrings.allMonthsCont, 'beforeend', `<div class="month-of-year" id='moy-${monthCountStart}'></div>`);
        // insert the month name
        insertHtml(`#moy-${monthCountStart}`, 'beforeend', `<div class='month-name'>${month}</div>`);
        // insert weeks container
        insertHtml(`#moy-${monthCountStart}`, 'beforeend', `<div class="weekdays" id='wds-${monthCountStart}'>`);

        // Supply the weeks into weeks container
        const supplyWeeks = (count, compareTo, elem) => {
            insertHtml(elem, 'beforeend', `<span class='wday' id="wday-${count}">${weekText[count]}</span>`);
            count++;
            if (count > compareTo) return;
            supplyWeeks(count, compareTo, elem);
        };
        supplyWeeks(weekCountStart, weekCountEnd, `#wds-${monthCountStart}`);

        // insert dates container
        insertHtml(`#moy-${monthCountStart}`, 'beforeend', `<div class="dates" id='dates-${monthCountStart}'>`);

        // Add required empty cels to the start
        const offsetStart = offset;
        offsetStart(`#dates-${monthCountStart}`, weekStart, countOffsetStart, noOffsetStart);

        // supply the dates for the month
        const supplyDates = (count, compareTo, elem) => {
            insertHtml(elem, 'beforeend', `<span class="date" id="date-${count}">${count}</span>`);
            count++;
            if (count > compareTo) return;
            supplyDates(count, compareTo, elem);
        };
        supplyDates(dateCount, daysInMonth, `#dates-${monthCountStart}`);

        // // Add required empty cels to the end
        const offsetEnd = offset;
        offsetEnd(`#dates-${monthCountStart}`, weekEnd, countOffsetEnd, noOffsetEnd);


        // Increment to and call the function agin to serve subsequent months
        monthCountStart++;
        serveMonth(serveMonthFn({ monthNum: monthCountStart }));
    };
    serveMonth(serveMonthFn({ monthNum: monthCountStart }));

    if (yearSet === currYear) {
        classAction(`#moy-${currMonth} #date-${currDate}`, 'add', 'curr-date');
        classAction(`#moy-${currMonth} #wday-${currWeek}`, 'add', 'curr-wday');
    }
    setTimeout(() => {
        [...selectorAll(DOMStrings.singleMonth)].map((e) => e.classList.add('animate'));
    }, 1);
};


const navigateYear = ({
    yearSet, currDate, currWeek, currMonth, currYear,
}, serveMonthFn) => {
    setProp(DOMStrings.year, 'outerHTML', '');
    setProp(DOMStrings.allMonthsCont, 'innerHTML', '');
    yearCalendar({
        yearSet, currDate, currWeek, currMonth, currYear,
    }, serveMonthFn);
};

export { yearCalendar, navigateYear };
