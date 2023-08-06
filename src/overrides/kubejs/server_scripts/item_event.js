
const dev_and_testers = [
    "n507", 
    "Mirror_Flower",
    "Water_Moon",
    "Maple_Mo",
    "Withered_Flower",
    "Ying_Lan",
    "oath_y",
    "JiaNaNa",
    "ryue_ry",
    "HibiscusGenevii",
    "alexiskill_u"
]
const elder_players = [
    "n507",
    "Water_Moon",
    "Maple_Mo",
    "oath_y",
    "JiaNaNa",
    "HibiscusGenevii",
    "alexiskill_u",
    "ryue_ry",
    "HUZYHIZ",
    "YHEcho",
    "BaiLingYangFeng",
    "LFZ505",
    "tomodachi",
    "Smcyz",
    "LuxLuxLu",
    "Bearthebrunt",
    "XYangQVQ",
    "Lycoris__Radiata",
    "Liberty_love",
    "XyStarovo",
    "Rare9",
    "Yi_Ling_",
    "Mirror_Flower",
    "Seiran_9751",
    "Foril",
    "qingyin922",
    "willow_baicai",
    "Misaka19625",
    "meichuan_neiku",
    "HyunCity",
    "God22333",
    "ShousiHaidan",
    "jujx",
    "Lux"
]

function containsIgnoreCase(list, searchString) {
    return list.some(item => item.toLowerCase() === searchString.toLowerCase());
}

function givePlayerItem(player, item){
    player.getInventory().add(item)
}

function giveTesterInitialItem(event, player){
    if(!(containsIgnoreCase(dev_and_testers, player.getName().getString()))) return;
    console.log(player.stages);

    if (!player.stages.has('starting_items')) {
        let crowbarItem = Item.of('kubejs:crowbar', '{Unbreakable:1}').enchant('tombstone:soulbound', 1);
        player.getInventory().add(crowbarItem);
		player.stages.add('starting_items')
	}
}

function giveElderPlayerItems(event, player){
    if(!(containsIgnoreCase(elder_players, player.getName().getString()))) return;
    console.log(player.stages);

    if (!player.stages.has('v_1_0_items')) {
        givePlayerItem(player, Item.of('64x apotheosis:vial_of_expulsion'));
        givePlayerItem(player, Item.of('16x apotheosis:mythic_material'));
	}
}

PlayerEvents.chat(event => {
    let player = event.getEntity();
    if(player.getLevel().isClientSide()) return;
    giveTesterInitialItem(event, player);
    giveElderPlayerItems(event, player);
});

ItemEvents.rightClicked(event => {
    let item_name = event.getItem().getItem().toString()
    if(item_name == "satchel"){
        event.getEntity().setStatusMessage(Text.red("你不能这样做 - 如有疑问请联系服主"))
        event.cancel()
    }
})