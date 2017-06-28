import WISHMaker from './WISHMaker.js';

global.SIProgramTrigger = function(){
    const channel = 'ra_general';

    const siProgramTrigger = new WISHMaker(channel);
    siProgramTrigger.announceTodaysRA();
}