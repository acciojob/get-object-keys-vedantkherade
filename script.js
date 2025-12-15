//your JS code here. If required.
// Create the student object
const student = {
  name: "John",
};

// Add getKeys as a method available to all objects
Object.prototype.getKeys = function () {
  return Object.keys(this);
};


// Testing the function
console.log(getKeys(student)); // Output: ["name"]