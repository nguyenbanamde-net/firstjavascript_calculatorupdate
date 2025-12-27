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
        var pe=display.value
        // Gọi hàm string.replace(pattern, replace) ở đây là tìm mọi số 'm' có dâu '%' ---> (m/100).
        pe=pe.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
        // display là một element tự đặt được do đã gọi 'const display=' ở trên, value là một property (thuộc tính) do trình duyệt DOM định nghĩa sẵn.
        display.value = eval(pe);
    }
    catch(error){
        display.value = "Lỗi mẹ rồi! Lại";
    }


}
