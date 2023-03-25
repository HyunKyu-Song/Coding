#include <stdio.h>

int main(void){
	
	int n, i, j, cnt, total=0;
	int arr[105] = {0};
	
	scanf("%d", &n);
	
	for(i = 0; i < n; i++){
		scanf("%d", &arr[i]);
		cnt=0;
		
		for(j = 1; j <= arr[i]; j++){
			if(arr[i] % j == 0)
				cnt++;
		}
		if(cnt == 2)
			total++;
	}
	
	printf("%d", total);
	
	return 0;
}
