var Pointer = function(val) {
  this.val = function(v) {
    if (v !== undefined) {
      val = v;
    }
    return val;
  }
}
