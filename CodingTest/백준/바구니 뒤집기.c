#include <stdio.h>

int main(void){
	
	int i, j, n, m, a, b, cnt=0;
	int arr[105] = {0};
	int brr[105] = {0};
	
	scanf("%d %d", &n, &m);
	
	for(i = 1; i <= n; i++){
		arr[i] = i;
	}
	
	for(i = 0; i < m; i++){
		scanf("%d %d", &a, &b);
		for(j = a; j <= b; j++){
			brr[j] = arr[j];
		}
		cnt = b;
		for(j = a; j <= b; j++){
			arr[j] = brr[cnt--];
		}
	}
	
	for(i = 1; i <= n; i++){
		printf("%d ", arr[i]);
	}
	
	return 0;
}
