function upDate(previewPic) {
    console.log(previewPic.alt);
    console.log(previewPic.src);

    
    document.getElementById('image').textContent = previewPic.alt;

    
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
}
function undo() {
    
    document.getElementById('image').style.backgroundImage = "url('')";

    
    document.getElementById('image').textContent = "Hover over an image below to display here.";
}