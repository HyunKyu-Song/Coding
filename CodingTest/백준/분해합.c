#include <stdio.h>

int main(void){
	
	int i, j, k, n, sum, res, cnt=0;
	int arr[100000]={0};
	
	scanf("%d", &n);
	
	for(i = 1; i <= n; i++){
		sum = i;
		res = i;
		j=0;
		
		
		while(res != 0){
			arr[j] = res % 10;
			res /= 10;
			j++;
		}
		
		for(k = 0; k < j; k++){
			sum = sum + arr[k];
		}
		
		if(sum == n){
			printf("%d", i);
			cnt++;
			break;
		}
	}
	if(cnt == 0)
		printf("0");
	
	return 0;
}
