import htmlEmpty from './constants.js';

const selector = (elem) => document.querySelector(elem);
const selectorAll = (elem) => document.querySelectorAll(elem);

const classAction = (el, action, classValue) => {
    selector(el).classList[action](classValue);
};

const setStyle = (el, prop, value) => {
    selector(el).style[prop] = value;
};

const insertHtml = (elem, where, html) => {
    selector(elem).insertAdjacentHTML(where, html);
};

const setProp = (elem, prop, value) => {
    if (!selector(elem)) return;
    selector(elem)[prop] = value;
};

const offset = (elem, week, count, num) => {
    if (week === num) return;
    insertHtml(elem, 'beforeend', htmlEmpty);
    count++;
    if (count === week) return;
    offset(elem, week, count, num);
};

export {
    selector, selectorAll, classAction, setStyle, insertHtml, setProp, offset,
};
