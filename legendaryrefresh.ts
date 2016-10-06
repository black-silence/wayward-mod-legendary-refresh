/// <reference path="mod-reference/modreference.d.ts"/>

class Mod extends Mods.Mod {

    public onInitialize(saveDataGlobal: any): any {
    }

    public onLoad(saveData: any): void {
    }

    public onUnload(): void {
    }

    public onSave(): any {
    }

    /**
     * Called when a turn is completing
     */
    public onTurnComplete(): void {

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
