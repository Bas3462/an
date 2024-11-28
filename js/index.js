var taskInput = document.getElementById("input")
var taskCountaneur = []
function addTask() {
    var taskInfo = taskInput.value
    if (taskInfo) {
        taskCountaneur.push(taskInfo)
        console.log(taskCountaneur)
        displayTask()
        taskInput.value=""
    }
    else {
        window.alert("can not be imputy")
    }

}
function displayTask() {
    var cartona = ``
    for (i = 0; i < taskCountaneur.length; i++) {
                cartona += ` <ul>
                    <li> ${i+1}</li>
                    <li>${taskCountaneur[i]}</li>
                </ul>
        ` 
    }
    document.getElementById("taskaddnew").innerHTML = cartona;
}