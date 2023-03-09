import { createDomElement, appendChildrensInParent } from "../../../helper";
import { offerOneItem } from "./helper1";
import { offerTwoItem } from "./helper2";

export function createBannerightSectionItems(parentId) {
    const offerOne=createDomElement({
         elementTag:"DIV",
         className:"content-resturant-offer-items",
         id:"offerElementOne"
    });
    appendChildrensInParent(parentId,[offerOne]);
    offerOneItem(offerOne.id);
    const offerTwo=createDomElement({
         elementTag:"DIV",
         className:"content-resturant-offer-items",
         id:"offerElementTwo"
    });
    appendChildrensInParent(parentId,[offerTwo]);
    offerTwoItem(offerTwo.id);
     const offer=createDomElement({
         elementTag:"DIV",
         className:"offer",
         innerHtml:"OFFER"
     });
     appendChildrensInParent(parentId,[offer]);
 
 }