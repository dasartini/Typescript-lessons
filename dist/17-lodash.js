"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const workers = [
    {
        username: 'adrian',
        role: 'admin'
    },
    {
        username: 'sam',
        role: 'supervisor'
    },
    {
        username: 'kam',
        role: 'sales'
    },
    {
        username: 'Kamal',
        role: 'sales'
    },
    {
        username: 'John woods',
        role: 'supervisor'
    },
    {
        username: 'karol',
        role: 'accountability'
    },
];
const answer = lodash_1.default.groupBy(workers, (worker) => worker.role);
console.log(answer);
