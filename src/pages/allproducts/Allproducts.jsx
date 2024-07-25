import { useContext, useEffect } from 'react';
import Filter from '../../components/filter/Filter';
import Layout from '../../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/CartSlice';
import myContext from '../../context/data/myContext';

const priceRanges = {
  '100-1000': { min: 100, max: 1000 },
  '1000-5000': { min: 1000, max: 5000 },
  '5000-10000': { min: 5000, max: 10000 },
  '10000-100000': { min: 10000, max: 100000 },
};

function Allproducts() {
  const context = useContext(myContext);
  const { mode, product, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart');
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resetFilters = () => {
    setSearchkey('');
    setFilterType('');
    setFilterPrice('');
  };

  const filteredProducts = product
    .filter((obj) => obj.title.toLowerCase().includes(searchkey.toLowerCase()))
    .filter((obj) => filterType === '' || obj.category.toLowerCase() === filterType.toLowerCase())
    .filter((obj) => {
      if (filterPrice === '') return true;
      const { min, max } = priceRanges[filterPrice];
      return obj.price >= min && obj.price <= max;
    });

  return (
    <Layout>
      <Filter resetFilters={resetFilters} />
      <section className={`text-gray-600 body-font ${mode === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container px-4 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1
              className={`sm:text-3xl text-2xl font-medium title-font mb-2 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}
            >
              Our Latest Collection
            </h1>
            <div className="h-1 w-20 bg-pink-600 rounded"></div>
          </div>

          <div className="flex flex-wrap -m-4">
            {filteredProducts.map((item, index) => {
              const { title, price, imageUrl, id } = item;
              return (
                <div key={index} className="p-4 md:w-1/2 lg:w-1/4 w-full">
                  <div
                    className={`h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden ${mode === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
                    style={{ height: 'auto' }} // Ensure height adjusts based on content
                  >
                    <div onClick={()=> window.location.href = `/productinfo/${id}`} className="relative flex justify-center items-center overflow-hidden cursor-pointer">
                      <img
                        className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-100"
                        src={imageUrl}
                        alt={title}
                      />
                    </div>
                    <div
                      className={`p-5 border-t-2 ${mode === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col justify-between`}
                      style={{ minHeight: '150px' }} // Ensure a minimum height for content area
                    >
                      <div className="overflow-hidden">
                        <h2
                          className={`tracking-widest text-xs title-font font-medium text-gray-400 mb-1 ${mode === 'dark' ? 'text-white' : 'text-gray-400'}`}
                        >
                          A-Store
                        </h2>
                        <h1
                          className={`title-font text-lg font-medium mb-3 truncate ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}
                          style={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            WebkitLineClamp: 2, // Adjust number of lines if needed
                          }}
                        >
                          {title}
                        </h1>
                      </div>
                      <p
                        className={`leading-relaxed mb-3 font-semibold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}
                      >
                        ₹ {price}
                      </p>
                      <div className="flex justify-center">
                        <button
                          type="button"
                          onClick={() => addCart(item)}
                          className="focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Allproducts;
