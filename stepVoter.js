function StepVoter(options) {
  var elem = this._elem = options.elem;
  this._voteElem = elem.querySelector('.vote');
  this._step = options.step;

  elem.onmousedown = function() {
    return false;
  };

  elem.onclick = this._onClick.bind(this);
}

StepVoter.prototype = Object.create(Voter.prototype);

StepVoter.prototype._voteIncrease = function() {
  this._voteElem.innerHTML = +this._voteElem.innerHTML + this._step;
};

StepVoter.prototype._voteDecrease = function() {
  this._voteElem.innerHTML = +this._voteElem.innerHTML - this._step;