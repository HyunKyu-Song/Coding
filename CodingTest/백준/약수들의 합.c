#include <stdio.h>

int main(void){
	
	int n, k, i ,j, sum;
	int arr[100000] = {0};
	
	while(1){
		scanf("%d", &n);
		sum=0;
		j=0;
		
		if(n == -1)
			break;
		else{
			for(i = 1; i < n; i++){
				if(n % i == 0){
					arr[j++] = i;
					sum += i;
				}
			}
			if(sum == n){
				printf("%d = ", n);
				
				for(i = 0; i < j; i++){
					printf("%d ", arr[i]);
					
					if(i == j-1){
						printf("\n");
						break;
					}
					printf("+ ");
				}
			}
			else
				printf("%d is NOT perfect.\n", n);
		}
	}
	
	return 0;
}
