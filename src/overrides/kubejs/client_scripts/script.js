// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

ItemEvents.tooltip(event => {
	event.add(['pneumaticcraft:amadron_tablet'], Text.of('可用于与其他玩家进行全服交易').gold().bold().italic().underlined())


	event.add(['enigmaticlegacy:cursed_ring'], Text.red('警告：装备前请三思！'))
	event.add(['enigmaticlegacy:cursed_ring'], Text.red('警告：装备前请三思！'))
	event.add(['enigmaticlegacy:cursed_ring'], Text.red('警告：装备前请三思！'))
	event.add(['enigmaticlegacy:fabulous_scroll', 'enigmaticlegacy:heaven_scroll'], Text.red('由于性能问题，该物品已被禁用。'))
	event.add(['enigmaticlegacy:fabulous_scroll', 'enigmaticlegacy:heaven_scroll'], Text.red('请联系管理员或服主以获取原材料补偿。'))
})