#include <stdio.h>
#define SIZE 100009
int main(void){
	
	int n, data, x, i, cnt=0;
	int arr[SIZE] = {0};
	
	scanf("%d", &n);
	
	for(i = 0; i < n; i++){
		scanf("%d", &data);
		
		if(data <= 100000)
			arr[data]++;
	}
	scanf("%d", &x);
	
	if(x <= 100000){
		for(i = 0; i < SIZE; i++){
			if(arr[i] == 1){
				if(arr[x-i] != 0)
					cnt++;
			}
		}
	}
	
	printf("%d", cnt/2);
	
	return 0;
}
