#include <stdio.h>

int static compare (const void* first, const void* second)
{
    if (*(int*)first > *(int*)second)
        return 1;
    else if (*(int*)first < *(int*)second)
        return -1;
    else
        return 0;
}

int main(void){
	
	int n, m, i, j, k=0;
	int s, e;
	int arr[100005]={0};
	int brr[100005]={0};
	
	scanf("%d %d", &n, &m);
	
	for(i = 0; i < n; i++){
		scanf("%d", &arr[i]);
	}
	
	for(i = 0; i < m; i++){
		scanf("%d %d", &s, &e);
		k=0;
		for(j = s-1; j < e; j++){
			brr[k] = arr[j];
			k++;
		}		
		qsort(brr, k, sizeof(int), compare);

		printf("%d %d\n", brr[0], brr[k-1]);
	}
	
	return 0;
}
