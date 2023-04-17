#include <stdio.h>

int main(void){
	
	double a, b, c, x, y, z;
	
	while(1){
		scanf("%lf %lf %lf", &a, &b, &c);
		
		if(a == 0 && b == 0 && c == 0) break;
		
		x = a*a;
		y = b*b;
		z = c*c; 
		
		if(x+y==z || x+z==y || y+z==x)
			printf("right\n");
		else
			printf("wrong\n");
	}
	
	return 0;
}
