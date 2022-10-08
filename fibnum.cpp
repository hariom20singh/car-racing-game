#include<iostream>
using namespace std;
int fibonacci_fast(int n)
{
  // write your code here
  int F[n + 1];
  F[0] = 0;
  F[1] = 1;
  for (int i = 2; i < n + 2; i++)
  {
    F[i] = F[i - 1] + F[i - 2];
  }

  return F[n];
}

int main(){
  int n;
  cin>>n;
  cout<<fibonacci_fast(n);
}