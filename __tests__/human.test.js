import Human from './../src/js/human.js'

describe('Human', () => {
  
  let human;
  beforeEach(() => {
    human = new Human(30, 5, 15, 25)
  });

test('Should correctly construct Human-object with age and attribute properties', () => {
    expect(human).toEqual( {"age": 30, "attr1": 5, "attr2": 15, "attr3": 25, "lifeExpectancy": 100} );
  });
test('Should correctly calculate Earth-life-expectancy based on user-attributes', () => {
    expect(human.calcAdjustedLifeExpectancy()).toEqual(105);
  });
test('Should correctly calculate how many solar life years that user either has remaining or has surpassed in expectancy on respective planet', () => {
    let expectancyAge = human.calcAdjustedLifeExpectancy();
    expect(human.compareAgeAndLifeExpectancies(human.age, expectancyAge)).toEqual(75);
    let currentAge = 110;
    expect(human.compareAgeAndLifeExpectancies(currentAge, expectancyAge)).toEqual(5);
  });
});  
