const employeedata = (e) => {
    e.preventDefault();

    let employee = document.getElementById("employee").value;
    let job = document.getElementById("job").value;
    let department = document.getElementById("department").value;
    let salary = document.getElementById("salary").value;
    let experience = document.getElementById("experience").value;
    let send = document.getElementById("send").value;

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = employee;
    let td2 = document.createElement("td");
    td2.innerHTML = job;
    let td3 = document.createElement("td");
    td3.innerHTML = department;
    let td4 = document.createElement("td");
    td4.innerHTML = salary;
    let td5 = document.createElement("td");
    if (experience >= 5) {
        td5.innerHTML = "junior"
        td5.style.backgroundColor = "green"
    } else {
        td5.innerHTML = "senior"
        td5.style.backgroundColor = "red"
    }
    let td6 = document.createElement("td");
    td6.innerHTML = send;
    let td7 = document.createElement("td");
    td7.innerHTML = "delete";
    td7.style.color = "red";
    td7.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    })
   tr.append(td1, td2, td3, td4,td5,td6,td7);

    document.getElementById("data").append(tr);
}
const deleteall = () => {
    document.getElementById("data").innerHTMLI = "";
}

document.getElementById("delete").addEventListener("click", deleteall);

document.getElementById("data-box").addEventListener("submit", employeedata);