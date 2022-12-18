// Given a singly linked list of size N. The task is to left-shift the linked list by k nodes,
// where k is a given positive integer smaller than or equal to length of the linked list.
var head;

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(7);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(9);

function rotate(head, k) {
  if (k == 0) return;

  let newHead = head;
  for (let i = 0; i < k; i++) {
    newHead = newHead.next;
  }

  let newHeadEnd = newHead;
  while (newHeadEnd.next != null) {
    newHeadEnd = newHeadEnd.next;
  }

  let newTail = head;
  newHeadEnd.next = newTail;

  let newTailEnd = newTail;
  for (let i = 1; i < k; i++) {
    newTailEnd = newTailEnd.next;
  }

  newTailEnd.next = null;

  return newHead;
}

console.log(rotate(head, 3));
/* Output:
  Node {
  data: 8,
  next: Node { data: 9, next: Node { data: 2, next: [Node] } }
}*/