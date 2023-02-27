#include <stdio.h>

int main(void){
	
	int max=-1, min=1000005 ,i;
	int sum=0;
	int a[3];
	
	for(i = 0; i < 3; i ++){
		scanf("%d", &a[i]);
		
		if(max < a[i]){
			max = a[i];
		}
		if(min > a[i]){
			min = a[i];
		}
		sum += a[i];
	}
	printf("%d %d %d", min, sum-(max+min), max);
	
	return 0;
}
