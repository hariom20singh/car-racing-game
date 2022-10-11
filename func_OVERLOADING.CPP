#include<bits/stdc++.h>
using namespace std;
int sum(int a,int b){
    return a+b;
}
int sum(int a,int b,int c){
    return a+b+c;
}
int main(){
    int a,b,c;
    cin>>a>>b>>c;
    cout<<sum(a,b)<<endl;
    cout<<sum(a,b,c)<<endl;
    return 0;
}