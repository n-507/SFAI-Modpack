ServerEvents.recipes(event => {
    event.remove({output: '#forge:ingots', type:'minecraft:smelting', not: [{output:'#forge:ingots/copper'}, {output:'#forge:ingots/zinc'}, {output:'#forge:ingots/lead'}, {output:'#forge:ingots/tin'}, {output:'#forge:ingots/brick'}]})

    event.replaceInput({output: 'minecraft:blast_furnace'}, '#forge:ingots/iron', '#forge:ingots/copper')
    event.replaceInput({input: 'thermal:cured_rubber', not:{output:'thermal:cured_rubber_block'}, type: 'minecraft:crafting_shaped'}, 'thermal:cured_rubber', '#forge:ingots/rubber')
    
    event.replaceInput({mod:'create'}, 'minecraft:dried_kelp', 'kubejs:rubber_sheet')
});

ServerEvents.tags('item', event => {
    event.add('tombstone:enchanted_grave_key_ingredients', 'kubejs:emergency_token')
    event.add('forge:ingots/aluminium', 'immersiveengineering:ingot_aluminum')
    event.add('forge:ingots/aluminum', 'ic2:ingot_aluminium')
    event.add('forge:ingots/rubber', 'kubejs:rubber_ingot')
    event.add('forge:plates/rubber', 'kubejs:rubber_sheet')
    event.add('forge:rods/tin', 'kubejs:rod_tin')
    event.add('forge:rods/bronze', 'kubejs:rod_bronze')
    event.add('forge:dusts/aluminum', 'ic2:dust_aluminium')
    event.add('create:ignored_in_automatic_shapeless', 'immersiveengineering:hammer')
    event.add('create:ignored_in_automatic_shapeless', 'immersiveengineering:wirecutter')
    event.add('create:ignored_in_automatic_shapeless', 'immersiveengineering:screwdriver')
});

ServerEvents.tags('fluid', event => {
    event.add('forge:soul_oil', 'kubejs:soul_oil')
    event.add('forge:cracked_soul_oil', 'kubejs:cracked_soul_oil')
    event.add('forge:ethylene', 'kubejs:ethylene')
    event.add('forge:molten_silicon', 'kubejs:molten_silicon')
});

EntityEvents.death(event => {
    let entity = event.getEntity()
    if(entity.hasCustomName()){
        let deathMessage = entity.getCombatTracker().getDeathMessage()
        entity.level.getServer().getPlayerList().broadcastSystemMessage(deathMessage, false)
    }
});