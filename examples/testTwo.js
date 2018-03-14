const {
  sut,
  def,
  assert
} = require('../index');

require('./helpers');

let anotherCoolTest = () => {
  def('string test', () => {
    assert.equal(
      sut.helper.exclime('a'), 'a'
    );
  });
};

sut(
  anotherCoolTest,
  sut.getStats
);
