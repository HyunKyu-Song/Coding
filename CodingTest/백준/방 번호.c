#include <stdio.h>

int main(void){
	
	int n, i=0, max=0;
	int arr[10] = {0};
	
	scanf("%d", &n);
	
	if(n == 0){
		printf("1");
	}
	else{
		while(n > 0){
			arr[n % 10]++;
			
			if(max < arr[n%10]){
				max = arr[n%10];
			}
			
			n /= 10;
		}
		
		if(arr[6] == max || arr[9] == max){
			max = (arr[6] + arr[9] + 1) / 2;
		}
		
		printf("%d", max);
	}
	
	return 0;
}
