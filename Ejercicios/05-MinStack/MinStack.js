 //* Con funciones
function Node (value) {
  this.value = value
  this.next = null
}

function MinStack () {
  this.top = null
}

MinStack.prototype.push = function (value) {
  const prevTop = this.top
  this.top = new Node(value)
  this.top.next = prevTop
}

MinStack.prototype.pop = function () {
  const popped = this.top
  this.top = this.top.next
  return popped.value
}

MinStack.prototype.min = function () {
  let min = this.top.value
  let current = this.top
  while (current.next) {
    if (current.value < min) min = current.value
    current = current.next
  }
  return min
}

MinStack.prototype.peek = function () {
  return this.top.value
}

//* O(1)


function Node (value) {
  this.value = value
  this.next = null
  this.minimum = null
}

function MinStack () {
  this.top = null
}

MinStack.prototype.push = function (value) {
  const previus = this.top
  this.top = new Node(value)
  this.top.next = previus
  if (!previus) this.top.minimum = value
  else if (value < previus.minimum) this.top.minimum = value
  else this.top.minimum = previus.minimum
}

MinStack.prototype.pop = function () {
  const popped = this.top
  this.top = popped.next
  return popped.value
}

MinStack.prototype.min = function () {
  return this.top.minimum
}

MinStack.prototype.peek = function () {
  return this.top.value
}

module.exports = {
  Node,
  MinStack
}
