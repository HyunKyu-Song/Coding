#include <stdio.h>

int main(void){
	
	int n, k, i, cnt=0;
	int arr[10]={0};
	
	scanf("%d %d", &n, &k);
	
	for(i = 0; i < n; i++){
		scanf("%d", &arr[i]);
	}
	
	for(i = n-1; i >= 0; i--){
		while(k - arr[i] >= 0){
			k -= arr[i];
			cnt++;
		}
	}
	printf("%d", cnt);
	
	return 0;
}
