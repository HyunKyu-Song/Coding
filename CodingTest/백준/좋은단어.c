#include <stdio.h>
#include <string.h>

typedef struct stack{
	int top;
	char arr[100010];
}Stack;

void init(Stack *s)
{
	s->top = -1;
}

void push(Stack *s, char x)
{
	s->arr[++(s->top)] = x;
}

void pop(Stack *s)
{
	(s->top)--;
}

char peek(Stack *s)
{
	return s->arr[s->top];
}

int main(void){
	
	Stack s;
	int n, i, j;
	int len, res=0, cnt;
	char str[100010];
	
	scanf("%d", &n);
	
	for(i = 0; i < n; i++){
		scanf("%s", str);
		len = strlen(str);
		init(&s);
		cnt=0;
		if(len % 2 == 0){
			for(j = 0; j < len; j++){
				if(peek(&s) == str[j]){
					pop(&s);
					cnt++;
				}
				else{
					push(&s, str[j]);
				}
			}
			
			if(cnt == len/2)
				res++;
		}
	}
	printf("%d", res);
	
	return 0;
}
