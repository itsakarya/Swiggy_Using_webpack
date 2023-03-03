import { appendChildrensInParent, createDomElement } from "../../../../../../../../helper";

export function cardButtonClicked() {
    const wrap=createDomElement({
        elementTag:"DIV",
        className: "resturant-card-btn-on-click",
        id:"check"
    });
    const inc=createDomElement({
        elementTag:"DIV",
        innerHtml:"-",
        className:btnId,
        id:"inrementBtn"
    });
    const counter=createDomElement({
        elementTag:"DIV",
        innerHtml:"count",
        className:btnId,
        id:"count"
    });
    const dec=createDomElement({
        elementTag:"DIV",
        innerHtml:"+",
        className:btnId,
        id:"decrementBtn"
    });
    appendChildrensInParent(wrap.id,[inc,counter,dec]);
    return wrap;

}