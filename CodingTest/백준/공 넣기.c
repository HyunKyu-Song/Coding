#include <stdio.h>

int main(void){
	
	int arr[110] = {0};
	int n, m, i, j, a, b, c;
	
	scanf("%d %d", &n, &m);
	
	for(i = 0; i < m; i++){
		scanf("%d %d %d", &a, &b, &c);
		
		for(j = a; j <= b; j++){
			arr[j] = c;
		}
	}
	
	for(i = 1; i <= n; i++)
		printf("%d ", arr[i]);
		
	return 0;
}
