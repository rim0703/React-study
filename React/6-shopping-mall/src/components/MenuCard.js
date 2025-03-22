import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuCard() {
  const [category, setCategory] = useState("all");

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

  const menuCategory = ["burgers", "chicken", "sides", "drinks", "desserts"];

  return (
    <>
      <div class="menu-container">
        <h2 id="category-title">{category === "all" ? "전체메뉴" : ""}</h2>

        {menuCategory.map((menuCate) =>
          Dummy[menuCate].map((item, index) => (
            <Link to={`/${menuCate}/${index}`}>
              <section id="menu-item" class="menu-section mx-auto">
                <div class="menu-item">
                  <img src={item.image} />
                  <div>
                    <div class="menu-name">{item.name}</div>
                    <div class="menu-price">{item.price}원</div>
                    <div class="menu-description">{item.description}</div>
                  </div>
                </div>
              </section>{" "}
            </Link>
          ))
        )}
      </div>
    </>
  );
}
