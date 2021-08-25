import BigNumber from "bignumber.js";
import { combineLatest, from, ReplaySubject, Subject } from "rxjs";
import { distinctUntilChanged, map, switchMap } from "rxjs/operators";
import { Ajax as $http } from "../axios/http";
import { Constant } from "./sdk/Constant.js";
import { Web3Bounce } from "./sdk/Web3Bounce";
import { Web3BSCBurgerTransit } from "./sdk/Web3BSCBurgerTransit";
import { Web3Caller } from "./sdk/Web3Caller.js";
import { Web3Convert } from "./sdk/Web3Convert";
import { Web3Delegate } from "./sdk/Web3Delegate.js";
import { Web3DelegateBeta } from "./sdk/Web3DelegateBeta.js";
import { Web3ETHBurgerTransit } from "./sdk/Web3ETHBurgerTransit";
import { Web3Governance } from "./sdk/Web3Governance.js";
import { Web3Platform } from "./sdk/Web3Platform.js";
import { Web3Pool } from "./sdk/Web3Pool.js";
import { Web3Provider } from "./sdk/Web3Provider.js";
import { Web3Query } from "./sdk/Web3Query.js";
import { Web3Query2 } from "./sdk/Web3Query2.js";
import { Web3Query2Beta } from "./sdk/Web3Query2Beta.js";
import { Web3QueryV1 } from "./sdk/Web3QueryV1.js";
import { Web3Storage } from "./sdk/Web3Storage.js";
import { Web3TokenQuery } from "./sdk/Web3TokenQuery";
import { ETHConfig } from "./js/tokenMap";
class ERC2917 {
    init() {
        console.log("erc init in here");
    }
}

const SwapInstance = new Swap();
window["SwapInstance"] = SwapInstance;
export { SwapInstance };
