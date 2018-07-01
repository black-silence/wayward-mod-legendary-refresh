var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "Enums", "mod/Mod", "mod/IHookHost"], function (require, exports, Enums_1, Mod_1, IHookHost_1) {
    "use strict";
    class LegendaryRefresh extends Mod_1.default {
        onInitialize(saveDataGlobal) {
        }
        onGameTickEnd() {
            let items = itemManager.getItemsInContainer(localPlayer.inventory);
            for (let i = items.length - 1; i >= 0; i--) {
                if (items[i].quality != Enums_1.ItemQuality.Legendary) {
                    continue;
                }
                if (items[i].minDur < items[i].maxDur) {
                    items[i].minDur = items[i].maxDur;
                }
            }
        }
    }
    __decorate([
        IHookHost_1.HookMethod
    ], LegendaryRefresh.prototype, "onGameTickEnd", null);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = LegendaryRefresh;
});
