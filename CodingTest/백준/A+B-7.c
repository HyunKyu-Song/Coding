#include <stdio.h>

int main(void){
	
	int x, y, i, n;
	
	scanf("%d", &n);
	
	for(i = 0; i < n; i++){
		scanf("%d %d", &x, &y);
		printf("Case #%d: %d\n", i+1, x+y);
	}
	
	return 0;
}
