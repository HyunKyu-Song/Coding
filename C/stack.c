#include <stdio.h>
#include <stdlib.h>
#define SIZE 5

int stack[SIZE];
int top = -1;

int Empty()
{
	if(top == -1)
		return 1;
	else
		return 0;
}

int Full()
{
	if(top >= SIZE-1)
		return 1;
	else
		return 0;
}

void Push(int stack[], int x)
{
	if(Full())
		printf("\n\nFull~\n\n");
	else
		stack[++top] = x;
}

void Pop(int stack[]){
	if(Empty())
		printf("\n\nEmpty~\n\n");
	else
		top--;
}

int Peek(int stack[])
{
	if(Empty())
		printf("\n\nEmpty~\n\n");
	else
		return stack[top];
}

void Print(int stack[])
{
	int i;
	
	printf("\n\ntop = %d\nData: ", top);
		for(i = 0; i <= top; i++){
			printf("%d ", stack[i]);
		}
		printf("\n\n");
}

int main(void){
	
	int n, data;
	
	while(1){
		printf("\n------------------------------\n");
		printf("[1] push\n");
		printf("[2] pop\n");
		printf("[3] peek\n");
		printf("[4] print\n");
		printf("[5] exit");
		printf("\n------------------------------\n");
		
		scanf("%d", &n);
		
		switch(n){
			case 1:
				printf("\n\npush할 값: ");
				scanf("%d", &data);
				Push(stack, data);
				Print(stack);
				break;
			case 2:
				printf("\n\npop 완료!");
				Pop(stack);
				Print(stack);
				break;
			case 3:
				printf("\n\npeek: ");
				printf("%d", Peek(stack));
				Print(stack);
				break;
			case 4:
				Print(stack);
				break;
			case 5:
				exit(0);
		}
	}

	return 0;
}
