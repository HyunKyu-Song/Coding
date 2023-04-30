#include <stdio.h>

int main(void){
	
	int t, h, w, n, i;
	int room, floor;
	
	scanf("%d", &t);
	
	for(i = 0; i < t; i++){
		scanf("%d %d %d", &h, &w, &n);
		
		if(n % h != 0){
			room = (n / h) + 1;
			floor = 100 * (n % h);
		}
		else{
			room = n / h;
			floor = 100 * h;
		}
		printf("%d\n", room+floor);
	}
	
	return 0;
} 
