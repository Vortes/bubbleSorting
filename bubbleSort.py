def bubbleSort(arry):
    n = len(arry)
    for i in range(n):
        for j in range(0, n-i-1):
            if arry[j] > arry[j+1]:
                arry[j], arry[j+1] = arry[j+1], arry[j]
    return arry


arry = [64, 34, 25, 12, 22, 22, 11, 90]
print(bubbleSort(arry))