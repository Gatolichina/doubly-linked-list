const Node = require('./node');

class LinkedList {
    constructor() {
      this.length=0;
      head={};
      tail={};
      
    }

    append(data) {
      const member=new Node(data, , );
      if(length==0){
        head=member;
        tail=member;
        
      }
      else {
        member.prev=tail;
        tail.next=member;
        tail=member;
        
      }
      length++;
console.log('hello world!');

    }

    head() {console.log('hello world!'); return this.head.data;}

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
