var mergeTwoLists = function(list1, list2) {
    return [...list1,...list2]
};
list1 = [1,2,4], list2 = [1,3,4]
console.log(mergeTwoLists(list1, list2));