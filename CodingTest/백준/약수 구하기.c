#include <stdio.h>

int main(void){
	
	int n, k, i ,j=0;
	int arr[10005] = {0};
	
	scanf("%d %d", &n, &k);
	
	for(i = 1; i <= n; i++){
		if(n % i == 0){
			arr[j] = i;
			j++;
		}
	}
	printf("%d\n\n", arr[k-1]);
	
	return 0;
}
