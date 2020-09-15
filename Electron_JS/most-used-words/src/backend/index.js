const { ipcMain } = require('electron');

const pathsToRows = require('./pathsToRows');
const prepareData = require('./prepareData');
const groupWords = require('./groupWords');

ipcMain.on('process-subtitles', (event, paths) => {
    
    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => groupWords(words))
        .then(groupedWords => event.reply('process-subtitles', groupedWords));
        // .then(() => {
        //     event.reply('process-subtitles', [
        //         { name: 'i', amount: 999 },
        //         { name: 'he', amount: 853 },
        //         { name: 'she', amount: 912 },
        //         { name: 'it', amount: 507 },
        //         { name: 'they', amount: 331 },
        //         { name: 'our', amount: 123 },
        //     ])
        // });
})