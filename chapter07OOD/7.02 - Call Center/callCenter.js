/* Import Queue */
var Queue = require('./../util/Queue.js');

/* Employee class */
var Employee = function(name) {
  this.name = name;
};

Employee.prototype.dispatch = function(call, queue) {
  var context = this;
  setTimeout(function() {
    queue.add(context);
    console.log(`adding ${context.name} back to queue`);
  }, call.time);
};

/* Call class */
var Call = function(time) {
  this.time = time; // time the call will take in ms
};

/* Call Center class */
var CallCenter = function() {
  this.respondentQ = new Queue();
  this.managerQ = new Queue();
  this.directorQ = new Queue();
  this.open = false;
  this.init = false;
};

CallCenter.prototype.start = function() {
  if (this.init) {
    console.log('already intialized');
    return;
  }
  // 3 employees of each type
  for (var i = 0; i < 3; i++) {
    this.respondentQ.add(new Employee(`resp${i}`));
    this.managerQ.add(new Employee(`manager${i}`));
    this.directorQ.add(new Employee(`director${i}`));
  }
  this.init = true;
};

CallCenter.prototype.dispatchCall = function(call) {
  var employee;
  if (!this.respondentQ.isEmpty()) {
    employee = this.respondentQ.remove();
    console.log(employee, 'will be deployed');
    employee.dispatch(call, this.respondentQ);
    console.log('a respondent will be taking your call!');
  } else if (!this.managerQ.isEmpty()) {
    employee = this.managerQ.remove();
    console.log(employee, 'will be deployed');
    employee.dispatch(call, this.managerQ);
    console.log('a manager will be taking your call!');
  } else if (!this.directorQ.isEmpty()) {
    employee = this.directorQ.remove();
    console.log(employee, 'will be deployed');
    employee.dispatch(call, this.directorQ);
    console.log('a director will be taking your call!');
  } else {
    console.log('sorry, there are currently no available staff to take your call :(');
  }
};

/* Test */

var cc = new CallCenter();
cc.start();
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(2000));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(4000));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(6000));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(500));
setTimeout(function() {
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
}, 1000);








