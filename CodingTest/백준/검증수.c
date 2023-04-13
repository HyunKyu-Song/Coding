#include <stdio.h>

int main(void){
	
	int arr[5] = {0};
	int i, sum=0;
	
	for(i = 0; i < 5; i++){
		scanf("%d", &arr[i]);
		
		sum = sum + arr[i]*arr[i];
	}
	printf("%d", sum % 10);
	
	return 0;
}
