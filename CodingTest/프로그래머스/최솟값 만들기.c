#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// A_len은 배열 A의 길이입니다.
// B_len은 배열 B의 길이입니다.
int solution(int A[], size_t A_len, int B[], size_t B_len) {
    int answer = 0;
    int i, j, least, temp;
    
    for(i = 0; i < A_len; i++){
        least = i;
        for(j = i; j < A_len; j++){
            if(A[j] < A[least])
                least = j;
        }
        temp = A[least];
        A[least] = A[i];
        A[i] = temp;
    }
    for(i = 0; i < B_len; i++){
        least = i;
        for(j = i; j < B_len; j++){
            if(B[j] > B[least])
                least = j;
        }
        temp = B[least];
        B[least] = B[i];
        B[i] = temp;
    }
    
    for(i = 0; i < A_len; i++){
        answer += A[i] * B[i];
    }
    
    return answer;
}
