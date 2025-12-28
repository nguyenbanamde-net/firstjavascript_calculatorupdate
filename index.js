// CALCULATOR PROGRAM

// Tạo biến JS, ở đây là const display -> trỏ trực tiếp tới hmtl
// Dùng const vì đây là hằng số, display đây là tên mình đặt (có thể xài screen,vv), getElementById() thì mới cần ghi đúng id="display" đã đặt trong html vào ().
const display = document.getElementById("display");

// Giờ có 3 function cần display: appendToDisplay, calculate và clearDisplay (3 function đều tự đặt tên được)

// gọi hàm appendToDisplay() - input ở đây là được phép tự đặt (gọi là tham số)
function appendToDisplay(input){
    let start = display.selectionStart;
    let end = display.selectionEnd;
    let text = display.value;

    display.value = text.slice(0,start) + input + text.slice(end);

    let newPos = start + input.length;
    display.setSelectionRange(newPos, newPos);

}

// Khai báo hàm có tên là left (ko nhận tham số)
function left(){
    // pos là tên biến tự đặt. selectionStart là thuộc tính do trình duyệt cung cấp sẵn.
    let pos = display.selectionStart;
    // Kiểm tra con trỏ có đầu chuỗi không, nếu pos === 0 thì đâu qua trái đc nữa.
    if (pos > 0){
        // setSelectionRange(start, end) nghĩa là đặt vị trí bôi đen/con trỏ từ start đến end; pos - 1, pos - 1 để đặt con trỏ lùi lại 1 kí tự
        display.setSelectionRange(pos - 1, pos - 1);
    }
}

function right(){
    let pos=display.selectionStart;
    if (pos < display.value.length) {
        display.setSelectionRange(pos+1, pos+1);
    }
}

function clearDisplay(){
    display.value = "";
    display.setSelectionRange(0, 0);
}

function deleteAtCaret() {
    let pos = display.selectionStart;
    let text = display.value;
    

    // Nếu caret ở đầu thì không xoá
    if (pos == 0) return;

    display.value = text.slice(0, pos - 1) + text.slice(pos);

    // Đặt caret lùi lại 1 ký tự
    display.setSelectionRange(pos - 1, pos - 1);
}


function calculate(){
    // try dùng để chạy thử đoạn code có khả năng bị lỗi
    try{
        var pe=display.value
        // Gọi hàm string.replace(pattern, replace) ở đây là tìm mọi số 'm' có dâu '%' ---> (m/100).
        pe=pe.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
        pe = pe.replace(/\^/g, "**");
        // display là một element tự đặt được do đã gọi 'const display=' ở trên, value là một property (thuộc tính) do trình duyệt DOM định nghĩa sẵn.
        display.value = eval(pe);
    }
    catch(error){
        display.value = "Lỗi mẹ rồi! Lại";
    }
}
