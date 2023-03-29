#include <stdio.h>
#include <stdlib.h>

int static compare (const void* first, const void* second)
{
    if (*(int*)first > *(int*)second)
        return 1;
    else if (*(int*)first < *(int*)second)
        return -1;
    else
        return 0;
}

int Binary_search(int arr[], int n, int key)
{
	int low=0, high=n-1;
	int mid;
	
	while(low <= high){
		mid = (low+high)/2;
		
		if(arr[mid] < key)
			low = mid + 1;
		else if(arr[mid] > key)
			high = mid - 1;
		else{
			return 1;
		}
	}
	return 0;
}

int main(void){
	
	int arr[100010] = {0};
	int n, m, i, a;
	
	scanf("%d", &n);
	
	for(i = 0; i < n; i++)
		scanf("%d", &arr[i]);
	
	qsort(arr, n, sizeof(int), compare);
	
	scanf("%d", &m);
	for(i = 0; i < m; i++){
		scanf("%d", &a);
		printf("%d\n", Binary_search(arr, n, a));
	}
	
	return 0;
}
