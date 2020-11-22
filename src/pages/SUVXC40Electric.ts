import {
    xc40ElectricheaderLink,
    xc40ElectricLearnLink,
    xc40ElectricShopLink,
    xc40ElectricheaderLinkTargetURL,
    xc40ElectricLearnLinkTargetURL,
    xc40ElectricShopLinkTargetURL,
} from "../constants/page-constants";

class SUVXC40Electric {
    getXC40ElectricheaderLink(): WebdriverIO.Element {
        return $(xc40ElectricheaderLink);
    }
    getXC40ElectricLearnLink(): WebdriverIO.Element {
        return $(xc40ElectricLearnLink);
    }
    getXC40ElectricShopLink(): WebdriverIO.Element {
        return $(xc40ElectricShopLink);
    }
    getXC40ElectricHeaderTargetURL(): string {
        return xc40ElectricheaderLinkTargetURL;
    }
    getXC40ElectricLearnLinkTargetURL(): string {
        return xc40ElectricLearnLinkTargetURL;
    }
    getXC40ElectricShopLinkTargetURL(): string {
        return xc40ElectricShopLinkTargetURL;
    }
}
export const suv_xc40Electric = new SUVXC40Electric();