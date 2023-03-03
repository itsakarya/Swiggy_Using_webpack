import { createDomElement, appendChildrensInParent } from "../../helper";

export function createHeaderLeftSectionItems (parentId) {
    const locationContainer=createDomElement({
        elementTag : "DIV",
        className: 'location-item',
        id : 'locationContainer'
    });
    appendChildrensInParent(parentId ,[locationContainer]);

    const location= createDomElement({
       elementTag : "SPAN",
       className : "location-item-name",
       innerHtml : "Munnekollal"
    });

    const locationFullName = createDomElement({
        elementTag : "SPAN",
        className : 'location-item-fullname',
        innerHtml : 'XP55+4P8, Spice Garden Layo...'
    });
    const dropdownIcon = createDomElement ({
        elementTag :  "I",
        className : "bi bi-chevron-down add-icon"
    });
    appendChildrensInParent(locationContainer.id,[location,locationFullName,dropdownIcon]);
}