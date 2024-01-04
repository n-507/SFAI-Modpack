ServerEvents.recipes(event => {
    event.remove({output: '#forge:ingots', type:'minecraft:smelting', not: [{output:'#forge:ingots/copper'}, {output:'#forge:ingots/zinc'}, {output:'#forge:ingots/lead'}, {output:'#forge:ingots/tin'}]})

    event.replaceInput({output: 'minecraft:blast_furnace'}, '#forge:ingots/iron', '#forge:ingots/copper')
    event.replaceInput({input: 'thermal:cured_rubber', not:{output:'thermal:cured_rubber_block'}, type: 'minecraft:crafting_shaped'}, 'thermal:cured_rubber', '#forge:ingots/rubber')
    
    event.replaceInput([{mod:'create'}, {mod:'createdieselgenerators'}, {mod:'create_things_and_misc'}, {mod:'interiors'}], 'minecraft:dried_kelp', 'kubejs:comp.rubber.sheet')

    //event.remove({output: 'thermal:machine_frame', type:'minecraft:crafting_shaped'})
});

ServerEvents.tags('item', event => {
    event.add('tombstone:enchanted_grave_key_ingredients', 'kubejs:emergency_token')
    event.add('forge:ingots/rubber', 'kubejs:comp.rubber')
    event.add('forge:plates/rubber', 'kubejs:comp.rubber.sheet')
});

ServerEvents.tags('fluid', event => {
    //event.add('forge:soul_oil', 'kubejs:soul_oil')
    //event.add('forge:cracked_soul_oil', 'kubejs:cracked_soul_oil')
    //event.add('forge:ethylene', 'kubejs:ethylene')
    //event.add('forge:molten_silicon', 'kubejs:molten_silicon')
});

EntityEvents.death(event => {
    let entity = event.getEntity()
    if(entity.hasCustomName()){
        let deathMessage = entity.getCombatTracker().getDeathMessage()
        entity.level.getServer().getPlayerList().broadcastSystemMessage(deathMessage, false)
    }
});