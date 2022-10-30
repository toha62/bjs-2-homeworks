class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(startTime, onDo, alarmId) {
    if (alarmId === undefined) {
      throw new Error('id is undefined');
    }
    
    if (this.alarmCollection.find(alarm => alarm.id === alarmId) !== undefined) {
      console.error(`Alarm with id=${alarmId} is already exist`);
      return null;
    }
   
    this.alarmCollection.push({
      id: alarmId,
      time: startTime,
      callback: onDo,
    });
  }

  removeClock(alarmId) {
    let index = this.alarmCollection.findIndex(alarm => alarm.id === alarmId);
    if (index === -1) {
      return false;
    }
    this.alarmCollection.splice(index, 1);
    return true;
  }

  getCurrentFormattedTime() {    
    return this.getFormattedTimeFromDate(new Date);
    // let hours = (new Date()).getHours().toString();
    // let minutes = (new Date()).getMinutes().toString();

    // hours = hours.length === 2 ? hours : '0' + hours;
    // minutes = minutes.length === 2 ? minutes : '0' + minutes;

    // return `${hours}:${minutes}`;
  }

  //Функция добавлена, исключительно, для удобства запуска тестов
  getFormattedTimeFromDate(date) {
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();

    hours = hours.length === 2 ? hours : '0' + hours;
    minutes = minutes.length === 2 ? minutes : '0' + minutes;

    return `${hours}:${minutes}`;
  }

  checkClock(alarm) {
    if (alarm.time === this.getCurrentFormattedTime()) {
      alarm.callback();
    }    
  }

  start() {
    if (!this.timerId) {
      this.timerId = setInterval(() => this.alarmCollection.forEach((alarm) => this.checkClock(alarm)), 10000); 
    }     
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(`Список будильников в количестве: ${this.alarmCollection.length}`)
    this.alarmCollection.forEach(element => console.log(`Будильник id = ${element.id}, время : ${element.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection.length = 0;
  }
}

function testCase() {
  let wakeUpCall = new AlarmClock();
  let currentDate = new Date();

  wakeUpCall.addClock(wakeUpCall.getFormattedTimeFromDate(currentDate), () => console.log('Превый будильник'), 1);

  currentDate.setTime(currentDate.getTime() + 60000);
  wakeUpCall.addClock(wakeUpCall.getFormattedTimeFromDate(currentDate), () => {
    console.log('Второй будильник');
    wakeUpCall.removeClock(2);
  }, 2);

  currentDate.setTime(currentDate.getTime() + 60000);
  wakeUpCall.addClock(wakeUpCall.getFormattedTimeFromDate(currentDate), () => {
    console.log('Третий будильник');
    wakeUpCall.removeClock(2);
    wakeUpCall.clearAlarms();
    wakeUpCall.printAlarms();
  }, 3);

  wakeUpCall.addClock(wakeUpCall.getFormattedTimeFromDate(currentDate), () => console.log('Четвертый будильник'), 3);

  wakeUpCall.printAlarms();
  wakeUpCall.start();
}