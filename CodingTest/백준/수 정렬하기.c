#include <stdio.h>

int main(void){
	
	int n, i, j, least, tmp;
	int arr[1005] = {0};
	
	scanf("%d", &n);
	
	for(i = 0; i < n; i++)
		scanf("%d", &arr[i]);
	
	for(i = 0; i < n; i++){
		least = i;
		for(j = i; j < n; j++){
			if(arr[least] > arr[j])
				least = j;
		}
		tmp = arr[least];
		arr[least] = arr[i];
		arr[i] = tmp;
	}
	
	for(i = 0; i < n; i++)
		printf("%d\n", arr[i]);
	
	return 0;
}
