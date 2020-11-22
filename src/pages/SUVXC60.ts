import {
    xc60hybridheaderLink,
    xc60hybridLearnLink,
    xc60hybridShopLink,
    xc60hybridheaderLinkTargetURL,
    xc60hybridLearnLinkTargetURL,
    xc60hybridShopLinkTargetURL,
} from "../constants/page-constants";

class SUV_XC60 {
    getXC60HybridheaderLink(): WebdriverIO.Element {
        return $(xc60hybridheaderLink);
    }
    getXC60HybridLearnLink(): WebdriverIO.Element {
        return $(xc60hybridLearnLink);
    }
    getXC60HybridShopLink(): WebdriverIO.Element {
        return $(xc60hybridShopLink);
    }
    getXC60HybridHeaderTargetURL(): string {
        return xc60hybridheaderLinkTargetURL;
    }
    getXC60HybridLearnLinkTargetURL(): string {
        return xc60hybridLearnLinkTargetURL;
    }
    getXC60HybridShopLinkTargetURL(): string {
        return xc60hybridShopLinkTargetURL;
    }
}
export const suv_xc60 = new SUV_XC60();