import _ from 'lodash';

const workers =[
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

const answer =_.groupBy(workers, (worker)=> worker.role)

console.log(answer)