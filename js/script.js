// # Bài 01
// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí
console.log(`bài 1`);
var arr = [1, 3, 5, 4, -2, 0, 2];
var min = arr[0],
    max = arr[0],
    indexMax = 0,
    indexMin = 0;
for (var i in arr) {
    if (arr[i] > max) {
        max = arr[i];
        indexMax = i;
    }
    if (arr[i] < min) {
        min = arr[i];
        indexMin = i;
    }
}

console.log(`Số lớn nhất là ${max} ở vị trí ${indexMax}`);
console.log(`Số nhỏ nhất là ${min} ở vị trí ${indexMin}`);



// # Bài 02
// Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. 
// Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”
console.log("");
console.log(`bài 2`);
var arr = [1, 4, 6, 3, 5, 2];
function isPrime(n){
    if (n <= 1 || n % 1 !== 0) {
        return false;
    } 
     else {
        for (var i = 2; i < n; i++){
            if (n % i === 0) {
                return false;
            } 
        }
        return true;
    }
}

var sum = 0,
count = 0;

for (var i in arr){
    if (isPrime(arr[i])){
        count++;
        sum += arr[i];
        
    }
}

if ( count === 0){
    console.log(`Không có số nguyên tố trong dãy số`);
} else {
    console.log(`Trung bình cộng của các số nguyên tố trong dãy là ${sum / count} `);
}


// # Bài 03
// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng
// nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý
console.log("");
console.log(`bài 3`);

var arr = [1, 2, 13, "nam", 4, 2, 3, 5, 6, 1, 7, "nam", "nam"];
var filterArray = Array.from(new Set(arr));
console.log(filterArray);


// # Bài 04
// Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
// Sắp xếp mảng theo thứ tự tăng dần
// Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng
console.log("");
console.log(`bài 4`);

var arr = [5, 2, 9, 1, 3, 4];
var addNumber = 4;
arr.push(addNumber);
arr.sort(function(a, b) {
  return a - b;
});
console.log(arr);




