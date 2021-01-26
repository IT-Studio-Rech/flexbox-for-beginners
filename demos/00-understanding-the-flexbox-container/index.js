import('../../utils/doc-ready.js').then((module) => {
  module.docReady(() => {
    import('../../utils/class-handler.js').then((module) => {
      module.classHandler('.container');
    });
  });
});
