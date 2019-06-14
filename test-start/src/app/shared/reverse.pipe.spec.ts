import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('should reverse a word', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('book')).toEqual('koob');
  });
});
