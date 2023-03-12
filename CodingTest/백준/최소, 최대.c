#include <stdio.h>

int main(void){
	
	int max=-1000001, min=1000001, n, i, j, x;
	
	scanf("%d", &n);
	
	for(i = 0; i < n; i++){
		scanf("%d", &x);
		
		if(x > max)
			max = x;
			
		if(x < min)
			min = x;
	}
	
	printf("%d %d", min, max);
	
	return 0;
}
