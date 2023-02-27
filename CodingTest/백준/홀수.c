#include <stdio.h>

int main(void) {

	int sum = 0, x, i;
	int least = 110;

	for (i = 0; i < 7; i++) {
		scanf("%d", &x);

		if (x % 2 != 0) {
			sum += x;
			if (least >= x)
				least = x;
		}
	}
	if(sum == 0)
		printf("-1");
	else
		printf("%d\n%d", sum, least);

	return 0;
}
