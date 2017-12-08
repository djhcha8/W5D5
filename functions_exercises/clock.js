class Clock {
  constructor() {
    // 1. Create a Date object.
    const time = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = time.getHours();
    this.minutes = time.getMinutes();
    this.seconds = time.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.  
    setInterval(() => this._tick(), 10);
  }

  printTime() {
    // Format the time in HH:MM:SS
    if (this.seconds === 60) {
      this.minutes++;
      this.seconds = 0;
    } 
    if (this.minutes === 60) {
      this.hours++;
      this.minutes = 0;
    }
    if (this.hours === 25) {
      this.hours = 1;
    }
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    this.seconds++;
    // 2. Call printTime.
    this.printTime();
  }
}

const clock = new Clock();