// CALCULATOR PROGRAM

// Tạo biến JS, ở đây là const display -> trỏ trực tiếp tới hmtl
// Dùng const vì đây là hằng số, display đây là tên mình đặt (có thể xài screen,vv), getElementById() thì mới cần ghi đúng id="display" đã đặt trong html vào ().
const display = document.getElementById("display");

// Giờ có 3 function cần display: appendToDisplay, calculate và clearDisplay

// gọi hàm appendToDisplay() - input ở đây là được phép tự đặt (gọi là tham số)
function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value = " "
}

function calculate(){
    // try dùng để chạy thử đoạn code có khả năng bị lỗi
    try{
        // display là một element tự đặt được do đã gọi 'const display=' ở trên, value là một property (thuộc tính) do trình duyệt ĐOM định nghĩa sẵn.
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Lỗi mẹ rồi! Lại";
    }

}