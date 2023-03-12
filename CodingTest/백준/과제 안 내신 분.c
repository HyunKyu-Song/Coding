#include <stdio.h>

int main(void){
	
	int arr[31] = {0};
	int i, n;
	
	for(i = 1; i < 29; i++){
		scanf("%d", &n);
		
		arr[n]++;
	}
	
	for(i = 1; i < 31; i++){
		if(arr[i] == 0){
			printf("%d\n", i);
		}
	}
	
	return 0;
}
