#include <stdio.h>

int main(void){
	
	int arr[1005] = {0};
	int i, j, tmp, max, n, x;
	
	scanf("%d %d", &n, &x);
	
	for(i = 1; i <= n; i++)
		scanf("%d", &arr[i]);
	
	for(i = 1; i <= n; i++){
		max = i;
		for(j = i; j <= n; j++){
			if(arr[max] < arr[j])
				max = j;
		}
		tmp = arr[max];
		arr[max] = arr[i];
		arr[i] = tmp;
	}
	
	printf("%d", arr[x]);
	
	return 0;
}
