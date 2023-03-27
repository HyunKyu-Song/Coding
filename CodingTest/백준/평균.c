#include <stdio.h>

int main(void){
	
	int n, i, max=-1;
	double arr[1004] = {0.0};
	double res = 0.0, sum=0.0;
	
	scanf("%d", &n);
	
	for(i = 0; i < n; i++){
		scanf("%lf", &arr[i]);
		
		if(max < arr[i]){
			max = arr[i];
		}
	}
	
	for(i = 0; i < n; i++){
		sum += (arr[i] / max) * 100;
	}
	
	printf("%lf", sum/n);
	
	return 0;
}
