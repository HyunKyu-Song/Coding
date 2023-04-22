#include <stdio.h>

int main(void){
	
	int arr[1000]={0};
	int freq=0, sum=0;
	int i, x;
	
	for(i = 0; i < 10; i++){
		scanf("%d", &x);
		arr[x]++;
		
		sum += x;
	}
	
	for(i = 10; i < 1000; i++){
		if(freq < arr[i]){
			freq = arr[i];
			x = i;
			printf("[%d] = %d\n", i, arr[i]);
		}
	}
	
	printf("%d\n%d", sum/10, x);
	
	return 0;
}
