#include <stdio.h>

long long a, b, c;

long long go(long long a, long long b)
{
	long long res;
	
	if(b == 1)
		return a % c;
	
	res = go(a, b/2);
	res = (res * res) % c;
	
	if(b % 2 != 0)
		res = (res * a) % c;
	
	return res;
}

int main(void){
	
	scanf("%lld %lld %lld", &a, &b, &c);
	printf("%d", go(a, b));
	
	return 0;
}
