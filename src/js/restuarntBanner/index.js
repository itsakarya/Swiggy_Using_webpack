import { createDomElement } from "../helper";
import { createBannerTabsSection } from "./resturantBannerTabs";
import { createBannerightSection } from "./resturantBannerRight";
import { createResturantBannerleftSection } from "./resturantBannerLeft";

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