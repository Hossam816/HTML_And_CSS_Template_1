var parent = document.querySelector('.links');
var link = document.querySelector('ul');
var bo = document.querySelector('body')
console.log(link);

parent.onclick = function(){
    'use strict';
    link.classList.toggle('show');
};

