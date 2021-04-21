function test() {
  let comment: string = 'TEST';
  comment = '5';
  console.log(comment);
}

class Test2 {
  constructor() {
    console.log('TEST 2');
  }
}

test();
new Test2();