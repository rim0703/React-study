import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MenuPage() {
  const { category, id } = useParams();

  const Dummy = {
    burgers: [
      {
        name: "빅맥",
        price: 5500,
        description:
          "비프 패티 두 장과 신선한 양상추, 치즈, 그리고 스페셜 소스가 들어간 맥도날드의 대표 메뉴.",
        image: "/img/1.png",
      },
      {
        name: "맥스파이시 상하이 버거",
        price: 5200,
        description:
          "매콤한 상하이 치킨 패티와 신선한 야채, 매콤한 소스가 어우러진 버거.",
        image: "/img/2.png",
      },
      {
        name: "치즈버거",
        price: 3000,
        description: "비프 패티와 치즈, 피클, 케첩이 들어간 클래식 치즈버거.",
        image: "/img/3.png",
      },
    ],
    chicken: [
      {
        name: "치킨 맥너겟",
        price: 4000,
        description:
          "바삭하고 부드러운 치킨 너겟, 선택 가능한 다양한 소스와 함께 즐길 수 있습니다.",
        image: "/img/4.png",
      },
    ],
    sides: [
      {
        name: "감자튀김",
        price: 2500,
        description: "맥도날드만의 고유한 바삭함을 자랑하는 감자튀김.",
        image: "/img/5.png",
      },
      {
        name: "치즈 스틱",
        price: 2800,
        description: "바삭한 튀김 안에 고소한 치즈가 가득한 치즈 스틱.",
        image: "/img/6.png",
      },
    ],
    drinks: [
      {
        name: "코카콜라",
        price: 1500,
        description: "시원하고 톡 쏘는 코카콜라 음료.",
        image: "/img/8.png",
      },
      {
        name: "아이스 아메리카노",
        price: 3000,
        description: "시원하고 깔끔한 맛의 아이스 아메리카노.",
        image: "/img/7.png",
      },
    ],
    desserts: [
      {
        name: "맥플러리 오레오",
        price: 3000,
        description: "부드러운 아이스크림과 바삭한 오레오 쿠키의 달콤한 만남.",
        image: "/img/9.png",
      },
      {
        name: "콘 아이스크림",
        price: 1000,
        description: "고소한 바닐라 아이스크림이 올라간 콘.",
        image: "/img/10.png",
      },
    ],
  };
  const thisMenu = Dummy[category][id];
  const [exist, setExist] = useState(false);
  const [count, setCount] = useState(0);

  const cartCheck = () => {
    if (localStorage.getItem("cart")) {
      const currentCart = JSON.parse(localStorage.getItem("cart"));
      currentCart.forEach((item) => {
        if (item.name === thisMenu.name) {
          setExist(true);
          setCount(item.count);
        }
      });
    } else {
      localStorage.setItem("cart", []);
    }
  };

  useEffect(() => {
    cartCheck();
  }, [count]);

  return (
    <section class="py-8 bg-white md:py-16 ">
      <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img class="w-full" src={thisMenu.image} alt="" />
          </div>

          <div class="mt-6 sm:mt-8 lg:mt-0">
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl ">
              {thisMenu.name}
            </h1>
            <p class="mb-6 text-gray-500 ">{Dummy[category][id].description}</p>
            <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl ">
                {thisMenu.price}원
              </p>
            </div>
            <hr class="my-6 md:my-8 border-gray-200 " />
            <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <a
                href="#"
                title=""
                class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                role="button"
                onClick={() => {
                  const currentCart =
                    localStorage.getItem("cart") !== ""
                      ? JSON.parse(localStorage.getItem("cart"))
                      : [];

                  let exist = false;
                  currentCart.forEach((item) => {
                    if (item.name == thisMenu.name) {
                      exist = true;
                      item.count++;
                      setCount(item.count);
                    }
                  });
                  if (!exist) {
                    thisMenu.count = 1;
                    setCount(thisMenu.count);
                    currentCart.push(thisMenu);
                  }
                  localStorage.setItem("cart", JSON.stringify(currentCart));
                }}
              >
                <svg
                  class="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                {exist ? "더 추가하기" : "장바구니 추가"}
              </a>

              {exist ? (
                <div
                  class="mt-6 p-2 mb-6 text-sm text-yellow-800 rounded-lg bg-yellow-50 "
                  role="alert"
                  style={{ width: "300px" }}
                >
                  해당 상품은 장바구니에 {count}개 담겨있습니다.
                </div>
              ) : (
                ""
              )}
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
