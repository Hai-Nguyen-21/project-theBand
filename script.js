var header = document.getElementById('header');
var headerHeight = header.clientHeight;

// đóng/mở menu bar
function mobileMenu() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// ẩn menu bar
var menuItems = document.querySelectorAll('#nav li a[href *= "#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    
    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (!isParentMenu) {
            header.style.height = null;
        } else{
            event.preventDefault();
        }
    }
}