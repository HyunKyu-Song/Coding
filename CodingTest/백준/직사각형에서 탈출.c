#include <stdio.h>

int main(void){
	
	int x, y, w, h, tmp, a, b;
	
	scanf("%d %d %d %d", &x, &y, &w, &h);
	
	a = w-x;
	b = h-y;
	
	if(x > y){
		tmp = x;
		x = y;
		y = tmp;
	}
	if(x > a){
		tmp = x;
		x = a;
		a = tmp;
	}
	if(x > b){
		tmp = x;
		x = b;
		b = tmp;
	}
	if(y > a){
		tmp = y;
		y = a;
		a = tmp;
	}
	if(y > b){
		tmp = y;
		y = b;
		b = tmp;
	}
	if(a > b){
		tmp = a;
		a = b;
		b = tmp;
	}
	
	printf("%d", x);
	
	return 0;
}
