#include <stdio.h>

int main(void){
	
	int n, m, i, j, k;
	int sum=0, cnt=0, max=-1;
	int arr[110];
	
	scanf("%d %d", &n, &m);
	
	for(i = 0; i < n; i++){
		scanf("%d", &arr[i]);
	}
	
	for(i = 0; i < n; i++){
		for(j = i+1; j < n; j++){
			for(k = j+1; k < n; k++){
				sum = arr[i] + arr[j] + arr[k];
				if(sum <= m && sum > max){
					max = sum;
					//printf("\n\narr[%d] + arr[%d] + arr[%d] = max = %d" ,i ,j, k, max);
				}
			}
		}
	}
	//printf("\n\nmax = %d	sum = %d	n = %d	m = %d", max, sum, n, m);
	printf("%d", max);
	
	return 0;
}
