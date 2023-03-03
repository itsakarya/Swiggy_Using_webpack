import { createDomElement, appendChildrensInParent } from "../../helper";

export function createBannerTabsSectionItem(parentId) {
    const search=createDomElement({
        elementTag:"DIV",
        className:"resturant-search-text",
        innerHtml:'<i class="bi bi-search icon-modify"></i> Search for dishes...'
    });
    const filter=createDomElement({
        elementTag:"DIV",
        className:"resturant-checkbox-text",
        innerHtml:'<i class="bi bi-square icon-modify"></i> Veg only'
    });
    const favourite=createDomElement({
        elementTag:"DIV",
        className:"resturant-favourite-text",
        innerHtml:'<i class="bi bi-suit-heart icon-modify"></i>Favourite'
    });
    appendChildrensInParent(parentId,[search,filter,favourite]);
}