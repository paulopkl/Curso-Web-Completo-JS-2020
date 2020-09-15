const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 5', function (){
    console.log('Executando Tarefa 1', new Date().getSeconds());
});

setTimeout(function (){
    tarefa1.cancel();
    console.log('Cancelando Tarefa 1!!');
}, 20000);

// setImmediate 
// setInterval = intervalos

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 22;
regra.second = 20;

const Tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Executando Tarefa 2!!', new Date().getSeconds());
});