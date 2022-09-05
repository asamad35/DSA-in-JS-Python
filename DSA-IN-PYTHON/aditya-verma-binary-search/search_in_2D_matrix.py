arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

# // stand at first row last col, because if we move left we get a smaller element and if move down we get a larger element.
# // move down if el < target, move left if el > target.


def search(arr, target):
    row = len(arr)-1
    col = len(arr[0])-1

    currRow = 0
    currCol = col
    while (currRow <= row and currRow >= 0 and currCol <= col and currCol >= 0):
        if (arr[currRow][currCol] == target):
            return True
        elif (arr[currRow][currCol] > target):
            currCol = currCol-1
        elif (arr[currRow][currCol] < target):
            currRow = currRow+1
    return False


print(search(arr, 100))
