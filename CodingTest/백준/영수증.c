#include <stdio.h>

int main(void){
	
	int total, n, i;
	int price, amount, sum=0;
	
	scanf("%d%d", &total, &n);
	
	for(i = 0; i < n; i++){
		scanf("%d%d", &price, &amount);
		
		sum += price*amount;
	}
	
	if(sum == total)
		printf("Yes");
	else
		printf("No");
	
	return 0;
}
