let root;
    //Create a new node with data and assign its left and right childrens null value.
    class Node
    {
        constructor(data) {
           this.left = null;
           this.right = null;
           this.data = data;
        }
    }

    // Function to insert nodes in level order
    function entryLevelOrder(arr, root, i)
    {

        if (i < arr.length) {
            let temp = new Node(arr[i]);
            root = temp;   
            root.left = entryLevelOrder(arr, root.left, 2 * i + 1);
            root.right = entryLevelOrder(arr, root.right, 2 * i + 2);                                              
        }
        return root;
    }

    //Function to find the depth of tree
    function depth(root) {
        //If root is empty return 0
        if(!root) return 0;
        // traverse the depth
        else {
            leftHeight = depth(root.left);
            rightHeight = depth(root.right);

            if(leftHeight > rightHeight) 
                return leftHeight + 1;
            else return rightHeight + 1;
        } 
    }


var arr = [3,9,null,null,24,15,7];
root = entryLevelOrder(arr, root, 0);

const h = depth(root);
console.log(h);