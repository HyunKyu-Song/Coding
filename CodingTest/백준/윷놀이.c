#include <stdio.h>

int main(vodi){
	
	int x, y, n, i, cnt=0;
	char arr[20] = {0};
	
	for(i = 0; i < 12; i++){
		scanf("%d", &n);
		cnt++;
		
		if(n == 0)
			x++;
		
		if(cnt == 4){
			cnt = 0;
			
			if(x == 1)
				printf("A");
				//arr[i] = 'A';
			else if(x == 2)
				printf("B");
				//arr[i] = 'B';
			else if(x == 3)
				printf("C");
				//arr[i] = 'C';
			else if(x == 4)
				printf("D");
				//arr[i] = 'D';
			else if(x == 0)
				printf("E");
				//arr[i] = 'E';
			printf("\n");
			x = 0;
		}
	}
//	for(i = 0; i < 12; i++){
//		if(arr[i] != 0)
//			printf("%c\n",  arr[i]);
//	}
	
	return 0;
}
