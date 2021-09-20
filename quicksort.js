
export default class QuickSort
{

    static _swap(items, leftIndex, rightIndex){
        let temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }


    static _partition(items, left, right) {
        let pivot   = items[parseInt((right + left) / 2)] //middle element
        let i       = left; //left pointer
        let j       = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                this._swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }
    
    static Sort(items, left, right) {
        let index;
        if (items.length > 1) {
            index = this._partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                this.Sort(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                this.Sort(items, index, right);
            }
        }
        return items;
    }

    static InvSort(items, left, right) {

    }
}