#include <stdio.h>

int main(void){
	
	int arr[21] = {0};
	int t[21] = {0};
	int i, j, k, tmp, a, b, c;
	
	for(i = 1; i <= 20; i++)
		arr[i] = i;
		
	for(i = 0; i < 1; i ++){
		scanf("%d %d", &a, &b);
		
		if(a > b){
			tmp = a;
			a = b;
			b = tmp;
		}
		k = a;
		for(j = b; j >= a; j--){
			t[k] =arr[j];
			k++;
		}
		for(j = a; j <= b; j++){
			k--;
			arr[j] = t[k];
		}
	}
	for(i = 1; i <= 20; i++)
		printf("%d ", arr[i]);
	
	return 0;
}
