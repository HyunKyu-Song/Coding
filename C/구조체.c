#include <stdio.h>

typedef struct std{
	char name[10];
	int num;
	float grade;
}STD;

int main(void){
	
	STD s;
	
	printf("이름: ");
	gets(s.name);
	
	printf("학번: ");
	scanf("%d", &s.num);
	
	printf("학점: ");
	scanf("%f", &s.grade);
	
	printf("\n\n     결과\n");
	printf("------------------------\n");
	printf(" 이름: %s", s.name);
	printf("\n 학번: %d", s.num);
	printf("\n 학점: %.1f", s.grade);
	printf("\n------------------------");
		
	return 0;
}
