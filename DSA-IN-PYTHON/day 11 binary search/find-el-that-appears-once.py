
# -- Intuition
# // choice 1
# -- if array is sorted and every element occurs twice then, it's obvious that for every EVEN i : arr[i] == arr[i+1] .
# -- it means unique value is after index "i+2"

# // choice 2
# -- but when a unique value is introduced, then the above pattern holds true only for array behind the unique value.
# -- after unique value for every ODD i : arr[i] == arr[i+1]
# -- it means unique value is before index "i"


def singleNonDuplicate(arr):
    start = 0
    end = len(arr)-1

    while (start < end):
        mid = start + (end-start)//2

        # handle when mid is odd
        if (mid % 2 != 0):
            if (arr[mid] != arr[mid+1]):
                start = mid+1
            else:
                end = mid-1

        # handle when mid is even
        else:
            if (arr[mid] == arr[mid+1]):
                start = mid+2
            else:
                end = mid-1
    return arr[start]


print(singleNonDuplicate([5, 1, 1, 2, 2, 4, 4]))
# print(3 % 2)
