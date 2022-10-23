#include<stdio.h>
#include<stdbool.h>
int main()
{
	bool a=1;
	int num=3;
	for(int i=1;i<=num;i++)
	{
		a=!a;
	}
	if(a)
	{
		printf("Even");
	}
	else
	{
		printf("odd");
	}
}
