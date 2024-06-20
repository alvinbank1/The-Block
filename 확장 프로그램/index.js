function load(){
    fetch("https://raw.githack.com/alvinbank1/The-Block/main/main.js")
    .then(response => response.text())
    .then(scriptText => {
        const script = document.createElement('script');
        script.textContent = scriptText;
        document.head.appendChild(script);
    })
    .catch(error => alert('스크립트를 로드하는데 실패했습니다:', error));
}

window.onload = function() {
    setTimeout(function(){
        load()
    },500);
};
