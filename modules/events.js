import { selector } from './functionsUI.js';

const event = (elem, ev, value) => selector(elem).addEventListener(ev, value);

export default event;
