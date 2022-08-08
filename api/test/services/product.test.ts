import connect, { MongodHelper } from '../db-helper'
import Product, { ProductDocument } from '../../src/models/Product'
import productService from '../../src/services/productService'

async function createProduct() {
  const product = new Product({
    title: 'Winter Melon Alisan Tea',
    prices: [7, 9],
    description: 'Refresh your hot day with fruity winter melon alisan tea',
    size: ['M', 'L'],
    image:
      'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-B%C3%AD-%C4%90ao-Alisan-2-768x768.png',
  })
  return await productService.createProduct(product)
}

describe('product service', () => {
  let mongodHelper: MongodHelper

  beforeAll(async () => {
    mongodHelper = await connect()
  })

  afterEach(async () => {
    await mongodHelper.clearDatabase()
  })

  afterAll(async () => {
    await mongodHelper.closeDatabase()
  })

  it('should create a new product', async () => {
    const product = await createProduct()
    expect(product).toHaveProperty('_id')
    expect(product).toHaveProperty('title', 'Winter Melon Alisan Tea')
    expect(product.prices).toContain(7)
    expect(product).toHaveProperty(
      'description',
      'Refresh your hot day with fruity winter melon alisan tea'
    )
  })

  it('should get a product with id', async () => {
    const product = await createProduct()
    const found = await productService.getProductById(product._id)
    expect(found?.title).toEqual(product.title)
    expect(found?._id).toEqual(product._id)
  })

  it('should update an existing product', async () => {
    const product = await createProduct()
    const update: Partial<ProductDocument> = {
      size: ['M'],
      prices: [7],
    }
    const updatedProduct = await productService.updateProduct(
      product._id,
      update
    )
    expect(updatedProduct).toHaveProperty('_id', product._id)
    expect(updatedProduct?.size).toContain('M'),
      expect(updatedProduct?.prices).toContain(7)
  })
  it('should not update a non-existing product', async () => {
    const nonExistingProductId = '62f11dd73a13ab28c004b70c'
    expect.assertions(1)
    const update: Partial<ProductDocument> = {
      size: ['M'],
      prices: [7],
    }
    return productService
      .updateProduct(nonExistingProductId, update)
      .catch((e) => {
        expect(e.message).toMatch('Product does not exist')
      })
  })
  it('should delete an existing product', async () => {
    const product = await createProduct()
    await productService.deleteProduct(product._id)
    return productService.getProductById(product._id).catch((e) => {
      expect(e.message).toMatch('Product does not exist')
    })
  })
})
