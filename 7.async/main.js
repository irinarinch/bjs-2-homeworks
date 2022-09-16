function testCase() {
    let phoneAlarm = new AlarmClock();
    
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log(`первый будильник`), 1);  
    
    phoneAlarm.addClock(phoneAlarm.addMinutesToCurrentTime(1), () => {
        console.log(`второй будильник`); 
        phoneAlarm.removeClock(2); 
        phoneAlarm.printAlarms();
    }, 2);    

    phoneAlarm.addClock(phoneAlarm.addMinutesToCurrentTime(2), () => {
        console.log(`третий будильник`); 
        phoneAlarm.stop();
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();    
    }, 3);
   
    
    phoneAlarm.printAlarms();     
    phoneAlarm.start();   
}

testCase();
