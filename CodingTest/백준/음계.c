#include <stdio.h>

int main(void){
	
	int arr[9];
	int i, asc=0, desc=0, mix=0;
	
	for(i = 1; i < 9; i++){
		scanf("%d", &arr[i]);
		
		if(arr[i] == i)
			asc++;
		else if(arr[i] == 9-i)
			desc++;
		else
			mix++;
	}
	
	if(asc == 8)
		printf("ascending");
	else if(desc == 8)
		printf("descending");
	else
		printf("mixed");
	
	return 0;
}
