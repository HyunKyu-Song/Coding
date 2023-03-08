#include <stdio.h>

int main(void){
	
	int n, target, i, cnt=0;
	int arr[110] = {0};
	
	scanf("%d", &n);
	
	for(i = 0; i < n; i++){
		scanf("%d", &arr[i]);
	}
	scanf("%d", &target);
	
	for(i = 0; i < n; i++){
		if(target == arr[i]){
			cnt++;
		}
	}
	
	printf("%d", cnt);
	
	return 0;
}
