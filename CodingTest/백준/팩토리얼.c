#include <stdio.h>

int fac(int x)
{
	if(x <= 1)
		return 1;
	else
		return x * fac(x-1);
}

int main(void){
	
	int n;
	
	scanf("%d", &n);
	
	printf("%d", fac(n));
	
	return 0;
}
