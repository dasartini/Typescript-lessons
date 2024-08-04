"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const date = new Date(1998, 1, 28);
const answer = (0, date_fns_1.subDays)(date, 30);
const str = (0, date_fns_1.format)(answer, 'yyy/MM/dd');
console.log(str);
