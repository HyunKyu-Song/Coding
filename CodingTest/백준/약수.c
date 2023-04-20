#include <stdio.h>

int main(void){
	
	int n, i , j, res, cnt=0;
	int arr[55]={0};
	int least, temp;
	
	scanf("%d", &n);
	
	for(i = 0; i < n; i++){
		scanf("%d", &arr[i]);
	}
	
	for(i = 0; i < n; i++){
		least = i;
		for(j = i; j < n; j++){
			if(arr[least] >arr[j])
				least = j;
		}
		temp = arr[least];
		arr[least] = arr[i];
		arr[i] = temp;
	}
	
	if(n % 2 == 0)
		printf("%d", arr[0]*arr[n-1]);
	else
		printf("%d", arr[n/2]*arr[n/2]);
	
	return 0;
}
