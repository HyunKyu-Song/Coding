#include <stdio.h>

int main(void){
	
	int arr[100000]={0};
	int a, n, i, j, k, res, cnt=0, s=0;
	
	scanf("%d", &n);
	
	for(i = 666; i < 10000; i++){
		if(cnt == n){
			printf("%d", res);
			break;
		}
			
		a=i;
		j=0;
		s=0;
		
		while(a != 0){
			arr[j++] = a % 10;
			a /= 10;
		}
		
		for(k = 0; k < j; k++){
			if(s == 3){
				cnt++;
				res = i;
				break;
			}
			
			if(arr[k] == 6)
				s++;
			else
				s=0;
		}
	}
	
	return 0;
}
