import { Link, useParams } from 'react-router-dom'

const SingleProduct = () => {
  const { productId } = useParams()
  return (
    <section className='section product'>
      <h2>{productId}</h2>
      <Link to='/products' className='btn'>
        back to products
      </Link>
    </section>
  )
}

export default SingleProduct
