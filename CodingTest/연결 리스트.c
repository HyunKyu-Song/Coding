#include <stdio.h>
#include <stdlib.h>

typedef struct linkedlist{
	int data;
	struct linkedlist * next;
}LinkedList;

void Init(LinkedList* head)
{	
	head->next = NULL;
}

void Insert(LinkedList *head, LinkedList *tail, int val)
{
	LinkedList *newnode;
	
	newnode = (LinkedList*)malloc(sizeof(LinkedList));
	newnode->data = val;
	newnode->next = NULL;
	
	if(head->next == NULL)
		head->next = newnode;
	else
		tail->next->next = newnode;
	
	tail->next = newnode;
}

void Delete(LinkedList *head, LinkedList *tail, int val)
{
	int r_data = val;
	LinkedList *prev, *del;
	
	del = head->next;
	prev = NULL;
	
	while(del->data != r_data){
		prev = del;
		del = del->next;
	}
	
	if(prev == NULL)
		head->next = head->next->next;
	else{
		prev->next = del->next;
		if(del->next == NULL)
			tail->next = prev;
	}
	free(del);
}

void Print(LinkedList *head)
{
	LinkedList *copy = (LinkedList*)malloc(sizeof(copy));
	
	copy->next = head->next;
	
	printf("\n\nData: "); 
	while(copy->next != NULL){
		printf("%d ", copy->next->data);
		copy->next = copy->next->next;
	}
	printf("\n\n");
}

int main(void){
	
	LinkedList head, tail;
	int n, data;
	
	Init(&head);
	
	while(1){
		printf("[1] Insert\n");
		printf("[2] Delete\n");
		printf("[3] Print\n");
		printf("[4] Exit\n\n");
		
		scanf("%d", &n);
		
		switch(n){
			case 1:
				printf("\n추가할 Data: ");
				scanf("%d", &data);
				Insert(&head, &tail, data);
				Print(&head);
				break;
			case 2:
				printf("\n\n삭제할 Data: ");
				scanf("%d", &data);
				Delete(&head, &tail, data);
				printf("\n");
				Print(&head);
				break;
			case 3:
				Print(&head);
				break;
			case 4:
				printf("\n\n프로그램이 종료되었습니다.\n\n");
				exit(-1);
				break;
			default:
				printf("\n\n잘못 입력하셨습니다.\n\n");
		}
	}
	
	return 0;
}
