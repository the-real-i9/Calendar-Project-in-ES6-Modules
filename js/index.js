// Switch JS
import { preset as presetSwitch } from '../modules/switchView.js';
import '../modules/switchModel.js';

// Year Calendar JS
import { calendarInfo as calendarInfoYear, monthServer as serveMonthYear } from '../modules/calendarYearModel.js';
import { yearCalendar } from '../modules/yearView.js';
import '../modules/yearModel.js';

// Month Calendar JS
import { calendarInfo as calendarInfoMonth, monthServer as serveMonthMonth } from '../modules/calendarMonthModel.js';
import { monthCalendar } from '../modules/monthView.js';
import '../modules/monthModel.js';

// switch
presetSwitch();

// year calendar
yearCalendar(calendarInfoYear({}), serveMonthYear);

// month calendar
monthCalendar(calendarInfoMonth({}), serveMonthMonth);
