import { createDomElement, appendChildrensInParent } from "../../helper";

export function createAsideSectionItems(parentId) {
    const header=createDomElement({
        elementTag:"DIV",
        className:"aside-top-content",
        innerHtml:"<strong>Cart Empty</strong>"
    });
    const cartImage=createDomElement({
        elementTag:"DIV",
        className:"aside-log-content",
        innerHtml:'<img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" class="aside-logo-modify ">'
    });
    const content=createDomElement({
        elementTag:"DIV",
        className:"aside-bottom-content",
        innerHtml:"Good food is always cooking! <br> Go ahead, order some yummy items from the menu."
    });
    appendChildrensInParent(parentId,[header,cartImage,content]);
}