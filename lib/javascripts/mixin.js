function Mixin(target, source) {
  target = target.prototype; source = source.prototype;

  Object.getOwnPropertyNames(source).forEach(function (name) {
    if (name !== "constructor") {
      Object.defineProperty(target, name,
                            Object.getOwnPropertyDescriptor(source, name));
    }
  });
}

module.exports = Mixin;
