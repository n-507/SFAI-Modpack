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
	event.add(['ars_nouveau:summon_focus'], Text.red('由于性能问题，该物品无法被装备。'))

	event.add(['ars_nouveau:sourcestone'], Text.of('在深板岩层洞穴寻找哭泣之井结构'))
	event.add(['ars_nouveau:sourcestone'], Text.of('并投入黑石以制作魔源石'))
})