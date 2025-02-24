ModAPI.registerAPI("SquidCore", {
    MathHelper: MathHelper,
    Utils: Utils,
    RenderHelper: RenderHelper,
    RenderSide: RenderSide,
    BlockAnimation: BlockAnimation,
    EDestroyLevel: EDestroyLevel,
    Vector3: Vector3,
    ItemStack: ItemStack,
    BasicBlock: BasicBlock,
    BlockModel: BlockModel,
    BlockPlant: BlockPlant,
    Bark: Bark,
    Hewn: Hewn,
    Log: Log,
    Planks: Planks,
    RotatableLog: RotatableLog,
    BasicItem: BasicItem,
    Command: Command,
    ClientCommand: ClientCommand,
    ServerCommand: ServerCommand,
    CommonTileEntity: CommonTileEntity,
    LocalTileEntity: LocalTileEntity,
    NetworkEvent: NetworkEvent,
    ContainerEvent: ContainerEvent,
    WorldSaves: WorldSaves,
    requireGlobal: function(command: string) {
		return eval(command);
	}
})