const dishes = [
    {
        id: 1,
        name: 'Aloo Tikki',
        cost: '₹150.00',
        description: 'Spicy and crispy potato patties.',
        prepTime: '20 minutes',
        imageUrl: '../images/gallary/starters/Aloo Tikki.jfif'
    },
    {
        id: 2,
        name: 'Chicken Tikka',
        cost: '₹170.00',
        description: 'Marinated chicken pieces grilled to perfection.',
        prepTime: '30 minutes',
        imageUrl: '../images/gallary/starters/Chicken Tikka.jfif'
    },
    {
        id: 3,
        name: 'Fish Amritsari',
        cost: '₹270.00',
        description: 'Spiced and batter-fried fish fillets.',
        prepTime: '30 minutes',
        imageUrl:'../images/gallary/starters/Fish Amritsari.jfif'
    },
    {
        id: 4,
        name: 'Medu Vada',
        cost: '₹125.00',
        description: 'Crispy lentil doughnuts served with coconut chutney and sambar.',
        prepTime: '30 minutes',
        imageUrl: '../images/gallary/starters/Medu Vada.jfif'
    },
    {
        id: 5,
        name: 'Pakoras',
        cost: '₹80.00',
        description: 'Assorted vegetables deep-fried in a chickpea batter.',
        prepTime: '20 minutes',
        imageUrl: '../images/gallary/starters/Pakoras.jfif'
    },
    {
        id: 6,
        name: 'Paneer Tikka',
        cost: '₹180.00',
        description: 'Grilled paneer cubes marinated in spices.',
        prepTime: '25 minutes',
        imageUrl: '../images/gallary/starters/Paneer Tikka.jfif'
    },
    {
        id: 7,
        name: 'Pani Puri',
        cost: '₹50.00',
        description: 'Crispy puris filled with spicy water and tamarind chutney.',
        prepTime: '15 minutes',
        imageUrl: '../images/gallary/starters/panni puri.jfif'
    },
    {
        id: 8,
        name: 'Samosas',
        cost: '₹60.00',
        description: 'Crispy pastry filled with spiced potatoes and peas.',
        prepTime: '20 minutes',
        imageUrl: '../images/gallary/starters/samosas.jfif'
    },
    {
        id: 9,
        name: 'Chickpea Salad',
        cost: '₹100.00',
        description: 'Fresh salad with chickpeas, tomatoes, and cucumbers.',
        prepTime: '10 minutes',
        imageUrl: '../images/gallary/Soups and Salads/Chickpea Salad.jfif'
    },
    {
        id: 10,
        name: 'Cucumber Raita',
        cost: '₹50.00',
        description: 'Yogurt-based side dish with cucumber and spices.',
        prepTime: '5 minutes',
        imageUrl: '../images/gallary/Soups and Salads/Cucumber Raita.jfif'
    },
    {
        id: 11,
        name: 'Dal Shorba',
        cost: '₹70.00',
        description: 'Lentil soup with Indian spices.',
        prepTime: '20 minutes',
        imageUrl: '../images/gallary/Soups and Salads/Dal Shorba.jfif'
    },
    {
        id: 12,
        name: 'Kachumber Salad',
        cost: '₹60.00',
        description: 'Simple salad with cucumber, tomato, and onion.',
        prepTime: '5 minutes',
        imageUrl: '../images/gallary/Soups and Salads/Kachumber Salad.jfif'
    },
    {
        id: 13,
        name: 'Tomato Shorba',
        cost: '₹70.00',
        description: 'Spicy tomato soup with Indian spices.',
        prepTime: '15 minutes',
        imageUrl: '../images/gallary/Soups and Salads/Tomato Shorba.jfif'
    },
    {
        id: 14,
        name: 'Aloo Gobi',
        cost: '₹120.00',
        description: 'Potatoes and cauliflower cooked with spices.',
        prepTime: '25 minutes',
        imageUrl: '../images/gallary/Main course/Aloo Gobi.jfif'
    },
    {
        id: 15,
        name: 'Avial',
        cost: '₹150.00',
        description: 'Mixed vegetables cooked in a coconut-based gravy.',
        prepTime: '30 minutes',
        imageUrl: '../images/gallary/Main course/Avial.jfif'
    },
    {
        id: 16,
        name: 'Butter Chicken',
        cost: '₹250.00',
        description: 'Chicken cooked in a creamy tomato-based gravy.',
        prepTime: '40 minutes',
        imageUrl: '../images/gallary/Main course/Butter Chicken.jfif'
    },
    {
        id: 17,
        name: 'Chana Masala',
        cost: '₹100.00',
        description: 'Chickpeas cooked in a spicy tomato gravy.',
        prepTime: '30 minutes',
        imageUrl: '../images/gallary/Main course/Chana Masala.jfif'
    },
    {
        id: 18,
        name: 'Chicken Chettinad',
        cost: '₹200.00',
        description: 'Chicken cooked with Chettinad spices.',
        prepTime: '45 minutes',
        imageUrl: '../images/gallary/Main course/Chicken Chettinad.jfif'
    },
    {
        id: 19,
        name: 'Dal Tadka',
        cost: '₹80.00',
        description: 'Lentils cooked with a tempering of spices.',
        prepTime: '20 minutes',
        imageUrl: '../images/gallary/Main course/Dal Tadka.jfif'
    },
    {
        id: 20,
        name: 'Fish Curry',
        cost: '₹220.00',
        description: 'Fish cooked in a spicy curry.',
        prepTime: '35 minutes',
        imageUrl: '../images/gallary/Main course/Fish Curry.jfif'
    },
    {
        id: 21,
        name: 'Hyderabadi Biryani',
        cost: '₹250.00',
        description: 'Fragrant rice dish with marinated meat and spices.',
        prepTime: '60 minutes',
        imageUrl: '../images/gallary/Main course/Hyderabadi Biryani.jfif'
    },
    {
        id: 22,
        name: 'Palak Paneer',
        cost: '₹180.00',
        description: 'Cottage cheese in a creamy spinach gravy.',
        prepTime: '30 minutes',
        imageUrl: '../images/gallary/Main course/Palak Paneer.jfif'
    },
    {
        id: 23,
        name: 'Rogan Josh',
        cost: '₹250.00',
        description: 'Slow-cooked lamb in a rich, spiced gravy.',
        prepTime: '50 minutes',
        imageUrl: '../images/gallary/Main course/Rogan Josh.jfif'
    },
    {
        id: 24,
        name: 'Appam',
        cost: '₹40.00',
        description: 'Soft, lacy pancakes made from fermented rice batter.',
        prepTime: '20 minutes',
        imageUrl: '../images/gallary/Indian Bread/Appam.jfif'
    },
    {
        id: 25,
        name: 'Masala Dosa',
        cost: '₹60.00',
        description: 'Thin, crispy pancake filled with spiced potatoes.',
        prepTime: '25 minutes',
        imageUrl: '../images/gallary/Indian Bread/Masala Dosa.jfif'
    },
    {
        id: 26,
        name: 'Naan',
        cost: '₹40.00',
        description: 'Soft, fluffy Indian bread.',
        prepTime: '15 minutes',
        imageUrl: '../images/gallary/Indian Bread/Naan.jfif'
    },
    {
        id: 27,
        name: 'Paratha',
        cost: '₹30.00',
        description: 'Layered flatbread made from wheat flour.',
        prepTime: '20 minutes',
        imageUrl: '../images/gallary/Indian Bread/Paratha.jfif'
    },
    {
        id: 28,
        name: 'Puri',
        cost: '₹20.00',
        description: 'Deep-fried bread made from wheat flour.',
        prepTime: '10 minutes',
        imageUrl: '../images/gallary/Indian Bread/Puri.jfif'
    },
    {
        id: 29,
        name: 'Roti',
        cost: '₹15.00',
        description: 'Unleavened flatbread made from wheat flour.',
        prepTime: '10 minutes',
        imageUrl: '../images/gallary/Indian Bread/Roti.jfif'
    },
    {
        id: 30,
        name: 'Biryani',
        cost: '₹200.00',
        description: 'Fragrant rice dish with spices and meat or vegetables.',
        prepTime: '60 minutes',
        imageUrl: '../images/gallary/Rice Dishes/Biryani.jfif'
    },
    {
        id: 31,
        name: 'Curd Rice',
        cost: '₹50.00',
        description: 'Rice mixed with yogurt and tempered with spices.',
        prepTime: '10 minutes',
        imageUrl: '../images/gallary/Rice Dishes/Curd Rice.jfif'
    },
    {
        id: 32,
        name: 'Jeera Rice',
        cost: '₹60.00',
        description: 'Rice flavored with cumin seeds.',
        prepTime: '15 minutes',
        imageUrl: '../images/gallary/Rice Dishes/Jeera Rice.jfif'
    },
    {
        id: 33,
        name: 'Lemon Rice',
        cost: '₹60.00',
        description: 'Rice flavored with lemon juice and spices.',
        prepTime: '15 minutes',
        imageUrl: '../images/gallary/Rice Dishes/Lemon Rice.jfif'
    },
    {
        id: 34,
        name: 'Pulao',
        cost: '₹100.00',
        description: 'Rice cooked with vegetables and spices.',
        prepTime: '20 minutes',
        imageUrl: '../images/gallary/Rice Dishes/Pulao.jfif'
    },
    {
        id: 35,
        name: 'Gulab Jamun',
        cost: '₹80.00',
        description: 'Sweet dumplings soaked in sugar syrup.',
        prepTime: '20 minutes',
        imageUrl: '../images/gallary/desserts/Gulab Jamun.jfif'
    },
    {
        id: 36,
        name: 'Jalebi',
        cost: '₹60.00',
        description: 'Crispy, syrup-soaked sweets.',
        prepTime: '30 minutes',
        imageUrl: '../images/gallary/desserts/Jalebi.jfif'
    },
    {
        id: 37,
        name: 'Kheer',
        cost: '₹70.00',
        description: 'Rice pudding flavored with cardamom and saffron.',
        prepTime: '30 minutes',
        imageUrl: '../images/gallary/desserts/Kheer.jfif'
    },
    {
        id: 38,
        name: 'Mysore Pak',
        cost: '₹90.00',
        description: 'Rich, melt-in-the-mouth sweet made from gram flour and ghee.',
        prepTime: '20 minutes',
        imageUrl: '../images/gallary/desserts/Mysore Pak.jfif'
    },
    {
        id: 39,
        name: 'Payasam',
        cost: '₹100.00',
        description: 'South Indian sweet made from milk, sugar, and vermicelli.',
        prepTime: '30 minutes',
        imageUrl: '../images/gallary/desserts/Payasam.jfif'
    },
    {
        id: 40,
        name: 'Rasmalai',
        cost: '₹120.00',
        description: 'Cottage cheese dumplings soaked in sweetened milk.',
        prepTime: '30 minutes',
        imageUrl: '../images/gallary/desserts/Rasmalai.jfif'
    },
    {
        id: 41,
        name: 'Filter Coffee',
        cost: '₹40.00',
        description: 'Strong and aromatic South Indian coffee.',
        prepTime: '5 minutes',
        imageUrl: '../images/gallary/Beverages/Filter Coffee.jfif'
    },
    {
        id: 42,
        name: 'Lassi',
        cost: '₹50.00',
        description: 'Refreshing yogurt-based drink.',
        prepTime: '5 minutes',
        imageUrl: '../images/gallary/Beverages/Lassi.jfif'
    },
    {
        id: 43,
        name: 'Mango Lassi',
        cost: '₹60.00',
        description: 'Sweet and tangy yogurt-based drink with mango flavor.',
        prepTime: '5 minutes',
        imageUrl: '../images/gallary/Beverages/Mango Lassi.jfif'
    },
    {
        id: 44,
        name: 'Masala Chai',
        cost: '₹20.00',
        description: 'Spiced tea made with black tea, milk, and spices.',
        prepTime: '10 minutes',
        imageUrl: '../images/gallary/Beverages/Masala Chai.jfif'
    },
    {
        id: 45,
        name: 'Nimbu Pani',
        cost: '₹15.00',
        description: 'Refreshing lemonade with a hint of spices.',
        prepTime: '5 minutes',
        imageUrl: '../images/gallary/Beverages/Nimbu Pani.jfif'
    }
];
