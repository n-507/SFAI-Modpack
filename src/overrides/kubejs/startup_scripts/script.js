
Platform.mods.kubejs.name = 'SnowFantasy Automated Industry'
StartupEvents.registry('item', event => {


	event.create('emergency_token').displayName("应急代币").tooltip(Text.gold("与坟墓之钥合成为其附魔")).tooltip(Text.gray("可以在物品栏中点击操作")).unstackable()

	event.create('test_item').displayName('测试物品')
	//event.create('admin.clean_item').displayName('物品清理器').unstackable().tooltip(Text.gray('清理半径16格内掉落物'))
	//event.create('admin.clean_entity').displayName('实体清理器').unstackable().tooltip(Text.gray('清理半径16格内非玩家实体'))

	event.create('no').displayName('无效配方').unstackable().tooltip(["此配方已被修改过！\n", "如您在查看手册时看到此物品，\n", "请查询JEI以了解实际的配方。"])

	//////////主线材料//////////
	//////阶段1：机械动力
	event.create('casing.andesite.inc').displayName('机械组件（安山合金）（未完成）').unstackable()
	event.create('casing.andesite').displayName('机械组件（安山合金）')
	event.create('casing.brass.inc').displayName('机械组件（黄铜）（未完成）').unstackable()
	event.create('casing.brass').displayName('机械组件（黄铜）')
	event.create('casing.copper.inc').displayName('机械组件（铜）（未完成）').unstackable()
	event.create('casing.copper').displayName('机械组件（铜）')
	event.create('casing.smart.inc').displayName('机械组件（电子管）（未完成）').unstackable()
	event.create('casing.smart').displayName('机械组件（电子管）')
	event.create('casing.train.inc').displayName('机械组件（坚固板）（未完成）').unstackable()
	event.create('casing.train').displayName('机械组件（坚固板）')
	//简易存储
	event.create('casing.sturdy.inc').displayName('机械组件（坚固木）（未完成）').unstackable()
	event.create('casing.sturdy').displayName('机械组件（坚固木）')
	//简单管道
	//event.create('casing.pp_upgrade.inc').displayName('管道升级模块（未完成）').unstackable()
	//event.create('casing.pp_upgrade_1').displayName('管道升级模块（等级1）')
	//event.create('casing.pp_upgrade_2').displayName('管道升级模块（等级2）')
	//event.create('casing.pp_upgrade_3').displayName('管道升级模块（等级3）')
	//////阶段2：神秘学
	event.create('casing.chalk.inc').displayName('粉笔套件（未完成）').unstackable()
	event.create('casing.chalk').displayName('粉笔套件').tooltip(Text.gray("可转换为任意颜色的粉笔"))
	event.create('casing.tome.inc').displayName('空白绑定之书（未完成）').unstackable()
	event.create('casing.tome').displayName('空白绑定之书').tooltip(Text.gray("可转换为任意类型的绑定之书"))
	//气动工艺
	event.create('casing.pnc_basic.inc').displayName('机械组件（压缩铁）（未完成）').unstackable()
	event.create('casing.pnc_basic').displayName('机械组件（压缩铁）')
	event.create('casing.pnc_adv.inc').displayName('机械组件（工程塑料）（未完成）').unstackable()
	event.create('casing.pnc_adv').displayName('机械组件（工程塑料）')
	event.create('casing.pnc_ult.inc').displayName('机械组件（装配青金石）（未完成）').unstackable()
	event.create('casing.pnc_ult.unw').displayName('机械组件（装配青金石）（未焊接）').unstackable()
	event.create('casing.pnc_ult').displayName('机械组件（装配青金石）')
	event.create('casing.pnc_drone').displayName('未配置的无人机')
	//模块化路由器
	//event.create('casing.router_module.inc').displayName('路由器模块（未完成）').unstackable()
	//event.create('casing.router_module').displayName('路由器模块')
	//event.create('casing.router_upgrade.inc').displayName('路由器升级（未完成）').unstackable()
	//event.create('casing.router_upgrade').displayName('路由器升级')
	//event.create('casing.router_arg.inc').displayName('路由器拓展（未完成）').unstackable()
	//event.create('casing.router_arg').displayName('路由器拓展').unstackable()
	//AE
	event.create('casing.me_panel.inc').displayName('ME面板（未完成）').unstackable()
	event.create('casing.me_basic.inc').displayName('机械组件（赛特斯）（未完成）').unstackable()
	event.create('casing.me_basic').displayName('机械组件（赛特斯）')
	event.create('casing.me_adv.inc').displayName('机械组件（福鲁伊克斯）（未完成）').unstackable()	//自动化用，需要阶段3
	event.create('casing.me_adv').displayName('机械组件（福鲁伊克斯）')	//自动化用，需要阶段3
	//////阶段3：热力膨胀
	event.create('casing.te_device.inc').displayName('机械组件（加固木）（未完成）').unstackable()
	event.create('casing.te_device').displayName('机械组件（加固木）')
	event.create('casing.te_machine.inc').displayName('机械组件（复杂机械）（未完成）').unstackable()
	event.create('casing.te_machine').displayName('机械组件（复杂机械）')
	//////阶段4：MEK
	event.create('casing.mek.inc').displayName('机械组件（灌注钢）（未完成）').unstackable()
	event.create('casing.mek').displayName('机械组件（灌注钢）').unstackable()
	event.create('casing.mek_chem.inc').displayName('机械组件（强化锇）（未完成）').unstackable()
	event.create('casing.mek_chem').displayName('机械组件（强化锇）')

	//////////零件//////////
	//机械动力
	event.create('comp.create.raw_andesite').displayName('粗制安山合金')
	event.create('comp.create.belt.inc').displayName('传送带（未完成）').unstackable()

	//气动工艺
	event.create('comp.pncr.chamber_wall.inc').displayName('压力室墙壁（未完成）').unstackable()
	event.create('comp.pncr.cyl.inc').displayName('压力缸（未完成）').unstackable()
	event.create('comp.pncr.lapis_cell').displayName('青金石晶圆')
	event.create('comp.pncr.lapis_cell.unw').displayName('已切割的青金石')

	//热力
	event.create('comp.te.coil.0').displayName('通量线圈（0%）')
	event.create('comp.te.coil.1').displayName('通量线圈（20%）')
	event.create('comp.te.coil.2').displayName('通量线圈（40%）')
	event.create('comp.te.coil.3').displayName('通量线圈（60%）')
	event.create('comp.te.coil.4').displayName('通量线圈（80%）')
	event.create('comp.te.crystal').displayName('通量水晶')
	event.create('comp.te.dynamo_coil.inc').displayName('励磁线圈（空）')
	event.create('comp.te.dynamo_coil').displayName('励磁线圈')
	event.create('comp.te.servo').displayName('红石伺服器（空）')
	event.create('comp.te.servo.unw').displayName('红石伺服器（未焊接）')

	//mek
	event.create('comp.mek.installer.inc').displayName('工厂安装器（未完成）').unstackable()

	//AE
	event.create('comp.ae.doped_silicon').displayName('赛特斯掺杂单晶硅')
	event.create('comp.ae.silicon.1').displayName('赛特斯掺杂单晶硅（0%）')
	event.create('comp.ae.silicon.2').displayName('赛特斯掺杂单晶硅（25%）')
	event.create('comp.ae.silicon.3').displayName('赛特斯掺杂单晶硅（50%）')
	event.create('comp.ae.silicon.4').displayName('赛特斯掺杂单晶硅（75%）')
	event.create('comp.ae.silicon').displayName('单晶硅')

	//通用零件
	event.create('comp.board.redstone').displayName("红石集成电路")
	event.create('comp.board.lapis').displayName("青金石集成电路")
	event.create('comp.board.blaze').displayName("烈焰集成电路")
	event.create('comp.board.ender').displayName("末影集成电路")
	event.create('comp.board.dragon').displayName("龙钢集成电路")
	event.create('comp.board.redstone.inc').displayName("红石集成电路(未完成)").unstackable()
	event.create('comp.board.lapis.inc').displayName("青金石集成电路(未完成)").unstackable()
	event.create('comp.board.blaze.inc').displayName("烈焰集成电路(未完成)").unstackable()
	event.create('comp.board.ender.inc').displayName("末影集成电路(未完成)").unstackable()
	event.create('comp.board.dragon.inc').displayName("龙钢集成电路(未完成)").unstackable()

	event.create('comp.cpu.scalar.inc').displayName('标量运算单元（未完成）').unstackable()
	event.create('comp.cpu.vector.inc').displayName('向量运算单元（未完成）').unstackable()
	event.create('comp.cpu.matrix.inc').displayName('矩阵运算单元（未完成）').unstackable()
	event.create('comp.cpu.tensor.inc').displayName('张量运算单元（未完成）').unstackable()
	event.create('comp.cpu.infiar.inc').displayName('无量运算单元（未完成）').unstackable()
	event.create('comp.cpu.scalar').displayName('标量运算单元')
	event.create('comp.cpu.vector').displayName('向量运算单元')
	event.create('comp.cpu.matrix').displayName('矩阵运算单元')
	event.create('comp.cpu.tensor').displayName('张量运算单元')
	event.create('comp.cpu.infiar').displayName('无量运算单元')

	event.create('comp.interface.inc').displayName('用户界面（未完成）').unstackable()
	event.create('comp.interface').displayName('用户界面')

	event.create('comp.aicore.basic').displayName('次级智能芯片')
	event.create('comp.aicore.standard').displayName('标准智能芯片')
	event.create('comp.aicore.advanced').displayName('高级智能芯片')

	event.create('comp.glass_bulb').displayName('玻璃泡')
	event.create('comp.etube.base').displayName('电子管电极')
	event.create('comp.etube.inc').displayName('电子管（未完成）').unstackable()

	event.create('comp.rubber').displayName('橡胶条')
	event.create('comp.rubber.sheet').displayName('橡胶片')

	event.create('comp.dml.data_model.inc').displayName('空白数据模型（未激活）')
	//配方序号
	//event.create('selcard.0').displayName('配方序号（未设定）').unstackable()
	//event.create('selcard.1').displayName('配方序号（1号）').unstackable()
	//event.create('selcard.2').displayName('配方序号（2号）').unstackable()
	//event.create('selcard.3').displayName('配方序号（3号）').unstackable()
	//event.create('selcard.4').displayName('配方序号（4号）').unstackable()
	//event.create('selcard.5').displayName('配方序号（5号）').unstackable()
	//event.create('selcard.6').displayName('配方序号（6号）').unstackable()
	//event.create('selcard.7').displayName('配方序号（7号）').unstackable()
	//event.create('selcard.8').displayName('配方序号（8号）').unstackable()
	//event.create('selcard.9').displayName('配方序号（9号）').unstackable()
	//event.create('selcard.10').displayName('配方序号（10号）').unstackable()
	//event.create('selcard.11').displayName('配方序号（11号）').unstackable()
	//event.create('selcard.12').displayName('配方序号（12号）').unstackable()
	//event.create('selcard.13').displayName('配方序号（13号）').unstackable()
	//event.create('selcard.14').displayName('配方序号（14号）').unstackable()
	//event.create('selcard.15').displayName('配方序号（15号）').unstackable()
	//event.create('selcard.16').displayName('配方序号（16号）').unstackable()

	//occultism仪式物品
	event.create('dummy.occultism.aicore.basic').displayName('仪式：制作低级AI')
	event.create('dummy.occultism.aicore.standard').displayName('仪式：制作中级AI')
	event.create('dummy.occultism.aicore.advanced').displayName('仪式：制作高级AI')

	//创造物品
	event.create('comp.matter.nugget').displayName('物质粒')
	event.create('comp.matter.ingot').displayName('物质锭')
	event.create('comp.antimatter.ingot').displayName('反物质锭')
	event.create('comp.creativifier').displayName('创造代币')
})

StartupEvents.registry('fluid', event => {
	event.create('test').thickTexture(0xFF0000).bucketColor(0xFF0000).displayName("测试流体").luminosity(8).temperature(65535)

	event.create('liquid_amethyst').thickTexture(0xB38EF3).bucketColor(0xB38EF3).displayName("熔融紫水晶").temperature(1000)
	event.create('liquid_crystal').thickTexture(0x2D3728).bucketColor(0x2D3728).displayName("介电液晶材料").temperature(300)

	event.create('liquid_spirit_fire').thickTexture(0xbb77ee).bucketColor(0xbb77ee).displayName("液态灵火").luminosity(12).temperature(300)

	event.create('liquid_soldering_material').thickTexture(0x888888).bucketColor(0x888888).displayName('焊料').temperature(800)

	event.create('drill_fluid').thinTexture(0xCCCC88).bucketColor(0xCCCC88).displayName('钻井液')
	event.create('drill_fluid_metallic').thinTexture(0xCCCCCC).bucketColor(0xCCCC88).displayName('高强度钻井液')
	event.create('drill_fluid_netherite').thinTexture(0x463D3E).bucketColor(0x463D3E).displayName('下界合金钻井液')
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

})