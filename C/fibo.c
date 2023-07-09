#include <stdio.h>

int fibo(int x){
	if(x <= 1)
		return 1;
	else
		return fibo(x-1) + fibo(x-2);
}

int main(void){
	
	int n;
	
	scanf("%d", &n);
	
	printf("%d", fibo(n));
}
