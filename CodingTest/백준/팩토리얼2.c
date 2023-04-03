#include <stdio.h>

long long int fac(long long int x)
{
	if(x <= 1)
		return 1;
	else
		return x * fac(x-1);
}

int main(void){
	
	long long int n;
	
	scanf("%lld", &n);
	
	printf("%lld", fac(n));
	
	return 0;
}
