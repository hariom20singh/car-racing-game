#include <iostream>
using namespace std;

void Selectionsort(int arr[], int n){
    cout<< "Running selection sort "<<endl;
    int IndexOfMin , temp ;
    for (int i = 0; i < n-1; i++)
    {
        IndexOfMin=i;
        for (int j = i+1; j < n; j++)
        {
            if (arr[j]<arr[IndexOfMin])
            {
                IndexOfMin = j;
            }
            
        }
        // swap the element
        temp = arr[i];
        arr[i]= arr[IndexOfMin];
        arr[IndexOfMin]=temp;

    }
    
}

int main()
{

    int n;
    cout << "Enter the no of array you want:- ";
    cin >> n;

    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cout << "Enter the element of  array :- ";
        cin >> arr[i];
    }
    for (int i = 0; i < n; i++)
    {
        cout << "your array is :- " << arr[i]<<endl; // printing the array before sorting
    }

    Selectionsort(arr,n);

    for (int i = 0; i < n; i++)
    {
        cout << "your selection sort array is :- " << arr[i]<< endl; // printing the array before sorting
    }

    return 0;
}