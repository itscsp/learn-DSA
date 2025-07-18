class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data){
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode()
            return
        }

        let current = this.head;
        while(current.next){
            current = current.next
        }

        current.next = newNode;
    }
}

