#include <stdio.h>

int main(void){
	
	int arr[20] = {0};
	int sum=0, h=0, i , j, least, tmp;
	int cnt=0;
	
	for(i = 0; i < 9; i++){
		scanf("%d", &arr[i]);
		sum += arr[i];
	}
	
	h = sum - 100;
	
	for(i = 0; i < 9; i++){
		if(cnt != 0)
			break;
		for(j = i+1; j < 9; j++){
			if(arr[i] + arr[j] == h && arr[i] != h && arr[j] != h){
				arr[i] = 0; arr[j] = 0;
				cnt++;
			}
		}
	}
	
	for(i = 0; i < 9; i++){
		least = i;
		for(j = i+1; j < 9; j++){
			if(arr[least] > arr[j])
				least = j;
		}
		tmp = arr[least];
		arr[least] = arr[i];
		arr[i] = tmp;
	}
	
	for(i = 2; i < 9; i++)
		printf("%d\n", arr[i]);
	
	return 0;
}
