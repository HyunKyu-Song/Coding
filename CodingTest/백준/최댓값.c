#include <stdio.h>

int main(void){
	
	int i, j, x, idx, max=-1;
	
	for(i = 0; i < 9; i++){
		scanf("%d", &x);
		
		if(max < x){
			max = x;
			idx = i;
		}
	}
	printf("%d\n%d", max, idx+1);
	
	return 0;
}
