function addTask(title) {
	const toDoList = document.getElementById("container");
	const liElement = document.createElement("li");
	const deletebtn = document.createElement("button");

	if (title !== "") {
		toDoList.appendChild(liElement);
	}

	liElement.innerText = title;
	liElement.classList.add("task-text");
	liElement.appendChild(deletebtn);

	deletebtn.addEventListener("click", deleteTask);
	deletebtn.classList.add("delete-button");
	inputElement.value = null;
	inputElement.focus();
}

const deleteTask = (event) => {
	console.log(event);
	const deleteButton = event.target;
	deleteButton.parentElement.remove();
};

const inputElement = document.getElementById("stuff");
inputElement.addEventListener("keyup", function (event) {
	if (event.key === "Enter") {
		addNewTask();
	}
	console.log(event);
});
let todoArray = [];

function addNewTask() {
	const inputElement = document.getElementById("stuff");
	const title = inputElement.value;
	addTask(title);
}
