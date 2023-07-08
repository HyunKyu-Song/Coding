#include <stdio.h>
#define SIZE 5

int main() {
    
    int arr[SIZE] = {3, 1, 4, 5, 2};
    int i, j, least, temp;
    
    for(i = 0; i < SIZE; i++){
        least = i;
        for(j = i; j < SIZE; j++){
            if(arr[least] > arr[j]){
                least = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[least];
        arr[least] = temp;
    }
    
    for(i = 0; i < SIZE; i++){
        printf("%d ", arr[i]);
    }
    
    return 0;
}
