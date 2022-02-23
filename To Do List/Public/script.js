function addMore() {
    document.getElementById('error').innerHTML = "";
    let name = document.getElementById('name').value;
    if (name == '') {
        document.getElementById('error').innerHTML = "Please enter value";
    } else {
        let box = document.getElementById('box');
        let li = document.createElement('li');
        li.textContent = name;
        let cross = document.createElement('a');
        cross.textContent = "x";
        // cross.href = "javascript:void(0)";
        cross.className = "remove";
        li.appendChild(cross);
        let pos = box.firstElementChild;
        if (pos == null) {
            box.appendChild(li);

        } else {
            box.insertBefore(li, pos);
        }
    }
    document.getElementById('name').value = "";

}

let btn = document.querySelector('ul');

btn.addEventListener('click', function(e) {
    let box = document.getElementById('box');
    let li = e.target.parentNode;
    box.removeChild(li);
})