const foodItems = [
  // ⭐ Popular Dishes
  { id: 1, name: "Veggie Pizza", price: 299, img: "https://images.squarespace-cdn.com/content/v1/54358a91e4b0d0810faf81fe/1596481351560-NU8K8NWF4DQYE4HH418W/simple-veggie-pizza-homemade-sauce.jpg", page: "buy.html", section: "Popular Dishes" },
  { id: 2, name: "Cheese Burger", price: 199, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80", page: "buy1.html", section: "Popular Dishes" },
  { id: 3, name: "Cold Coffee", price: 149, img: "https://meijerspecialtypharmacy.com/wp-content/uploads/2019/08/Classic-Iced-Coffee.jpg", page: "buy2.html", section: "Popular Dishes" },
  { id: 4, name: "Italian Pasta", price: 249, img: "https://i-media.vyaparify.com/vcards/blogs/66036/Italian-Pasta-Creations.jpg", page: "buy3.html", section: "Popular Dishes" },
  { id: 5, name: "French Fries", price: 100, img: "https://goldenfingers.us/wp-content/uploads/2020/03/french_fry.jpg", page: "buy4.html", section: "Popular Dishes" },
  { id: 6, name: "Grilled Sandwich", price: 120, img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80", page: "buy5.html", section: "Popular Dishes" },
  { id: 7, name: "Chocolate Shake", price: 130, img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=400&q=80", page: "buy6.html", section: "Popular Dishes" },
  { id: 8, name: "Paneer Tikka", price: 220, img: "https://myfoodstory.com/wp-content/uploads/2017/02/Oven-Baked-Tandoori-Paneer-Tikka-2.jpg", page: "buy7.html", section: "Popular Dishes" },
  { id: 9, name: "Masala Dosa", price: 180, img: "https://vismaifood.com/storage/app/uploads/public/609/3dc/1d7/6093dc1d77053892307086.jpg", page: "buy8.html", section: "Popular Dishes" },
  { id: 10, name: "Samosa", price: 50, img: "http://www.zedamagazine.com/wp-content/uploads/2018/06/Indian-Food-Samosa-Dish-HD-Wallpapers.jpg", page: "buy9.html", section: "Popular Dishes" },

  // 🍳 All Day Breakfast
  { id: 11, name: "Poha", price: 80, img: "https://media.vogue.in/wp-content/uploads/2020/10/poha-recipe-1920x1080.jpg", page: "buy10.html", section: "All Day Breakfast" },
  { id: 12, name: "Plain Dosa", price: 90, img: "https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg", page: "buy11.html", section: "All Day Breakfast" },
  { id: 13, name: "Idli Sambar", price: 120, img: "https://www.196flavors.com/wp-content/uploads/2022/09/Idli-Sambar-1-1024x1536.jpg", page: "buy12.html", section: "All Day Breakfast" },
  { id: 14, name: "Upma", price: 70, img: "https://www.seema.com/wp-content/uploads/2022/08/Upma.jpg", page: "buy13.html", section: "All Day Breakfast" },
  { id: 15, name: "Aloo Paratha", price: 100, img: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2016/12/mooli-paratha-recipe-step-by-step-instructions.jpg?fit=1704,1450&quality=65&strip=all&ssl=1", page: "buy14.html", section: "All Day Breakfast" },
  { id: 16, name: "Veg Sandwich", price: 90, img: "https://s-media-cache-ak0.pinimg.com/originals/d5/48/b5/d548b5f9983c73f259d6dc6eab03ebd5.jpg", page: "buy15.html", section: "All Day Breakfast" },
  { id: 17, name: "Sabudana Khichdi", price: 110, img: "https://www.ruchiskitchen.com/wp-content/uploads/2018/03/Sabudana-Khichdi-Recipe-08.jpg", page: "buy16.html", section: "All Day Breakfast" },
  { id: 18, name: "Masala Omelette", price: 70, img: "http://maunikagowardhan.co.uk/wp-content/uploads/2012/09/Masala-Omelette-32.jpg", page: "buy17.html", section: "All Day Breakfast" },
  { id: 19, name: "Besan Chilla", price: 80, img: "https://www.whiskaffair.com/wp-content/uploads/2020/03/Besan-Chilla-1-1-1200x1800.jpg", page: "buy18.html", section: "All Day Breakfast" },
  { id: 20, name: "Masala Chai", price: 30, img: "https://masalaandchai.com/wp-content/uploads/2021/07/Masala-Chai-Featured.jpg", page: "buy19.html", section: "All Day Breakfast" },

  // 🥪 Brunch Specials
  { id: 21, name: "Veg Club Sandwich", price: 150, img: "https://www.veganricha.com/wp-content/uploads/2023/05/Club-Sandwich-with-Tofu-Meat-9030.jpg", page: "buy20.html", section: "Brunch Specials" },
  { id: 22, name: "Paneer Paratha", price: 130, img: "https://traditionallymodernfood.com/wp-content/uploads/2021/05/paneer-paratha-2048x2048.jpeg", page: "buy21.html", section: "Brunch Specials" },
  { id: 23, name: "Paneer Bhurji", price: 160, img: "https://www.whiskaffair.com/wp-content/uploads/2021/04/Paneer-Bhurji-2-3-1.jpg", page: "buy22.html", section: "Brunch Specials" },
  { id: 24, name: "Veg Pasta", price: 180, img: "https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Tomato-Pasta-Thumbnail.jpg", page: "buy23.html", section: "Brunch Specials" },
  { id: 25, name: "Veg Omelette", price: 90, img: "https://heavenlyhomecooking.com/wp-content/uploads/2021/04/Vegetable-Omelette-Recipe-Featured-1.jpg", page: "buy24.html", section: "Brunch Specials" },
  { id: 26, name: "Avocado Toast", price: 170, img: "https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-avocado-toast-1629717043.jpg", page: "buy25.html", section: "Brunch Specials" },
  { id: 27, name: "Fruit Smoothie", price: 120, img: "https://lilluna.com/wp-content/uploads/2014/02/fruit-smoothie-resize-14.jpg", page: "buy26.html", section: "Brunch Specials" },
  { id: 28, name: "Paneer Wrap", price: 150, img: "https://ministryofcurry.com/wp-content/uploads/2019/10/paneer-kathi-rolls-1.jpg", page: "buy27.html", section: "Brunch Specials" },
  { id: 29, name: "Hot Coffee", price: 70, img: "https://cff2.earth.com/uploads/2018/11/01142049/Hot-or-iced-Hot-coffee-has-more-antioxidants-than-cold-brew.jpg", page: "buy28.html", section: "Brunch Specials" },

  // 🥗 Signature Bowls
  { id: 30, name: "Mexican Burrito Bowl", price: 270, img: "https://healthyfitnessmeals.com/wp-content/uploads/2018/08/Grilled-chicken-burrito-bowls-10.jpg", page: "buy32.html", section: "Signature Bowls" },
  { id: 31, name: "Asian Noodle Bowl", price: 230, img: "https://cdn.bakedbree.com/uploads/2024/05/Asian-Noodle-Bowl-A_Diagonal_Asian-Noodle-Bowl_bakedbree-17-1024x1536.jpg", page: "buy33.html", section: "Signature Bowls" },
  { id: 32, name: "Paneer Rice Bowl", price: 240, img: "https://chickasta.com/wp-content/uploads/2023/11/Grill-Paneer-Rice-1.jpg", page: "buy34.html", section: "Signature Bowls" },
  { id: 33, name: "Veg Curry Bowl", price: 210, img: "https://www.unileverfoodsolutions.co.za/dam/global-ufs/mcos/SOUTH-AFRICA/calcmenu/recipes/ZA-recipes/q4-campaign/deli/the-curry-veg-bowl-preview.jpg", page: "buy36.html", section: "Signature Bowls" },
  { id: 34, name: "Dal Chawal Bowl", price: 190, img: "https://greenbowl2soul.com/wp-content/uploads/2023/03/palak-with-dal.jpg", page: "buy37.html", section: "Signature Bowls" },

  // 🍗 Crispy Fried Chicken
  { id: 35, name: "Classic Fried Chicken", price: 220, img: "https://www.verdictbakery.com/wp-content/uploads/2024/11/Classic-Fried-Chicken-Recipe.webp", page: "buy38.html", section: "Crispy Fried Chicken" },
  { id: 36, name: "Spicy Fried Chicken", price: 250, img: "https://jesspryles.com/wp-content/uploads/2018/01/korean-fried-chicken-32.jpg", page: "buy39.html", section: "Crispy Fried Chicken" },
  { id: 37, name: "Crispy Chicken Wings", price: 180, img: "https://www.chilipeppermadness.com/wp-content/uploads/2019/03/Crispy-Baked-Chicken-Wings-SQ.jpg", page: "buy40.html", section: "Crispy Fried Chicken" },
  { id: 38, name: "Fried Chicken Sandwich", price: 200, img: "https://houseofnasheats.com/wp-content/uploads/2021/10/Buttermilk-Crispy-Chicken-Sandwich-1.jpg", page: "buy41.html", section: "Crispy Fried Chicken" },
  { id: 39, name: "Chicken Strips", price: 160, img: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Fried-Chicken-Strips_EXPS_FT24_25184_JR_0301_1.jpg", page: "buy42.html", section: "Crispy Fried Chicken" },
  { id: 40, name: "Korean Fried Chicken", price: 280, img: "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-foodporn-7373.jpg", page: "buy43.html", section: "Crispy Fried Chicken" },
  { id: 41, name: "Chicken Drumsticks", price: 210, img: "https://cravinghomecooked.com/wp-content/uploads/2020/09/baked-chicken-drumsticks-1-11.jpg", page: "buy44.html", section: "Crispy Fried Chicken" },

  // 🌯 Wraps & Sandwiches
  { id: 42, name: "Veggie Delight Wrap", price: 180, img: "https://thumbs.dreamstime.com/b/shawarma-delight-grilled-pita-wrapped-chicken-fresh-veggies-sauce-shawarma-delight-grilled-pita-wrapped-chicken-304476048.jpg", page: "buy45.html", section: "Wraps & Sandwiches" },
  { id: 43, name: "Chicken Caesar Wrap", price: 220, img: "https://eatup.kitchen/wp-content/uploads/2018/07/Chicken-Tender-Caesar-Wrap_DSCF0641.jpg", page: "buy46.html", section: "Wraps & Sandwiches" },
  { id: 44, name: "Club Sandwich Wrap", price: 200, img: "https://hips.hearstapps.com/hmg-prod/images/delish-egglife-club-sandwich-wrap-still002-1674842391.jpg?crop=1xw:1xh;center,top&resize=1200:*", page: "buy47.html", section: "Wraps & Sandwiches" },
  { id: 45, name: "Mixed Sandwich Rolls", price: 230, img: "https://inquiringchef.com/wp-content/uploads/2023/03/Chicken-Philly-Sandwiches_square-0075.jpg", page: "buy48.html", section: "Wraps & Sandwiches" },

  // 🍮 Desserts & Beverages
  { id: 46, name: "Gulab Jamun", price: 120, img: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2019/12/gulab-jamun-768x960.jpg", page: "buy49.html", section: "Desserts & Beverages" },
  { id: 47, name: "Mysore Pak", price: 150, img: "https://cdn.cdnparenting.com/articles/2019/02/19092259/Mysore-Pak-Recipe-3467583981.jpg", page: "buy50.html", section: "Desserts & Beverages" },
  { id: 48, name: "Mango Lassi", price: 100, img: "https://www.whiskaffair.com/wp-content/uploads/2020/05/Mango-Lassi-2-1.jpg", page: "buy51.html", section: "Desserts & Beverages" },
  { id: 49, name: "Falooda", price: 130, img: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-falooda-recipe.jpg", page: "buy52.html", section: "Desserts & Beverages" }
];
