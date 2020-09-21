first=localStorage.getItem("f_name");

middle=localStorage.getItem("m_name");

last=localStorage.getItem("l_name");

phone=localStorage.getItem("mobile");

email=localStorage.getItem("email");

address=localStorage.getItem("address");

document.getElementById("name").innerText=`${first} ${middle} ${last}`;
document.getElementById("address").innerText=`${address}`;
document.getElementById("phone").innerText=`${phone} / Ghanaian`;
document.getElementById("mail").innerText=`${email}`;

window.localStorage.clear();