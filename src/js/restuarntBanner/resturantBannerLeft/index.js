import { createDomElement,appendChildrensInParent } from "../../helper";
import { contentItems } from "./resturantContentItems";

export function createResturantBannerleftSection(parentId) {
    const bannerLeftContainer= createDomElement({
        elementTag: "DIV",
        className: "resturant-description-items",
        id : "resturantLeftContainer"
    }); 
    appendChildrensInParent(parentId,[bannerLeftContainer]);
    
    const logoItem= createDomElement({
        elementTag : "div",
        className: "logo-resturant-items",
        innerHtml: '<img class="_2tuBw _12_oN _3sCWI" width="254" height="165" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ikmqsf8l9scdlnhahftx">'
    });
    const contentContainer= createDomElement({
        elementTag:"DIV",
        className:"resturant-description-content-items", 
        id:"resturantDetails"
    });
    appendChildrensInParent(bannerLeftContainer.id,[logoItem,contentContainer]);
    contentItems(contentContainer.id);

}