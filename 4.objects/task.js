function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age; 
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) { 
    this.marks = []; 
  } 

  this.marks.push(mark);    
}

Student.prototype.addMarks = function (...marksArray) {
  if (this.marks === undefined) { 
    this.marks = []; 
  } 

  this.marks.push(...marksArray);    
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks === []) { 
    console.log(`${this.name} ещё не имеет оценок`); 
    return;
  } 

  let average = this.marks.reduce((sum, item) => sum + item, 0) / this.marks.length;
  // average = Number(average.toFixed(1));

  return(average);    
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  
  if (this.hasOwnProperty('subject')) {
    delete this.subject;    
  }

  if (this.hasOwnProperty('marks')) {
    delete this.marks;    
  }
}