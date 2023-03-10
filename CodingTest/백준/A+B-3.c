#include <stdio.h>

int main(void){
	
	int a, b, i, n;
	
	scanf("%d", &n);
	
	for(i = 0; i < n; i++){
		scanf("%d %d", &a, &b);
		printf("%d\n", a+b);
	}
	
	
	return 0;
}
