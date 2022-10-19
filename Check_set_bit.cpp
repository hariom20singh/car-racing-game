// We have to check that all bits in a given number are set or not
#include <iostream>
using namespace std;
bool check_set_bit(int n)
{
    // If a number is the form of 2^n-1 then it will have all bits set
    // we just need to check that pattern
    if (n == 0)
        return 0;
    if (((n) & (n + 1)) == 0) // If n is in the form of 2^n-1 then n+1 will be 2^n
        return 1;
    return 0;
}
int main()
{
    int number;
    cin >> number;
    cout << check_set_bit(number) << endl;

    return 0;
}