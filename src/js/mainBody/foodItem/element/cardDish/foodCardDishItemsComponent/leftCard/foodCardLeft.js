import { createDomElement, appendChildrensInParent } from "../../../../../../helper";

export function createDishCardleft(icon, dishName, price, description, subElementLeftId, individualId){
    const left=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-dish",
        id: subElementLeftId, 
    });
    appendChildrensInParent(individualId,[left]);

    const dishType=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-dish-icon",
        innerHtml:icon
    });
    const dish=createDomElement({
        elementTag:"DIV",
        className:"center-body-dish-name",
        innerHtml:dishName
    });
    const dishPrice=createDomElement({
        elementTag:"DIV",
        className:"center-body-dish-price",
        innerHtml:price
    });
    const dishDesciption=createDomElement({
        elementTag:"DIV",
        className:"center-body-dish-description",
        innerHtml:description
    });
    appendChildrensInParent(left.id,[dishType, dish, dishPrice, dishDesciption]);
    return left;
}

