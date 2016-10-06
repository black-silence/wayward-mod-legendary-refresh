var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Mod = (function (_super) {
    __extends(Mod, _super);
    function Mod() {
        _super.apply(this, arguments);
    }
    Mod.prototype.onInitialize = function (saveDataGlobal) {
    };
    Mod.prototype.onLoad = function (saveData) {
    };
    Mod.prototype.onUnload = function () {
    };
    Mod.prototype.onSave = function () {
    };
    Mod.prototype.onTurnComplete = function () {
        var items = Item.getItemsInContainer(player.inventory);
        for (var i = items.length - 1; i >= 0; i--) {
            if (items[i].quality != ItemQuality.Legendary) {
                continue;
            }
            if (items[i].minDur < items[i].maxDur) {
                items[i].minDur = items[i].maxDur;
            }
        }
    };
    return Mod;
}(Mods.Mod));
