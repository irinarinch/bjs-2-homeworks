function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) { 
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...args) {
  if (this.marks === undefined) { 
    this.marks = [...args];
  } else {
    this.marks.push(...args); 
  }     
}

Student.prototype.getAverage = function() {
  let sum = 0;
  let avg;

  for (let i = 0; i < this.marks.length; i += 1) {
    sum += this.marks[i];
    avg = sum / this.marks.length;
  }

  return avg;
}

Student.prototype.exclude = function(reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}