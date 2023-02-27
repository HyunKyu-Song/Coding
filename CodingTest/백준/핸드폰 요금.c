#include <stdio.h>

int main(void){
	
	int y_mon, m_mon;
	int n, i;
	int y_sum=0, m_sum=0;
	int arr[25] = {0};
	
	scanf("%d", &n);
	
	for(i = 0; i < n; i++){
		scanf("%d", &arr[i]);
	}
	
	for(i = 0; i < n; i++){
		y_mon = arr[i] / 30;
		m_mon = arr[i] / 60;
		y_sum += (y_mon+1) * 10;
		m_sum += (m_mon+1) * 15;
	}
	
	if(y_sum == m_sum)
		printf("Y M %d", y_sum);
	else if(y_sum < m_sum)
		printf("Y %d", y_sum);
	else
		printf("M %d", m_sum);
	
	return 0;
}
