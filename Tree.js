// A Simple implementation of tree

// Node class
class Node{
    constructor(data){
        this.right = null;
        this.left = null;
        this.data = data;
    }
}

// BTS
class BinaryTree{

    constructor(){
        this.root = null;
    }

    insert(data){
        let newNode = new Node(data);
        if(this.root == null){
            this.root = newNode;
        }
        else
            this.insertNode(this.root,newNode)

    }

    insertNode(node1,newNode){
        if(node1.data > newNode.data){
            if(node1.left === null)
                node1.left = newNode
            else
                this.insertNode(node1.left,newNode);
        }
        else{
            if(node1.right === null)
                node1.right = newNode
            else
                this.insertNode(node1.right,newNode);
        }
    }

    remove(data){
        this.root = this.removeNode(this.root,data)
    }

    removeNode(node,key){
        if(node === null){
            return null;
        }

        else if(key < node.data) 
        { 
            node.left = this.removeNode(node.left, key); 
            return node; 
        } 
      
        else if(key > node.data) 
        { 
            node.right = this.removeNode(node.right, key); 
            return node; 
        } 
      
        else
        { 
            if(node.left === null && node.right === null) 
            { 
                node = null; 
                return node; 
            } 
      
            if(node.left === null) 
            { 
                node = node.right; 
                return node; 
            } 
              
            else if(node.right === null) 
            { 
                node = node.left; 
                return node; 
            } 
      
            let aux = this.findMinNode(node.right); 
            node.data = aux.data; 
      
            node.right = this.removeNode(node.right, aux.data); 
            return node; 
        }
    }    

    findMinNode(node){
        if(node.left !== null){
            this.findMinNode(node.left);
        }
        else{
            console.log(node.data);
            return node;
        }
    }

    search(node,data){
        if(node === null){
            console.log("Element not found");
            return null;
        }
        else if(node.data > data){
            console.log("left");
            return this.search(node.left.data);
        }
        else if(node.data < data){
            console.log("right");
            return this.search(node.right,data);
        }
        else{
            console.log("Element found !");
        }
    }

    inorder(node) 
    { 
        if(node !== null) { 
            this.inorder(node.left); 
            console.log(node.data); 
            this.inorder(node.right); 
        } 
    }
    
    preorder(node){
        if(node !== null){
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node){
        if(node !== null){
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node)
        }
    }

    getRootNode(){
        return this.root;
    }
}

const bt = new BinaryTree();

bt.insert(10);
bt.insert(15);
bt.insert(14);
bt.insert(16);
bt.insert(13);
bt.insert(12);
bt.insert(5);
bt.insert(6);
bt.insert(7);
bt.insert(8);
bt.postorder(bt.root)