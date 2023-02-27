#include <stdio.h>

int main(void){
	
	int arr[7] = {0};
	int i, n, res=0, max=-1;
	
	for(i = 0; i < 3; i++){
		scanf("%d", &n);
		
		if(max <= n)
			max = n;
			
		arr[n]++;
	}
	
	for(i = 1; i < 7; i++){
		
		if(arr[i] == 3){
			res += res + 10000 + (i*1000);
			break;
		}
		else if(arr[i] == 2){
			res += res + 1000 + (i*100);
			break;
		}
		else if(arr[i] == 1 && i == max){
			res += res + (max*100);
			break;
		}
	}
	
	printf("%d", res);
	
	return 0;
}
