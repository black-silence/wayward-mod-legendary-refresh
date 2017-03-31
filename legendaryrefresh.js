define(["require", "exports", "Enums", "mod/Mod"], function (require, exports, Enums_1, Mod_1) {
    "use strict";
    class LegendaryRefresh extends Mod_1.default {
        onInitialize(saveDataGlobal) {
        }
        onTurnComplete() {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = LegendaryRefresh;
});
