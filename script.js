// const task = document.querySelector('.task');
// const list = document.querySelector('.list');

// document.querySelector('.submit').onclick = () =>{
//     if(task.value.length == 0){
//         alert("Enter a To-Do task")
//     }
//     else{
//         list.innerHTML = list.innerHTML + 
//         `<li><span>${task.value}</span>
//         <button class="dots"><i class="fa-solid fa-ellipsis-vertical"></i></button>
//         </li>`
        
//         task.value=""
//     }
// }

// const dotsButton = document.querySelector('.dots');

// dotsButton.onclick = () =>{
//     if (dotsButton.nextSibling) return;

//     const editButton = document.createElement('button');
//     editButton.classList.add('edit');
//     editButton.innerHTML = `<i class="fa-solid fa-pencil"></i>`;

//     const deleteButton = document.createElement('button');
//     deleteButton.classList.add('delete');
//     deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    
//     const listItem = document.querySelectorAll('li');
//     listItem.appendChild(editButton);
//     listItem.appendChild(deleteButton);

//     deleteButton.onclick = () => {
//         listItem.remove();
//     }
// };
// let del = document.querySelectorAll('.del')
//         for(i=0;i<del.length;i++){
//                 del[i].onclick = function(){
//                     console.log(this)
//                     console.log(this.parentNode)
//                 this.parentNode.remove()
//             }
//         }
/* <i class="fa fa-trash"></i> */

const task = document.querySelector('.task');
const list = document.querySelector('.list');

document.querySelector('.submit').onclick = addTask;

function addTask() {
    if (task.value.length == 0) {
        alert("Enter a To-Do task");
    } else {
        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = task.value;

        const dotsButton = document.createElement('button');
        dotsButton.classList.add('dots');
        dotsButton.innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>`;

        const xmarkButton = document.createElement('button');
        xmarkButton.classList.add('xmark');
        xmarkButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        xmarkButton.style.display = 'none'; 

        listItem.appendChild(taskSpan);
        listItem.appendChild(dotsButton);
        listItem.appendChild(xmarkButton);
        list.appendChild(listItem);

        task.value = "";

        dotsButton.onclick = () => {
            dotsButton.style.display = 'none';
            xmarkButton.style.display = 'inline';

            if (!listItem.querySelector('.edit')) { 
                const editButton = document.createElement('button');
                editButton.classList.add('edit');
                editButton.innerHTML = `<i class="fa-solid fa-pencil"></i>`;

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete');
                deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

                listItem.appendChild(editButton);
                listItem.appendChild(deleteButton);

                deleteButton.onclick = () => {
                    listItem.remove();
                };

                editButton.onclick = () => {
                    task.value = taskSpan.textContent;
                    listItem.remove();

                    document.querySelector('.submit').onclick = () => {
                        if (task.value.length == 0) {
                            alert("Enter a To-Do task");
                        } else {
                            taskSpan.textContent = task.value;
                            listItem.insertBefore(taskSpan, dotsButton);
                            list.appendChild(listItem);
                            task.value = "";
                            document.querySelector('.submit').onclick = addTask;  // Reset to original function
                        }
                    };
                };
            }
        };

        xmarkButton.onclick = () => {
            dotsButton.style.display = 'inline';
            xmarkButton.style.display = 'none';

            const editButton = listItem.querySelector('.edit');
            const deleteButton = listItem.querySelector('.delete');
            if (editButton) editButton.remove();
            if (deleteButton) deleteButton.remove();
        };
    }
}



