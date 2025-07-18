class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }
 
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}
	
	// WRITE THE REMOVEDUPLICATES METHOD HERE // 
	removeDuplicates(){
        let current = this.head
        
        while(current){
            let runner = current

            while(runner.next){
                if(runner.next.value === current.value){
                    let removedNode = runner.next
                    runner.next = runner.next.next
                    removedNode.next = null
                    this.length--
                }else{
                    runner = runner.next
                }

            }
            current = current.next
        } 
    }

    // removeduplicateusing set
    removeDuplicatesWithSet(){
        let current = this.head
        let pre = null

        let seen = new Set()

        while(current){
            if(seen.has(current.value)){
                let removeNode = current
                pre.next = current.next
                current = current.next
                removeNode.next = null
                this.length--
            }else{
                seen.add(current.value)
                pre = current
                current = current.next
            }

            // current = current.next
        }
    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(5);


console.log("Original list:");
myLinkedList.printList();

myLinkedList.removeDuplicatesWithSet();

console.log("\nList after removing duplicates:");
myLinkedList.printList();



/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    3
    4
    5
    5
    List after removing duplicates:
    1
    2
    3
    4
    5

*/
