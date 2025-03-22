import React, { useEffect, useState } from "react";

export default function Cart() {
  const [total, setTotal] = useState(0);
  const [cartItem, setCartItem] = useState(null);

  const checkCartStatus = () => {
    if (localStorage.getItem("cart")) {
      setCartItem(JSON.parse(localStorage.getItem("cart")));
    } else {
      localStorage.setItem("cart", []);
    }
  };

  const calculateTotal = () => {
    let currentPrice = 0;
    cartItem?.forEach((item) => {
      const itemTotalPrice = item.count * item.price;
      currentPrice += itemTotalPrice;
    });
    setTotal(currentPrice);
  };

  const changeQuantity = (type, item) => {
    if (type === "add") {
      if (item.count === 99) return;
      cartItem.forEach((cart) => {
        if (cart.name === item.name) cart.count++;
      });
    } else {
      if (item.count === 1) return;
      cartItem.forEach((cart) => {
        if (cart.name === item.name) cart.count--;
      });
    }
    localStorage.setItem("cart", JSON.stringify(cartItem));
    calculateTotal();
  };

  const removeItem = (item) => {
    // console.log("delete", item);
    // let tempCartList = [];
    // cartItem.map((cart) => {
    //   console.log(cart);
    //   if (cart.name != item.name) {
    //     tempCartList.push(item);
    //   }
    // });
    // setCartItem(tempCartList);
    // console.log(tempCartList);
    // localStorage.setItem("cart", JSON.stringify(tempCartList));
    // if (tempCartList.length == 0) localStorage.setItem("cart", []);
    // calculateTotal();
  };

  useEffect(() => {
    checkCartStatus();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cartItem]);

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">장바구니</h1>
      <div className="text-center">
        {total != 0 ? (
          <>
            {" "}
            <>
              <div className="container mx-auto " style={{ width: "400px" }}>
                <div className="mt-8">
                  {cartItem.map((item, index) => (
                    <div
                      key={item.image}
                      className="flex flex-col md:flex-row border-b border-gray-400 py-4"
                    >
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt="Product image"
                          className="w-32 h-32 object-cover"
                        />
                      </div>
                      <div
                        className="mt-4 md:mt-0 md:ml-6"
                        style={{ marginLeft: "20px", textAlign: "left" }}
                      >
                        <h2 className="text-lg font-bold">
                          {item.name} ({item.price}원)
                        </h2>

                        <div className="mt-4 flex items-center">
                          <span className="mr-2 text-gray-600">수량</span>
                          <div className="flex items-center">
                            <button
                              className="bg-gray-200 rounded-l-lg px-2 py-1"
                              onClick={() => changeQuantity("remove", item)}
                            >
                              -
                            </button>
                            <span className="mx-2 text-gray-600">
                              {item.count}
                            </span>
                            <button
                              className="bg-gray-200 rounded-r-lg px-2 py-1"
                              onClick={() => changeQuantity("add", item)}
                            >
                              +
                            </button>
                          </div>
                          <span
                            className="ml-auto font-bold"
                            style={{ marginLeft: "20px" }}
                          >
                            {item.price * item.count}원
                            <svg
                              className="w-5 h-5 text-gray-800"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                              style={{ display: "inline" }}
                              onClick={() => {
                                removeItem(item);
                              }}
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end items-center mt-8">
                  <span className="text-gray-600 mr-4">총:</span>
                  <span className="text-xl font-bold">{total}원</span>
                </div>
                <button
                  className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded-full"
                  onClick={() => {
                    localStorage.removeItem("cart");
                    window.location.reload();
                  }}
                >
                  장바구니 비우기
                </button>
              </div>{" "}
            </>
          </>
        ) : (
          <h1>장바구니에 담긴 상품이 없습니다.</h1>
        )}
      </div>
    </div>
  );
}
