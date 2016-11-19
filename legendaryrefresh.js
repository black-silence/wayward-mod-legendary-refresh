define(["require", "exports"], function (require, exports) {
    "use strict";
    class Mod extends Mods.Mod {
        onInitialize(saveDataGlobal) {
        }
        onLoad(saveData) {
        }
        onUnload() {
        }
        onSave() {
        }
        onTurnComplete() {
            let items = Item.getItemsInContainer(player.inventory);
            for (let i = items.length - 1; i >= 0; i--) {
                if (items[i].quality != ItemQuality.Legendary) {
                    continue;
                }
                if (items[i].minDur < items[i].maxDur) {
                    items[i].minDur = items[i].maxDur;
                }
            }
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Mod;
});
