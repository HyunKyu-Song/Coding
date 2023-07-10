#include <stdio.h>
#define SIZE 10

int binary_search(int arr[], int x, int n)
{
	int low, mid, high;
	low = 0;
	high = n-1;
	
	while(low <= high){
		mid = (low+high) / 2;
		printf("[ %d %d ]\n", low, high);
		
		if(arr[mid] < x)
			low = mid+1;
		else if(arr[mid] > x)
			high = mid-1;
		else
			return mid;
	}
	return -1;
}

int main(void){
	
	int arr[SIZE] = {12, 29, 31, 44, 56, 60, 79, 83, 99, 136};
	int x, idx;
	
	scanf("%d", &x);
	
	idx = binary_search(arr, x, SIZE);
	
	if(idx != -1) 
		printf("\n%d는 [%d]위치에 존재", x, idx);
	else
		printf("\n%d는 존재하지 않습니다.", x);
	
	return 0;
}
