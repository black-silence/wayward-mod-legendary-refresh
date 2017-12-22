import { ItemQuality } from "Enums";
import Mod from "mod/Mod";

export default class LegendaryRefresh extends Mod {

    public onInitialize(saveDataGlobal: any): any {
    }

    /**
     * Called when a turn is completing
     */
    public onGameTickEnd(): void {

        let items = itemManager.getItemsInContainer(localPlayer.inventory);
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
