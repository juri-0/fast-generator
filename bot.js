const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});

let lastRan = 1600001;

client.on('message', msg => {
  if (msg .content === "?getalt") {
    sendAlt(msg)
}
});

function sendAlt(fmsg) {
  const now = new Date();
  if (now - lastRan > 10 * 60 * 1000) {
      
    var accounts = [
    "mgzancker@gmail.com:starburst83",
    "adrian.schnider@gmail.com:duck9922",
    "ajwaggoner42@gmail.com:Andrewawd098",
    "doughpaul@yahoo.com:grace5150",
    "silbrowneyes@yahoo.com:jacob0127",    
    "larsinsweden@live.com:Hurricanes1",
    "mayuri_green_greens@yahoo.co.jp:youandme16",
    "cammielfranklin@yahoo.com:mychad07",
    "greenhagendylan@yahoo.com:gylan1223",
    "babllpro10@yahoo.com:08091999mh",
    "zxshinxz@naver.com:s951468s",
    
    ]
      
    // It's been more than 10 mins
    var result = Math.floor((Math.random() * accounts.length) + 0);
    fmsg.author.send("REGULAR ACCOUNT! \n \n Account Credentials: \n " + accounts[result] + " \n \n Alt By ArcticBear#7273 \n \n Join ArcticBear#7273's Official Discord: https://discord.gg/adHMdTA \n \n Arc" );
    
    lastRan = now;
  } else {
    fmsg.channel.send('You have already ran this command! Please wait 10 minutes.')
  }

}

client.login(process.env.NTY5NDk2NzUwNTE2MzM4Njk3.XPWOgg.sv2kVeH-agmKf9U-PrTilVjjZp8);
