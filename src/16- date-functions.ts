import { subDays, format } from "date-fns";

const date =new Date(1998, 1, 28); 
const answer = subDays(date, 30,);

const str = format(answer, 'yyy/MM/dd')

console.log(str)