class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'minecrafttools', // change this if you make an actual extension!
      name: 'Minecraft Tools',
      blocks: [
        {
          opcode: 'setinangle',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'set your minecraft character to [ANGLE]',
          arguments: {
            ANGLE: {
              type: Scratch.ArgumentType.ANGLE,
              defaultValue: '90'
            }
          }
        }
      ]
    };
  }
  setinangle() {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return "Error";
  }
}
Scratch.extensions.register(new StrictEqualityExtension());
