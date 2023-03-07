#include <stdio.h>
#include <stdlib.h>

int main(void){
	
	int h, m;
	
	scanf("%d%d", &h, &m);
	
	if(m-45 >= 0){
		printf("%d %d", h, m-45);
	}
	else{
		h -= 1;
		
		if(h < 0)
			h = 23;
		
		m = 60 - abs(m - 45);
		printf("%d %d", h, m);
	}
	
	return 0;
}
