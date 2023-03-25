#include <stdio.h>

int main(void){
	
	int x, y, i, j;
	int total=0, cnt=0, sum=0, first=-1;
	
	scanf("%d %d", &x, &y);
	
	for(i = x; i <= y; i++){
		cnt=0;
		for(j = 1; j <= i; j++){
			if(cnt > 2){
				cnt = 0;
				break;
			}
			if(i % j == 0)
				cnt++;
		}
		if(cnt == 2){
			if(first == -1)
				first = i;
			sum += i;
			total++;
		}
	}
	
	if(total == 0 && first == -1)
		printf("-1");
	else
		printf("%d\n%d", sum, first);
	
	return 0;
}
