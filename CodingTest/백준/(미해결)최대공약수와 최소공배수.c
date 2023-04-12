#include <stdio.h>

int main(void){
	
	int a, b, temp, i;
	int x=1;
	
	scanf("%d %d", &a, &b);
	
	if(a > b){
		temp = a;
		a = b;
		b = temp;
	}
	
	for(i = 1; i <= a; i++){
		if(a % i == 0 && b % i == 0){
			x *= i;
			a /= i;
			b /= i;
		}
	}
	
	printf("%d\n%d", x, x*a*b);
	
	
	return 0;
}
