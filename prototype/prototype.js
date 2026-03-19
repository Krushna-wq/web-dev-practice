Array.prototype.myMap = function(callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    // skip empty indexes (important edge case)
    if (i in this) {
      result.push(callback(this[i], i, this));
    }
  }

  return result;
};

