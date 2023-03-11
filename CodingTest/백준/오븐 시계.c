#include <stdio.h>

int main(void){
	
	int h, m, time;
	int min=0;
	
	scanf("%d %d", &h, &m);
	scanf("%d", &time);
	
	min = m + time;
	
	h = (min/60) + h;
	m = (min%60);
	
	h%=24;
	
	printf("%d %d", h, m);
	
	return 0;
}
