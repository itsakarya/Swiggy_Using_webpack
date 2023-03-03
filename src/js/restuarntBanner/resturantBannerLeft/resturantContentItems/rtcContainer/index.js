import { ratingTimimgCostContainerItem } from "./helper";
import { appendChildrensInParent } from "../../../../helper";

export function ratingTimimgCostContainerItems(parentId) {
    
    const rating=ratingTimimgCostContainerItem({
        parentClass:"rating new-font-again",
        childClass:"rating-500 new-font",
        parentText:'<i class="bi bi-star-fill icon-modify"></i> 4.1',
        childText:"500+ rating"
    });
    const time=ratingTimimgCostContainerItem({
        parentClass:"time new-font-again",
        childClass:"delivery new-font",
        parentText:'19 mins',
        childText:"Delivery Time"

    });
    const cost=ratingTimimgCostContainerItem({
        parentClass:"price new-font-again",
        childClass:"cost new-font",
        parentText:'<i class="bi bi-currency-rupee icon-modify"></i> 600',
        childText:"Cost for Two"
    });
    appendChildrensInParent(parentId,[rating,time,cost]);
}