class Queue{
    constructor(){
        this.queue = [];
    }

    enQueue(x){
        this.queue.push(x);
        console.log(`${x} is added to Queue `);
    }

    deQueue(){
        return this.queue.shift();
    }

    isEmpty(){
        return this.queue.length == 0;    
    }

    peek(){
        return this.isEmpty() ? "Stack Underflow " : this.queue[0];
    }

    // Prints the Elements in the stack
    printQueue(){
        console.log("Queue - ");
        this.queue.forEach( (item) => {
            console.log(item);
        })
    }    
}

const q = new Queue();

q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
q.enQueue(4);
q.enQueue(5);
q.enQueue(6);
q.printQueue();
q.deQueue();
q.printQueue();
console.log(q.peek())