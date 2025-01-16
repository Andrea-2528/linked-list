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

	head() {
		return this.head;
	}

	tail() {
		if (this.head === null) {
			return null;
		} else {
			let tmp = this.head;
			while (tmp.nextNode !== null) {
				tmp = tmp.nextNode;
			}
			return tmp;
		}
	}

	at(index) {
		if (index === 0) {
			return this.head;
		}
		if (index >= this.length) {
			return null;
		} else {
			let tmp = this.head;
			for (let i = 0; i < index; i++) {
				tmp = tmp.nextNode;
			}
			return tmp;
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
    }
}
