const Node = require('./node');

class LinkedList {
    constructor() {
      var length=0;
      var head={};
      var tail={};
      
    }

    append(data) {
      var member=new Node(data, , );
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
    }

    head() { return head.data;}

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
