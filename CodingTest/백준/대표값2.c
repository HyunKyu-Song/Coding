#include <stdio.h>

int main(void){
	
	int sum=0;
	int x, i, j, least, tmp;
	int arr[5] = {0};
	
	for(i = 0; i < 5; i++){
		scanf("%d", &arr[i]);
		sum += arr[i];
	}
	
	for(i = 0; i < 5; i++){
		least = i;
		
		for(j = i+1; j < 5; j++){
			if(arr[least] > arr[j])
				least = j;
		}
		tmp = arr[least];
		arr[least] = arr[i];
		arr[i] = tmp;
	}
	printf("%d\n%d", sum/5, arr[2]);
	
	return 0;
}
