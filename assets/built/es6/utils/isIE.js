export function isIE(ver) {
    if (typeof ver === 'undefined') {
        ver = null;
    }
    var b = document.createElement('b');
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1;
}
