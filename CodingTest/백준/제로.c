#include <stdio.h>
#define SIZE 100005

typedef struct stack{
	int top;
	int arr[SIZE];
}Stack;

void push(Stack *s, int val)
{
	s->arr[++(s->top)] = val;
}

void pop(Stack *s)
{
	s->top--;
}

void Sum(Stack *s)
{
	int i, sum=0;
	
	for(i = 0; i <= s->top; i++){
		sum += s->arr[i];
	}
	printf("%d", sum);
}

int main(void){
	
	Stack s;
	int k, data, i;
	
	scanf("%d", &k);
	
	for(i = 0; i < k; i++){
		scanf("%d", &data);
		
		if(data == 0)
			pop(&s);
		else
			push(&s, data);
	}
	Sum(&s);
	
	return 0;
}
