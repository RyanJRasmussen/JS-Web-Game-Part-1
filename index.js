// Function to add all new images

function newImage(img, right, up){
    let item = document.createElement('img')
    item.src = img
    item.style.position = 'fixed'
    item.style.left = right + 'px'
    item.style.bottom = up + 'px'
    document.body.append(item)
    return item
}


// Function to add background images/ repeated images with a loop, calls previous function repeatedly. Works horizontally, put in new loop for vertical addition

function addBackgroundImg(img, height){
    
    for(let i = 0; i < 20; i++){
        newImage(img, 100 * i , height)
    }
}


//Adding grass
for(let i = 0; i < 5; i++){
    addBackgroundImg('assets/grass.png', i * 100)
}

//Adding sky
for(let i = 5; i < 10; i++){
    addBackgroundImg('assets/sky.png', i * 100)
}

// adding character and environment images

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png ', 500, 425)


// function to add items that can be picked up by double clicking

function newItem(img, right, up){
    let item = document.createElement('img')
    item.src = img
    item.style.position = 'fixed'
    item.style.left = right + 'px'
    item.style.bottom = up + 'px'
    document.body.append(item)

    item.addEventListener('dblclick', function(){
        item.remove();
    })
}

// adding item images

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)




