#include <stdio.h>

int main(void){
	
	unsigned long x, y;
	unsigned long i, tmp;
	
	
	scanf("%lu%lu", &x, &y);
	
	if(x > y){
		tmp = x;
		x = y;
		y = tmp;
	}
		
	if(x == y){
		printf("0\n");
	}
	else{
		printf("%lu\n", y-x-1);
		
		for(i = x+1; i < y; i++){
			printf("%lu ", i);
		}
	}
	
	return 0;
}
