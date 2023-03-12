#include <stdio.h>

int main(void){
	
	int arr[110] = {0};
	int n, m, i, a, b, tmp;
	
	scanf("%d %d", &n, &m);
	
	for(i = 1; i <= 100; i++)
		arr[i] = i;
	
	for(i = 0; i < m; i++){
		scanf("%d %d", &a, &b);
		
		tmp = arr[a];
		arr[a] = arr[b];
		arr[b] = tmp;
	}
	
	for(i = 1; i <= n; i++)
		printf("%d ", arr[i]);
		
	return 0;
}
