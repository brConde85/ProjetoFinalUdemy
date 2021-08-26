(function() {
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');
})()

function CliqueMenu() {
    var $clique = document.getElementById('item-menu');
    if ($clique.style.display === "none") {
        $clique.style.display = "block";
    } else {
        $clique.style.display = "none";
    }
}