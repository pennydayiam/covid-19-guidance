/*
*
*   File:   Checklist.js
*
*   Desc:   Checklist widget that implements ARIA Authoring Practices
*           for a verification list.
*
*/

/*
*   @constructor Checkbox
*
*
*/

var Checkbox = function (domNode) {

  this.domNode = domNode;
  this.controlledCheckboxes = [];

  this.keyCode = Object.freeze({
    'RETURN': 13,
    'SPACE': 32
  });
};

Checkbox.prototype.init = function () {
  this.domNode.tabIndex = 0;

  if (!this.domNode.getAttribute('aria-checked')) {
    this.domNode.setAttribute('aria-checked', 'false');
  }

  this.domNode.addEventListener('keydown',    this.handleKeydown.bind(this));
  this.domNode.addEventListener('click',      this.handleClick.bind(this));
  this.domNode.addEventListener('focus',      this.handleFocus.bind(this));
  this.domNode.addEventListener('blur',       this.handleBlur.bind(this));
};

Checkbox.prototype.toggleCheckbox = function () {

  if (this.domNode.getAttribute('aria-checked') === 'false') {
    this.domNode.setAttribute('aria-checked', 'true');
  }
  else {
    this.domNode.setAttribute('aria-checked', 'false');
  }
  updateChecklistReady();
  // console.log($('[role="checkbox"][aria-checked="true"]').length);
};

/* EVENT HANDLERS */

Checkbox.prototype.handleKeydown = function (event) {
  var flag = false;

  switch (event.keyCode) {
    case this.keyCode.SPACE:
      this.toggleCheckbox();
      flag = true;
      break;

    default:
      break;
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};

Checkbox.prototype.handleClick = function (event) {
  this.toggleCheckbox();
};

Checkbox.prototype.handleFocus = function (event) {
  this.domNode.classList.add('focus');
};

Checkbox.prototype.handleBlur = function (event) {
  this.domNode.classList.remove('focus');
};
