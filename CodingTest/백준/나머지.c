#include <stdio.h>
#define SIZE 10

int main(void){
	
	int arr[1004] = {0};
	int i ,x, res, cnt=0;
	
	for(i = 0; i < SIZE; i++){
		scanf("%d", &x);
		
		res = x % 42;		
		arr[res]++;
	}
	
	for(i = 0; i < 1004; i++){
		if(arr[i] != 0)
			cnt++;
	}
	printf("%d", cnt);
		
	return 0;
}
