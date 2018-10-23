const { map, filter, reduce } = require('./core')

describe('map, filter, reduce plugins', () => {
  describe('map', () => {
    it('transforms non-arrays', () => {
      expect(map(item => item * 2, 1)).toEqual([2])
    })
    it('transforms arrays', () => {
      expect(map(str => str.toUpperCase(), ['a','b'])).toEqual(['A', 'B'])
    })
  })

  describe('filter', () => {
    it('works with non-array', () => {
      expect(filter(item => item > 0, 1)).toEqual([1])
    })

    it('filters out an item as expected', () => {
      expect(filter(item => item % 2 === 0, [1, 2])).toEqual([2])
    })
  })

  describe('reduce', () => {
    it('works with non-array', () => {
      expect(reduce((acc, item) => acc + item, '0', 1)).toEqual('01')
    })

    it('reduces an array', () => {
      expect(reduce((acc, item) => acc + item, 0, [1, 2, 3])).toEqual(6)
    })
  })
})
