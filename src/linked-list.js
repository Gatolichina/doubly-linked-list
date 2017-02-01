const Node = require('./node');

class LinkedList {
    constructor() {
      this.length=0;
        
    }

    append(data) {

      var member=new Node(data, null, null);
      if(this.length==0){
        this._head=member;
        this._tail=member;
        
      }
      else {
        member.next=this._tail;
        this._tail.prev=member;
        this._tail=member;
        
      }
      this.length++;
      return this;//
    }

    head() {
      if(this.length!=0)
        return this._head.data;
      else {return null;}
      }

    tail() { if(this.length!=0)
        return this._tail.data;
      else {return null;}
    }

    at(index) {
        if((this.length!=0)&&(index<this.length)){
          var tmp=0;
          var temp1=this._head;
          while (index!=tmp){
             var temp2=temp1;
             temp1=temp2.prev;
             tmp++;
            }
          return temp1.data;
        }
         return "Wrong index";

    }

    insertAt(index, data) {
        if((this.length!=0)&&(index<this.length)){
          var addition=new Node(data, null, null);
          var tmp=0;
          var temp1=this._head;
          while (tmp!=(index-1)){
             var temp2=temp1;
             temp1=temp2.prev;
             tmp++;
            }
          var temp3=temp1.prev;
          addition.next=temp1;
          addition.prev=temp3;
          temp3.next=addition;
          temp1.prev=addition;
       } else {this.append(data);}
       return this;//
    }   

    isEmpty() { return (this.length==0);}

    clear() {
        
        this._head=null;
        this._tail=null;
        this.length=0;
        return this;
      
    }

    deleteAt(index) {
        if((this.length!=0)&&(index<this.length)){
          var tmp=0;
          var temp1=this._head;
          while (tmp!=index){
             var temp2=temp1;
             temp1=temp2.prev;
             tmp++;
            }
          if (temp1.prev!=null& temp1.next!=null){
            var temp3=temp1.next;
            temp3.prev=temp1.prev;
            temp1.prev.next=temp3;
            return this;
          }  else {return this.clear();}
        } 
               
    }

    reverse() {
       let temp1=this._head;
        while(temp1.prev!=null){
            let temp2=temp1.prev;
            temp1.prev=temp1.next;
            temp1.next=temp2;
            temp1=temp2;
        }
         temp1.prev=temp1.next;
         temp1.next=null;
        this._tail=this._head;
        this._head=temp1;
        return this;

    }

    indexOf(data) {
        if(this.length!=0){
          var tmp=0;
          var temp1=this._head;
          while ((tmp<(this.length-1))&&(temp1.data!=data)){
             var temp2=temp1.prev;
             temp1=temp2;
             tmp++;
            }
          if(temp1.data==data){
            return tmp;
          }
          else { return -1;}
        }
        else { return -1;}

    }
}

module.exports = LinkedList;