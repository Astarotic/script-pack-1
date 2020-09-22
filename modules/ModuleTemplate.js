// TODO Change this field to your module's name, all uppercase.
const MY_MODULE = {
  // TODO Change this string value to the field name above.
  name: 'MY_MODULE',
  // TODO Change this string value to a human readable name.
  // Your players will see this in messages and the help menu.
  toString: () => '[📐 My Module]',
  execute: function(text) {
    if (this.isEnabled()) {
      // TODO Your module's logic goes here.
    }
  },
  initialize: function() {
  // TODO Change this property to your module's name.
    state.myModule = Object.seal({
      // TODO Your module's properties go here.
    });
  },
  destroy: function() {
  // TODO Change this property to your module's name.
    state.myModule = null;
  },
  isEnabled: function() {
  // TODO Change this property to your module's name.
    return Boolean(state.myModule);
  },
  disable: function() {
    if (this.isEnabled()) {
      this.destroy();
      return true;
    }
    return false;
  },
  enable: function() {
    if (!this.isEnabled()) {
      this.initialize();
      return true;
    }
    return false;
  },
  getHelpText: function() {
    const enabled = this.isEnabled();
    const cmd = this.name.toLowerCase();
    return (enabled ? ICON_ON : ICON_OFF) + ' ' + this.toString() + ' '
      + ICON_TYPE + ' /' + cmd + ' to ' + (enabled ? 'disable' : 'enable')
      + '.\n';
  }
}
