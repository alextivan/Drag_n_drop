const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');



item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for(const placeholder of placeholders) {
    placeholder.addEventListener('dragover' , dragover);
    //  placeholder.addEventListener('dragentertodo', dragentertodo);
    //  placeholder.addEventListener('dragenterprogress', dragenterprogress);
    //  placeholder.addEventListener('dragenterdone', dragenterdone);
      placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', drop);
    }

function dragstart(e){

    e.target.classList.add('hold');
    
    setTimeout(()=>{
        e.target.classList.add('hide');
    }, 0);
}

function dragend(e){
    e.target.classList.remove('hold', 'hide');
}

function dragover(e){
    e.preventDefault();
}

// function dragentertodo(e){
//     e.target.classList.add('hoveredtodo');
// }

// function dragenterprogress(e){
//     e.target.classList.add('hoveredprogress');
// }

// function dragenterdone(e){
//     e.target.classList.add('hovereddone');
// }
function dragenter(e){
        e.target.classList.add('hovered');
}

function dragleave(e){
    e.target.classList.remove('hovered');
    //e.target.classList.remove('hoveredtodo');

}

function drop(e){
    e.target.append(item);
    e.target.classList.remove('hovered');
   // e.target.classList.remove('hoveredtodo');

}