class Node {
    constructor(ele) {
      this.data = ele;
      this.next = null;
    }
  }
  function detectLoop(node) {
    let slw = node,
      fast = node;
    while (slw != null && fast != null && fast.next != null) {
      slw = slw.next;
      fast = fast.next.next;
      if (slw == fast) {
        console.log("loop exist");
        return true;
      }
    }
    return false;
  }

  let head = new Node(31);
  head.next = new Node(45);
  head.next.next = new Node(75);
  head.next.next.next = new Node(7);
  head.next.next.next.next = new Node(14);
  //orginal list
  console.log(detectLoop(head));
  //looping the list
  head.next.next.next.next = head.next;
  console.log(detectLoop(head));

  /*output: false
            loop exist
            true
*/