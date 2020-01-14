// Simple Stack implementation of Stack in javascript

class Stack{
    constructor(){
        this.items = [];
    }

    // Push new element to the stack
    push(x){
        this.items.push(x);
    }
    // Pop the element on Top of Stack
    pop(){
        if(this.isEmpty == true)
            return "Stack Underflow"
        return this.items.pop();    
    }

    // Return the top most element
    peek(){
        return this.items[this.items.length - 1];
    }

    // Checks if the Stack is Empty
    isEmpty(){
        return this.items.length === 0
    }

    // Prints the Elements in the stack
    printStack(){
        console.error("Stack - ");
        this.items.reverse().forEach( (item) => {
            console.log(item);
        })
    }
}

// Driver Code 

const stack = new Stack();

console.error("Is the Stack Empty ?");
console.log(stack.isEmpty());

console.error("Pushing 1 to 8 numbers on stack...");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);

console.error("Top Element of Stack - ");
console.log(stack.peek());
console.log(stack.pop());
console.log("Pop 1 Element from stack");
console.log("Top Element of Stack - ");
console.log(stack.peek());

stack.printStack();

console.error("Is the Stack Empty ?");
console.log(stack.isEmpty());