import { createDomElement } from "../helper";
import { createBannerTabsSection } from "./resturantBannerTabs/resturantBannerTabContainer";
import { createBannerightSection } from "./resturantBannerRight/resturantBannerRightContainer";
import { createResturantBannerleftSection } from "./resturantBannerLeft/resturantItemLeftLogoItem";

export function createResturantBanner(){
    const section = createDomElement({
        elementTag: "SECTION",
        className: "resturant",
        id: "aboutResturant",
    });
    document.body.appendChild(section);
    createResturantBannerleftSection(section.id);
    createBannerightSection(section.id);
    createBannerTabsSection(section.id);
}