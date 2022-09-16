class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error(`Невозможно идентифицировать будильник. Параметр id не передан.`);             
        } 
        
        if (this.alarmCollection.find(alarm => alarm.id === id) !== undefined) {
            console.error(`Будильник с таким id уже существует.`); 
            return;
        }
       
        this.alarmCollection.push({time, callback, id});  
    }

    removeClock(id) {   
        let index = this.alarmCollection.findIndex(alarm => alarm.id === id);

        if (index !== -1) {
            this.alarmCollection.splice(index, 1);
            return true;
        } 
        
        return false;
    }

    getCurrentFormattedTime() {
        let now = new Date();
        let hour = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`;
        let minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`;
    
        return `${hour}:${minute}`;      
    } 

    start() {     
        const checkClock = (alarm) => { 
            if (this.getCurrentFormattedTime() === alarm.time) {
                alarm.callback(); 
            } 
        }

        if (this.timerId === undefined || this.timerId === null) {     
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(checkClock);                
            }, 1000);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Всего будильников: ${this.alarmCollection.length}`)
        this.alarmCollection.forEach(alarm => console.log(`Будильник ${alarm.id} установлен на ${alarm.time}`))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

    addMinutesToCurrentTime(minutes) {
        let now = new Date();
        Date.prototype.addMinutes = function(minutes) {
            this.setMinutes(this.getMinutes() + minutes);
            return this;
        };

        let newMinutes = now.addMinutes(minutes)
        let hour = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`;
        let minute = newMinutes.getMinutes() < 10 ? `0${newMinutes.getMinutes()}` : `${newMinutes.getMinutes()}`;
        
        return `${hour}:${minute}`;  
    }
}



   
        


