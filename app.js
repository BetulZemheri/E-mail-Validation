let email = () => {

    let inputBox = document.querySelector("input").value;
    let mail = inputBox.trim().split("@");

    if (mail.length === 2) {

        let userName = mail[0];
        let userEmail = mail[1].split(".");
        let webSiteName = userEmail[0];
        let uzunluk = userEmail[1];

        if (userName === "") {
            alert("This is not a valid address.");
        } else {
            if (userEmail.length === 2) {
                if (webSiteName === "") {
                    alert("This is not a valid address.");
                } else {
                    if (uzunluk.length == 2 || uzunluk.length == 3) {
                        confirm("This is a valid E-Mail Address.")
                    } else {
                        alert("This is not a valid address.");
                    }
                }
            } else {
                alert("This is not a valid address.");
            }
        }
    } else {
        alert("This is not a valid address.");
    };
};

document.querySelector("button").addEventListener("click", email);


// function emailControl(x) {
//     if (x.includes("@")) {
//       if (
//         x.slice(0, x.indexOf("@")).length > 0 &&
//         x.slice(x.indexOf("@"), x.indexOf(".") - 1).length > 0
//       ) {
//         if (
//           x.slice(x.indexOf(".") + 1).length < 4 &&
//           x.slice(x.indexOf(".") + 1).length > 1
//         ) {
//           return true;
//         } else return false;
//       } else return false;
//     } else return false;
//   }
//   let a = "asdas@a.comm";
//   console.log(emailControl(a));
