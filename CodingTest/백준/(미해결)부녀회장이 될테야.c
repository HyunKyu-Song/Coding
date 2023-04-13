#include <stdio.h>

int sum=0;

int func(int k, int n)
{
	int i, j;
	
	if(k == 0){
		for(i = 1; i <= n; i++){
			for(j = 1; j <= i; j++)
				sum += j;
		}
		return sum;
	}
	else{
		return func(k-1, n);
	}
}


int main(void){
	
	int k, n;
	
	scanf("%d %d", &k, &n);
	
	printf("%d", func(k, n));
	
	return 0;
}
