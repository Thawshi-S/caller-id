const TeleBot = require('telebot');
const bot = new TeleBot('5631020141:AAHR4lQSHZl8WTxehNgroRbhUT-rBtVEQvU');
const utf8 = require('utf8');

const truecallerjs = require('truecallerjs');


function hello(msg) {
    var searchData = {
        number: msg.text,
        countryCode: "LK",
        installationId: "a1i0B--alaXwyVw-Yu2aaln0EhFbzq3Klm9bBybdZdXXVI3pMlzu166DP6WEwcW6",
        output: "TEXT"
    }

    var sn = truecallerjs.searchNumber(searchData);
    sn.then(function (response) {
        print(response)
        return bot.sendMessage(msg.from.id, utf8.encode(response));
    });
}


bot.on('text', (msg) => hello(msg));
bot.start();