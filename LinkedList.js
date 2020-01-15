class Node{
    constructor(data){
        this.next = null;
        this.data = data
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(data){
        let newNode = new Node(data);
        let current;
        if(this.head === null){
            this.head = newNode
        }
        else{
            current = this.head;

            while(current.next){
                current = current.next
            }

            current.next = newNode;
        }
        this.size++;
    }

    insertAt(element,index){
        if(index > 0 && index > this.size){
            return false;
        }
        else{
            let newNode = new Node(element);
            let curr,prev;

            curr = this.head;

            if(index == 0){
                newNode.next = this.head;
                this.head = newNode;
            }
            else{
                curr = this.head;
                var it = 0;

                while(it < index){
                    prev = curr;
                    curr = curr.next;
                    it++;
                }

                newNode.next = curr;
                prev.next = newNode;
            }
            this.size++;
        }
    }

    removeFrom(index){
        if(index > 0 && index > this.size){
            return -1
        }
        else{
            var curr,prev,it = 0 ;
            curr = this.head;
            prev = curr;

            if(index === 0 ){
                this.head = cuur.nexxt;
            }
            else{
                curr = this.head;
                var it = 0;

                while(it<index){
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;
        }
    }

    printList(node){
        while(node.next.next != null){
            console.log(node.data);
            node = node.next
        }
        console.log(`${node.data} => null`)
    }

    sizeOfList(){
        return this.size;
    }
}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
ll.insertAt(100,2);
ll.printList(ll.head)