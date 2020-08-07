const monthServerFunc = ({ d, monthNum = d.getMonth() }) => {
    const dm = new Date(d.getFullYear(), monthNum);

    const drefFrom = new Date(dm.getFullYear(), dm.getMonth());
    const drefTo = new Date(dm.getFullYear(), dm.getMonth() + 1);

    const month = dm.toLocaleDateString('en-US', { month: 'long' });

    const daysInMonth = (drefTo - drefFrom) / 1000 / 60 / 60 / 24;
    const weekStart = drefFrom.getDay();
    const weekEnd = 7 - drefTo.getDay();

    return {
        month, daysInMonth, weekStart, weekEnd,
    };
};

export default monthServerFunc;
