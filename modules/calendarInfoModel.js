const calendarInfoFunc = ({ nextOrPrev = 0, nextOrPrevMonth = 0, d }) => {
    d.setFullYear(d.getFullYear() + nextOrPrev, d.getMonth() + nextOrPrevMonth);

    const yearSet = d.getFullYear().toString();


    const monthYear = d.toLocaleDateString('en-GB', {
        month: 'long',
        year: 'numeric',
    });

    const currD = new Date();
    const currDate = currD.getDate();
    const currWeek = currD.getDay();
    const currMonth = currD.getMonth();
    const currYear = currD.getFullYear().toString();
    const currMonthYear = currD.toLocaleDateString('en-GB', {
        month: 'long',
        year: 'numeric',
    });
    const currTime = currD.toLocaleTimeString();

    return {
        yearSet, monthYear, currDate, currWeek, currMonth, currYear, currMonthYear, currTime,
    };
};

export default calendarInfoFunc;
