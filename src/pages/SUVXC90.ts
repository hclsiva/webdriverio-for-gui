import {
    xc90hybridheaderLink,
    xc90hybridLearnLink,
    xc90hybridShopLink,
    xc90hybridheaderLinkTargetURL,
    xc90hybridLearnLinkTargetURL,
    xc90hybridShopLinkTargetURL,
} from "../constants/page-constants";

class SUV_XC90 {
    getXC90HybridheaderLink(): WebdriverIO.Element {
        return $(xc90hybridheaderLink);
    }
    getXC90HybridLearnLink(): WebdriverIO.Element {
        return $(xc90hybridLearnLink);
    }
    getXC90HybridShopLink(): WebdriverIO.Element {
        return $(xc90hybridShopLink);
    }
    getXC90HybridHeaderTargetURL(): string {
        return xc90hybridheaderLinkTargetURL;
    }
    getXC90HybridLearnLinkTargetURL(): string {
        return xc90hybridLearnLinkTargetURL;
    }
    getXC90HybridShopLinkTargetURL(): string {
        return xc90hybridShopLinkTargetURL;
    }
}
export const suv_xc90 = new SUV_XC90();