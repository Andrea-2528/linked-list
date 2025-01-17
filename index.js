export { LinkedList };

class Node {
	constructor(value) {
		this.value = value;
		this.nextNode = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	//List of linkedlist methods
	append(value) {}
	prepend(value) {}
	size() {}
	returnHead() {}
	returnTail() {}
	at(index) {}
	pop() {}
	contains(value) {}
	find(value) {}
	toString() {}
	insertAt(value, index) {}
	removeAt(index) {}

	append(value) {
		if (this.head === null) {
			this.head = new Node(value);
			this.length++;
		} else {
			let tmp = this.head;
			while (tmp.nextNode !== null) {
				tmp = tmp.nextNode;
			}
			tmp.nextNode = new Node(value);
			this.length++;
		}
	}

	prepend(value) {
		if (this.head === null) {
			this.head = new Node(value);
			this.length++;
		} else {
			let tmp = this.head;
			this.head = new Node(value);
			this.head.nextNode = tmp;
			this.length++;
		}
	}

	size() {
		return this.length;
	}

	returnHead() {
		return this.head.value;
	}

	returnTail() {
		if (this.head === null) {
			return null;
		} else {
			let tmp = this.head;
			while (tmp.nextNode !== null) {
				tmp = tmp.nextNode;
			}
			return tmp.value;
		}
	}

	at(index) {
		if (index === 0) {
			return this.head.value;
		}
		if (index >= this.length) {
			return null;
		} else {
			let tmp = this.head;
			for (let i = 0; i < index; i++) {
				tmp = tmp.nextNode;
			}
			return tmp.value;
		}
	}

	pop() {
		if (this.head === null) {
			return null;
		} else {
			let tmp = this.head;
			while (tmp.nextNode.nextNode !== null) {
				tmp = tmp.nextNode;
			}
			tmp.nextNode = null;
			this.length--;
		}
	}

	contains(value) {
		if (this.head === null) {
			return false;
		} else {
			let tmp = this.head;
			while (tmp.nextNode !== null) {
				if (tmp.value === value) {
					return true;
				}
				tmp = tmp.nextNode;
			}
            if (tmp.value === value) {
                return true;
            }
			return false;
		}
	}

	find(value) {
		if (this.head === null) {
			return null;
		} else {
			let tmp = this.head;
			let tmpCount = 0;
			while (tmp.nextNode !== null) {
				if (tmp.value === value) {
					return tmpCount;
				} else {
					tmp = tmp.nextNode;
					tmpCount++;
				}
			}
            if (tmp.value === value) {
                return tmpCount;
            }
            return null;
		}
	}

	toString() {
		if (this.head === null) {
			return "head -> null";
		} else {
			let tmp = this.head;
			let str = "head -> ";
			while (tmp.nextNode !== null) {
				str += `(${tmp.value}) -> `;
				tmp = tmp.nextNode;
			}
            str += `(${tmp.value}) -> null`;
			return str;
		}
	}

	insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }
		if (index >= this.length) {
			return null;
		} else {
			let tmp = this.head;
			for (let i = 0; i < index-1; i++) {
				tmp = tmp.nextNode;
			}
			let newNode = new Node(value);
			newNode.nextNode = tmp.nextNode;
			tmp.nextNode = newNode;
			this.length++;
		}
	}

	removeAt(index) {
		if (index >= this.length) {
			return null;
		} else {
            if (index === 0) {
                this.head = this.head.nextNode;
                this.length--;
                return;
            }
			let tmp = this.head;
			for (let i = 0; i < index-1; i++) {
				tmp = tmp.nextNode;
			}
			tmp.nextNode = tmp.nextNode.nextNode;
			this.length--;
		}
	}
}
