const Bellboy = require('./bellboy')

describe('Bellboy:', () => {
  let bb
  beforeEach(() => {
    bb = new Bellboy()
  })

  describe('mix', () => {
    it('is available', () => {
      expect(typeof bb.mix).toEqual('function')
    })

    it('properly sets mix-ed function', () => {
      expect(bb.hello).toBeUndefined()
      bb.mix('hello')
      expect(typeof bb.hello).toEqual('function')
    })

    it('enables mix-ed function to be properly called', () => {
      const mock = jest.fn()
      bb.mix('hello', mock)
      bb.hello()
      expect(mock).toHaveBeenCalledTimes(0)
      bb.hello().please()
      expect(mock).toHaveBeenCalledTimes(1)
    })
  })

  describe('catch', () => {
    it('is available', () => {
      expect(typeof bb.catch).toEqual('function')
    })

    it('catch returns this', () => {
      expect(bb.catch(() => {})).toBe(bb)
    })

    it('catch gets a mixin exception', () => {
      const mock = jest.fn()
      bb.mix('test', () => 1 + a)
      bb.test().catch(mock).please()
      expect(mock).toHaveBeenCalledTimes(1)
      expect(mock).toHaveBeenLastCalledWith(ReferenceError('a is not defined'))
    })
  })

  describe('please', () => {
    it('is available', () => {
      expect(typeof bb.please).toEqual('function')
    })

    it('returns undefined', () => {
      expect(bb.please()).toBeUndefined()
    })

    it('respects invocation order', async () => {
      const order = []
      const mock1 = jest.fn(() => order.push('mock1'))
      const mock2 = jest.fn(() => order.push('mock2'))

      bb.mix('mock1', mock1)
      bb.mix('mock2', mock2)
      await bb.mock1().mock2().please()

      expect(order).toEqual(['mock1', 'mock2'])
    })

    it('passes results around', async () => {
      const receiver = jest.fn()

      bb.mix('test', jest.fn(() => 'correct message'))
      bb.mix('receiver', receiver)

      await bb.test().receiver().please()
      expect(receiver).toHaveBeenCalledTimes(1)
      expect(receiver).toHaveBeenCalledWith('correct message')
    })
  })
})
