// priority: 0

Platform.mods.kubejs.name = 'SnowFantasy Automated Industry'
StartupEvents.registry('item', event => {
	event.create('emergency_token').displayName("应急代币").tooltip(Text.gold("与坟墓之钥合成为其附魔")).tooltip(Text.gray("可以在物品栏中点击操作")).unstackable()


	// ---- 通用零件 ----
	event.create('rod_tin').displayName('锡杆')
	event.create('rod_bronze').displayName('青铜杆')

	event.create('rubber_ingot').displayName('橡胶条')
	event.create('rubber_sheet').displayName('橡胶片')
	event.create('redstone_circuit_board').displayName("红石集成电路")	//等级1 
	event.create('lapis_circuit_board').displayName("青金石集成电路")	//等级2
	event.create('blaze_circuit_board').displayName("烈焰集成电路")	//等级3
	event.create('ender_circuit_board').displayName("末影集成电路")	//等级4
	event.create('redstone_circuit_board_incomplete').displayName("红石集成电路(未完成)").unstackable()
	event.create('lapis_circuit_board_incomplete').displayName("青金石集成电路(未完成)").unstackable()
	event.create('blaze_circuit_board_incomplete').displayName("烈焰集成电路(未完成)").unstackable()
	event.create('ender_circuit_board_incomplete').displayName("末影集成电路(未完成)").unstackable()

	event.create('scroll_encoder').displayName("拨码输入元件")
	event.create('gear_shift_mechanism').displayName('调速齿轮组')
	
	event.create('brass_frame_incomplete').displayName("黄铜机壳（未完成）").unstackable()
	event.create('copper_frame_incomplete').displayName("铜机壳（未完成）").unstackable()
	
	event.create('firm_tube').displayName('坚固电子管').tooltip(Text.gray("用于存储系统的耐用电子管"))					//前期存储系统
	event.create('emerald_tube').displayName('绿宝石电子管').tooltip(Text.gray("适用于村民交互界面的电子管"))			//简单村民
	event.create('lapis_tube').displayName('青金石电子管').tooltip(Text.gray("用于集成电路的精密电子管"))				//等级2电路板（青金石电路板）
	event.create('fluix_tube').displayName('福鲁伊克斯电子管').tooltip(Text.gray("为智能存储设计的高性能电子管"))		//AE
	event.create('carbon_tube').displayName('碳灰电子管').tooltip(Text.gray("适用于生物模拟处理的电子管"))				//深度怪物学习
	event.create('gobber_tube').displayName('戈伯电子管').tooltip(Text.gray("适用于并行化学处理的高阶电子管"))			//MeK
	event.create('graphite_tube').displayName('石墨烯电子管').tooltip(Text.gray("为大规模集成电路设计的低阻电子管"))	//等级3/4电路板	
	event.create('amethyst_tube').displayName('紫水晶电子管').tooltip(Text.gray("适用于雷达与探测系统的光敏电子管"))	//探测器	
	event.create('energized_steel_tube').displayName('充能钢电子管').tooltip(Text.gray("用于发电系统的高导通电子管"))	//Powah
	
	event.create('glass_bulb').displayName('玻璃泡')
	event.create('tube_base').displayName('电子管电极')
	event.create('incomplete_tube').displayName("未完成的电子管").tooltip(Text.gray("它应该在生产线上，而不是你手里")).unstackable()

	event.create('capaciator_incomplete').displayName('未完成的电容').unstackable()

	event.create('lcd').displayName('液晶板')
	event.create('user_interface').displayName('用户界面')
	event.create('user_interface_incomplete').displayName('用户界面（未完成）').unstackable()

	event.create('graphite_ingot').displayName('石墨烯锭')
	
	event.create('sodium_sulfurite_dust').displayName("硫酸钠")


	// ---- 主线 ----

	//MeK
	event.create('incomplete_mek_installer').displayName('工厂安装器（未完成）').unstackable()
	event.create('mek_frame_incomplete').displayName('钢制机壳（未完成）').unstackable()

	//星系
	event.create('rocket_computer').displayName('火箭导航电脑')
	event.create('incomplete_rocket_computer').displayName('火箭导航电脑（未完成）').unstackable()
	event.create('rocket_segment').displayName('钢火箭舱段').unstackable()
	event.create('rocket_segment_2').displayName('戴斯火箭舱段').unstackable()
	event.create('rocket_segment_3').displayName('紫金火箭舱段').unstackable()
	event.create('rocket_segment_4').displayName('耐热合金火箭舱段').unstackable()

	//IC2
	event.create('battery_frame').displayName('电池外壳')
	event.create('filled_battery_frame').displayName('已加酸的电池外壳')
	event.create('ic2_frame_incomplete').displayName('IC2机械外壳（未完成）').unstackable()
	event.create('ic2_circuit_incomplete').displayName('IC2电路板（未完成）').unstackable()
	event.create('adv_ic2_circuit_incomplete').displayName('IC2高级电路板（未完成）').unstackable()
	event.create('comp_ic2_circuit_incomplete').displayName('IC2复杂电路板（未完成）').unstackable()


	//热力膨胀
	event.create('thermal_frame_incomplete').displayName('热力设备框架')
	event.create('unfilled_rf_coil').displayName('未填充的通量线圈')
	event.create('rf_coil_incomplete').displayName('通量线圈（填充20%）')
	event.create('rf_coil_incomplete_2').displayName('通量线圈（填充40%）')
	event.create('rf_coil_incomplete_3').displayName('通量线圈（填充60%）')
	event.create('rf_coil_incomplete_4').displayName('通量线圈（填充80%）')
	event.create('dynamo_coil').displayName('能源炉线圈')
	event.create('dynamo_coil_empty').displayName('空的能源炉线圈')
	event.create('unweld_redstone_servo_frame').displayName('未焊接的红石伺服器框架')
	event.create('redstone_servo_frame').displayName('空的红石伺服器框架')
	event.create('redstone_crystal').displayName('红石水晶')
	event.create('percise_assembly_unit').displayName('精密装配单元')


	//气动工艺
	event.create('pneumatic_machine_frame').displayName('气动设备框架').tooltip(Text.gray("包含气缸、压缩铁框架、阀门等零件的框架")).tooltip(Text.gray("用于制作气动工艺的设备"))
	event.create('pneumatic_machine_frame_incomplete').displayName('气动设备框架（未完成）').unstackable()
	event.create('compressed_iron_ingot_incomplete').displayName('部分压缩的铁锭')
	event.create('undrilled_advanced_pneumatic_shell').displayName('未钻孔的高级气动外壳')
	event.create('unweld_advanced_pneumatic_shell').displayName('未焊接的高级气动外壳')
	event.create('advanced_pneumatic_shell').displayName('高级气动外壳')
	event.create('adv_pneumatic_machine_frame_incomplete').displayName('高级气动设备框架（未完成）').unstackable()
	event.create('adv_pneumatic_machine_frame').displayName('高级气动设备框架').tooltip(Text.gray("更高级、更耐用的气动设备零件与框架"))
	event.create('reinforced_stone_plate').displayName('强化石板')
	event.create('lapis_wafer').displayName('青金石晶圆')
	event.create('simple_pneumatic_cylinder').displayName('简易气缸')
	event.create('pcb_incomplete').displayName('PCB（未完成）').unstackable()

	//沉浸工艺
	event.create('engineering_frame_incomplete').displayName('工程设备框架（未完成）').unstackable()
	event.create('engineering_frame').displayName('工程设备框架').tooltip(Text.gray('由钢与防腐木制成的坚固框架')).tooltip(Text.gray('用于制作沉浸工艺的设备'))
	event.create('engineering_coil_incomplete').displayName('线圈（未完成）').unstackable()
	event.create('engineering_block_incomplete').displayName('工程块（未完成）').unstackable()

	//AE
	event.create('doped_silicon_crystal').displayName('赛特斯掺杂单晶硅').tooltip(Text.gray('太大了，需要切割成片使用')).unstackable()
	event.create('silicon_crystal_1').displayName('单晶硅(25%结晶)').tooltip(Text.gray('大小不合格')).unstackable()
	event.create('silicon_crystal_2').displayName('单晶硅(50%结晶)').tooltip(Text.gray('大小不合格')).unstackable()
	event.create('silicon_crystal_3').displayName('单晶硅(75%结晶)').tooltip(Text.gray('大小不合格')).unstackable()
	event.create('silicon_crystal_0').displayName('单晶硅结晶核').tooltip(Text.gray('需要进一步结晶'))
	event.create('silicon_dust').displayName('硅粉').tooltip(Text.gray('从沙子烧制而成的硅粉，还需要加热后冷却结晶'))

	//创造物品
	event.create('creative_token').displayName('创造代币').glow(true)
	event.create('inactive_creative_token').displayName('未激活的创造代币').glow(true)
	event.create('infinity_ingot').displayName('物质锭').glow(true)
	event.create('infinity_nugget').displayName('物质粒').glow(true)


	// ---- 其他模组 ----

	//区块加载器
	event.create('chunk_loader_core').displayName('区块加载核心')
	event.create('chunk_loader_core_incomplete').displayName('区块加载核心（未完成）').unstackable()

	//深度怪物学习
	event.create('uncharged_blank_data_model').displayName('未激活的数据模型芯片')
	event.create('carbon_redstone').displayName('碳灰红石')

	// ---- 采矿 ----

	event.create('rocky_gem_batch').displayName('开采的宝石矿')
	event.create('dirty_gem_batch').displayName('污浊的宝石矿')
	event.create('gem_batch').displayName('待分拣宝石矿')

	event.create('rocky_metallic_batch').displayName('开采的有色金属矿')
	event.create('dirty_metallic_batch').displayName('污浊的有色金属矿')
	event.create('metallic_batch').displayName('待分拣有色金属矿')

	event.create('rocky_ferro_batch').displayName('开采的铁磁矿')
	event.create('dirty_ferro_batch').displayName('污浊的铁磁矿')
	event.create('ferro_batch').displayName('待分拣铁磁矿')

	event.create('rocky_golden_batch').displayName('开采的贵金属矿')
	event.create('dirty_golden_batch').displayName('污浊的贵金属矿')
	event.create('golden_batch').displayName('待分拣贵金属矿')

	event.create('rocky_nonmetal_batch').displayName('开采的非金属矿')
	event.create('dirty_nonmetal_batch').displayName('污浊的非金属矿')
	event.create('nonmetal_batch').displayName('待分拣非金属矿')

	event.create('rocky_redstone_batch').displayName('开采的通量矿')
	event.create('dirty_redstone_batch').displayName('污浊的通量矿')
	event.create('redstone_batch').displayName('待分拣通量矿')

	event.create('methane_ice').displayName('可燃冰').burnTime(3200)

	// --- 其他 ---
	event.create('crowbar', 'sword')
		.displayName('物理学圣剑')
		.tier('gold')
		.glow(true)
		.tooltip(Text.gold('内测玩家专属'))
		.attackDamageBaseline(4.0)
		.attackDamageBonus(6.0)
		.unstackable()
		.modifyTier(
			tier => {
				tier.uses = 1024
				tier.speed = 6.0
				tier.attackDamageBonus = 2.0
				tier.level = 4
				tier.enchantmentValue = 40
				tier.repairIngredient = '#forge:ingots/iron'
			}
		)
})

StartupEvents.registry('block', event => {

})

StartupEvents.registry('fluid', event => {
	event.create('test').thickTexture(0xFF0000).bucketColor(0xFF0000).displayName("测试流体").luminosity(8).temperature(65535)


	event.create('molten_gunpowder').thickTexture(0x777777).bucketColor(0x777777).displayName("液态火药").temperature(800)
	event.create('liquid_amethyst').thickTexture(0xB38EF3).bucketColor(0xB38EF3).displayName("熔融紫水晶").temperature(1000)
	event.create('liquid_crystal').thickTexture(0x2D3728).bucketColor(0x2D3728).displayName("介电液晶材料").temperature(300)


	event.create('molten_soul_sand').thickTexture(0x16605A).bucketColor(0x16605A).displayName("融化灵魂沙").temperature(1000)
	event.create('soul_oil').thickTexture(0x2C211B).bucketColor(0x2C211B).displayName("灵魂油").temperature(1200)
	event.create('cracked_soul_oil').thickTexture(0x2C211B).bucketColor(0x2C211B).displayName("裂化灵魂油").temperature(1200)
	event.create('molten_slug').thickTexture(0x695143).bucketColor(0x695143).displayName("液态熔渣").temperature(1000)

	event.create('molten_silicon').thickTexture(0x666666).bucketColor(0x666666).displayName("熔融硅").temperature(1000)

	//戈伯2
	event.create('raw_chlorite_gobbler').thickTexture(0x4E845A).bucketColor(0x4E845A).displayName("粗四氯戈伯").temperature(1200)
	event.create('pure_chlorite_gobbler').thickTexture(0x4EA5D4).bucketColor(0x4EA5D4).displayName("纯四氯戈伯").temperature(1200)
	event.create('molten_gobbler').thickTexture(0x87B9EA).bucketColor(0x87B9EA).displayName("熔融戈伯").temperature(1000)
	event.create('raw_chlorite_nether_gobbler').thickTexture(0x260717).bucketColor(0x260717).displayName("粗四氯下界戈伯").temperature(1200)
	event.create('pure_chlorite_nether_gobbler').thickTexture(0x6F284F).bucketColor(0x6F284F).displayName("纯四氯下界戈伯").temperature(1200)
	event.create('molten_nether_gobbler').thickTexture(0x9C3057).bucketColor(0x9C3057).displayName("熔融下界戈伯").temperature(1000)
	event.create('raw_chlorite_end_gobbler').thickTexture(0xCBC489).bucketColor(0xCBC489).displayName("粗四氯末地戈伯").temperature(1200)
	event.create('pure_chlorite_end_gobbler').thickTexture(0xEBF3B2).bucketColor(0xEBF3B2).displayName("纯四氯末地戈伯").temperature(1200)
	event.create('molten_end_gobbler').thickTexture(0x2FCC9A).bucketColor(0x2FCC9A).displayName("熔融末地戈伯").temperature(1000)

	//下界合金
	event.create('sulfuric_sodium').thinTexture(0xAAAAAA).bucketColor(0xAAAAAA).displayName("硫酸钠")
	event.create('sulfuric_ancient_debris').thinTexture(0x322623).bucketColor(0x322623).displayName("硫化远古残骸")


	//气动工艺
	event.create('ethylene').thickTexture(0xCCCCCC).bucketColor(0xCCCCCC).displayName("乙烯")
})
