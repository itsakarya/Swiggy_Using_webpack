import { createDishCard } from "./foodCardDishItemsComponent/foodCardItemContainer";


export function createResturantDishesCard(parentId) {

  const arr=[{
    icon:'<img class="center-body-card-dish-icon-modify" src="/src/assets/img1.png">',
    dishName:"Veg Crystal Dimsums",
    price:'<i class="bi bi-currency-rupee "></i>269',
    description:"Needs no introduction- bite size steamed dumplings stuffed with <br> corn, spinach & other vegetables in Asian flavours and served with <br> auntie's in-house XO sauce",
    image:'<img alt="Veg Crystal Dimsums" class="styles_itemImage__3CsDL" loading="lazy" width="150" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qcjx4eiwq8wfbvd8a8v8">',
    subElemenLefttId: "CardNo1Left",
    subElementRightId: "CardNo1rightt",
    individualId:"cardNo1",
    parentId:parentId,
    btnId:"btn1"
  },
  {
    icon:'<img class="center-body-card-dish-icon-modify" src="/src/assets/img1.png">',
    dishName:"Chicken Crystal Dimsums",
    price:'<i class="bi bi-currency-rupee icon-modify"></i>269',
    description:"|Serves 1-2|Needs no introduction- bite size steamed dumplings <br> stuffed with chicken & cilantro with Asian flavours and served with <br> auntie's in-house xo sauce.",
    image:'<img alt="Chicken Crystal Dimsums" class="styles_itemImage__3CsDL" loading="lazy" width="256" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nrkybvr5qpjplej2zjln">',
    subElemenLefttId: "CardNo2Left",
    subElementRightId: "CardNo2rightt",
    individualId:"cardNo2",
    parentId:parentId,
    btnId:"btn2"
  },
  {
      icon:'<img class="center-body-card-dish-icon-modify" src="/src/assets/img1.png">',
      dishName:"Chicken Crystal Dimsums",
      price:'<i class="bi bi-currency-rupee icon-modify"></i>269',
      description:"|Serves 1-2|Needs no introduction- bite size steamed dumplings <br> stuffed with chicken & cilantro with Asian flavours and served with <br> auntie's in-house xo sauce.",
      image:'<img alt="Chicken Crystal Dimsums" class="styles_itemImage__3CsDL" loading="lazy" width="256" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nrkybvr5qpjplej2zjln">',
      subElemenLefttId: "CardNo3Left",
      subElementRightId: "CardNo3rightt",
      individualId:"cardNo3",
      parentId:parentId,
      btnId:"btn3"
  }];
  
    arr.map(createDishCard);

}

