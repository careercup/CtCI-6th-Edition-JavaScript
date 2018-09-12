var LinkedList = require('./../util/LinkedList');
var printList = require('./../util/printList');

function sumList(num1,num2){
  return createLinkedListFromNumber(createNumByDigit(num1)+createNumByDigit(num2))
}

function createNumByDigit(node){
  if(!node.next){
    return node.value
  }else{
    return node.value +10 * createNumByDigit(node.next)
  }
}

function createLinkedListFromNumber(num){
  return Array.from(num.toString()).reduce((acc,curr,i)=>{
    const node = new LinkedList(curr)
    node.next = acc
    return node
  },null)
}

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 9). this case refers to 617 + 995
// Output: 2 -> 1 -> 9. the answer refers to 1612

var a = new LinkedList(7);
var b = new LinkedList(1);
var c = new LinkedList(6);

a.next = b;
b.next = c;

var d = new LinkedList(5);
var e = new LinkedList(9);
var f = new LinkedList(2);

d.next = e;
e.next = f;

printList(sumList(a,d))
