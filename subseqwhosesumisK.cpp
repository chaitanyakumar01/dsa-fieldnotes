#include <iostream>
#include <vector>

using namespace std;

// Yeh function har index par decide karta hai ki current element ko include karna hai ya nahi.
// Agar index == n ho jata hai, matlab array ke sab elements process ho gaye hain.
void findSubsequencesWithSumK(vector<int>& arr, int n, int targetK, int currentSum, int index,
                             vector<int>& currentList, vector<vector<int>>& ans) {

    if (index == n) { // base case: array khatam ho gaya
        if (currentSum == targetK) { // agar current sum target sum ke barabar hai
            ans.push_back(currentList); // current subsequence ko answer me add kar do
        }
        return; // previous recursive call par wapis jao
    }

    // Left branch: current element ko include karte hain
    currentList.push_back(arr[index]); // current element ko currentList me add karo
    findSubsequencesWithSumK(arr, n, targetK, currentSum + arr[index], index + 1, currentList, ans);

    // Backtracking: element ko remove karke right branch explore karte hain
    currentList.pop_back();

    // Right branch: current element ko ignore karte hain
    findSubsequencesWithSumK(arr, n, targetK, currentSum, index + 1, currentList, ans);
}

// main function
int main() {
    vector<int> arr = {1, 2, 1};
    int n = arr.size();
    int targetK = 2;
    vector<int> currentList;
    vector<vector<int>> ans;

    // initial call: array, size, target sum, current sum, starting index, current list, answer
    findSubsequencesWithSumK(arr, n, targetK, 0, 0, currentList, ans);

    // answer print karo
    for (const auto& subseq : ans) {
        for (int num : subseq) {
            cout << num << " ";
        }
        cout << endl;
    }

    return 0;
}