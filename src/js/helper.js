export const createDomElement = ({ elementTag, className, id, src, innerHtml = '' }) => {
    const element = document.createElement(elementTag);
    if(className) element.setAttribute("class", className);
    if(id) element.setAttribute("id", id);
    if(src) element.setAttribute("src", src);
    element.innerHTML = innerHtml;
    return element;
}


export const appendChildrensInParent = (parentId, childrens) => {
    const parent = document.getElementById(parentId);
    parent.append(...childrens);
}