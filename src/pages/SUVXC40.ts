import {
    xc40hybridheaderLink,
    xc40hybridLearnLink,
    xc40hybridShopLink,
    xc40hybridheaderLinkTargetURL,
    xc40hybridLearnLinkTargetURL,
    xc40hybridShopLinkTargetURL,
} from "../constants/page-constants";

class SUV_XC40 {
    getXC40HybridheaderLink(): WebdriverIO.Element {
        return $(xc40hybridheaderLink);
    }
    getXC40HybridLearnLink(): WebdriverIO.Element {
        return $(xc40hybridLearnLink);
    }
    getXC40HybridShopLink(): WebdriverIO.Element {
        return $(xc40hybridShopLink);
    }
    getXC40HybridHeaderTargetURL(): string {
        return xc40hybridheaderLinkTargetURL;
    }
    getXC40HybridLearnLinkTargetURL(): string {
        return xc40hybridLearnLinkTargetURL;
    }
    getXC40HybridShopLinkTargetURL(): string {
        return xc40hybridShopLinkTargetURL;
    }
}
export const suv_xc40 = new SUV_XC40();