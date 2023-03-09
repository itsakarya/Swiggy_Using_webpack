import { appendChildrensInParent } from "../../../../../../../helper";
import { cardButtonClicked } from "./event.js";


export function cehck(btnId) {

    document.getElementById(btnId).innerHTML='ADD';
    
        const plus=createDomElement({
            elementTag:"DIV",
            className:"center-body-card-img-btn-plus-icon",
            innerHtml:"+"
        });
        // btn.appendChild(plus);
        appendChildrensInParent(btnId,[plus]);

        document.getElementById(btnId).addEventListener("click",cardButtonClicked(btnId));
}