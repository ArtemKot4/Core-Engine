namespace Block {
    export const destroyFunctions: Record<number, Callback.DestroyBlockFunction> = {};
    export const destroyStartFunctions: Record<number, Callback.DestroyBlockFunction> = {};
    export const destroyContinueFunctions: Record<number, Callback.DestroyBlockContinueFunction> = {};

    export function setEmptyCollisionShape(id: number) {
        const render = new ICRender.Model();
        const model = BlockRenderer.createModel();
        const shape = new ICRender.CollisionShape();
        const entry = shape.addEntry();

        entry.addBox(0, 0, 0, 0, 0, 0);
        BlockRenderer.setCustomCollisionShape(id, -1, shape);
        render.addEntry(model);
    }
    
    export function setSolid(id: number, solid: boolean): void {
        com.zhekasmirnov.innercore.api.NativeBlock.setSolid(id, solid);
    }

    export function setRenderAllFaces(id: number, render: boolean): void {
        com.zhekasmirnov.innercore.api.NativeBlock.setRenderAllFaces(id, render);
    }

    export function setRenderType(id: number, type: number): void {
        com.zhekasmirnov.innercore.api.NativeBlock.setRenderType(id, type);
    }

    export function setRenderLayer(id: number, layer: number): void {
        com.zhekasmirnov.innercore.api.NativeBlock.setRenderLayer(id, layer);
    }

    export function setLightLevel(id: number, level: number): void {
        com.zhekasmirnov.innercore.api.NativeBlock.setLightLevel(id, level);
    }

    export function setLightOpacity(id: number, opacity: number): void {
        com.zhekasmirnov.innercore.api.NativeBlock.setLightOpacity(id, opacity);
    }

    export function setExplosionResistance(id: number, resistance: number): void {
        com.zhekasmirnov.innercore.api.NativeBlock.setExplosionResistance(id, resistance);
    }

    export function setFriction(id: number, friction: number): void {
        com.zhekasmirnov.innercore.api.NativeBlock.setFriction(id, friction);
    }

    export function setTranslucency(id: number, translucency: number): void {
        com.zhekasmirnov.innercore.api.NativeBlock.setTranslucency(id, translucency);
    }

    export function setSoundType(id: number, type: Sound): void {
        com.zhekasmirnov.innercore.api.NativeBlock.setSoundType(id, type);
    }

    export function setMapColor(id: number, color: number): void {
        com.zhekasmirnov.innercore.api.NativeBlock.setMapColor(id, color);
    }

    export function setBlockColorSource(id: number, source: ColorSource): void {
        com.zhekasmirnov.innercore.api.NativeBlock.setBlockColorSource(id, source);
    }

    export function setMaterialBase(id: number, base_id: number): void {
        com.zhekasmirnov.innercore.api.NativeBlock.setMaterialBase(id, base_id);
    }

    export function registerDestroyFunction(id: number, func: Callback.DestroyBlockFunction): void {
        destroyFunctions[typeof id === "string" ? IDRegistry.parseBlockID(id) : id] = func;
    }

    export function registerDestroyFunctionForID(id: number, func: Callback.DestroyBlockFunction): void {
        destroyFunctions[id] = func;
    }

    export function registerDestroyStartFunction(id: number, func: Callback.DestroyBlockFunction): void {
        destroyStartFunctions[typeof id === "string" ? IDRegistry.parseBlockID(id) : id] = func;
    }

    export function registerDestroyStartFunctionForID(id: number, func: Callback.DestroyBlockFunction): void {
        destroyStartFunctions[id] = func;
    }

    export function registerDestroyContinueFunction(id: number, func: Callback.DestroyBlockContinueFunction): void {
        destroyContinueFunctions[typeof id === "string" ? IDRegistry.parseBlockID(id) : id] = func;
    }

    export function registerDestroyContinueFunctionForID(id: number, func: Callback.DestroyBlockContinueFunction): void {
        destroyContinueFunctions[id] = func;
    }

    Callback.addCallback("DestroyBlockContinue", (coords, block, progress) => {
        const blockFunction = destroyContinueFunctions[block.id];
    
        if(blockFunction) {
            return blockFunction(coords, block, progress);
        }
    });
    
    Callback.addCallback("DestroyBlockStart", (coords, block, player) => {
        const blockFunction = destroyStartFunctions[block.id];
    
        if(blockFunction) {
            return blockFunction(coords, block, player);
        }
    });
    
    Callback.addCallback("DestroyBlock", (coords, block, player) => {
        const blockFunction = destroyFunctions[block.id];
    
        if(blockFunction) {
            return blockFunction(coords, block, player);
        }
    });
}
