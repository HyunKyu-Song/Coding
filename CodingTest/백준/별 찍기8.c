#include <stdio.h>

int main(void){
	
	int i, j, n;
	
	scanf("%d", &n);
	
	for(i = n; i > 0; i--){
		for(j = n; j >= i; j--)
			printf("*");
		for(j = 0; j < 2*i-2; j++)
			printf(" ");
		for(j = n; j >= i; j--)
			printf("*");
		printf("\n");
	}
	for(i = 2; i <= n+1; i++){
		for(j = i; j <= n; j++)
			printf("*");
		for(j = 0; j < 2*i-2; j++)
			printf(" ");
		for(j = i; j <= n; j++)
			printf("*");
		printf("\n");
	}	
	
	return 0;
}
