import PromptSync from "prompt-sync";
const prompt = PromptSync();

var size = prompt("Enter the size of array:");
var arr = [];
var unique = [];

//taking inpuy
for (var i = 0; i < size; i++) {
  arr[i] = prompt("Enter " + (i + 1) + " Element: ");
}
var c,
  m = 0;

//finding no of unique elements
for (var i = 0; i < size; i++) {
  c = 0;
  for (var j = i + 1; j < size; j++) {
    if (arr[i] == arr[j]) {
      c++;
    }
  }
  if (c == 0) {
    //inserting the unique string we found in another array
    unique[m] = arr[i];
    m++;
  }
}

console.log("he no of unique elements are "+m);
//finding out the count of each unique element $
var count = [];
for (var i = 0; i < m; i++) {
  count[i] = 0;
  for (var j = 0; j < size; j++) {
    if (unique[i] == arr[j]) {
      count[i]++;
    }
  }
}

var temp1, temp2;
//bubble sort
for (var i = 0; i < m; i++) {
  for (var j = 0; j < m; j++) {
    if (count[j] < count[j + 1]) {
      //swapping in both count of unique string and unique string itself in ascending order   
      temp1 = count[j + 1];
      count[j + 1] = count[j];
      count[j] = temp1;

      temp2 = unique[j + 1];
      unique[j + 1] = unique[j];
      unique[j] = temp2;
    }
  }
}

console.log("\n The unique strings and the no of time they have been repeated are as follows");

for (var i = 0; i < m; i++) {
  console.log(count[i] + " ");
}
process.stdout.write("\n");

for (var i = 0; i < m; i++) {
  console.log(unique[i] + " ");
}
