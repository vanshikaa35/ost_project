/**
 * recipes.js
 * In-memory data store — 20 Indian home-cooking recipes.
 * Each recipe contains: id, name, ingredients, steps, cookTime (minutes).
 */

const recipes = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    ingredients: ["paneer", "butter", "tomato", "onion", "cream", "garlic", "ginger", "garam masala", "kashmiri red chili", "salt"],
    steps: [
      "Cut paneer into cubes and lightly fry in butter until golden.",
      "Blend tomatoes, onion, garlic, and ginger into a smooth puree.",
      "Heat butter in a pan, add the puree and cook on medium heat for 10 minutes.",
      "Add kashmiri red chili powder and garam masala. Stir well.",
      "Add paneer cubes and simmer for 5 minutes.",
      "Finish with cream and salt. Serve hot with naan or rice."
    ],
    cookTime: 35,
  },
  {
    id: 2,
    name: "Dal Tadka",
    ingredients: ["toor dal", "onion", "tomato", "garlic", "cumin seeds", "turmeric", "red chili", "ghee", "coriander leaves", "salt"],
    steps: [
      "Pressure cook toor dal with turmeric and salt for 3–4 whistles.",
      "Heat ghee in a pan. Add cumin seeds and let them splutter.",
      "Add chopped onion and cook until golden brown.",
      "Add garlic, tomato, red chili, and cook until oil separates.",
      "Pour the tadka over the cooked dal and mix well.",
      "Garnish with fresh coriander and serve with rice or roti."
    ],
    cookTime: 30,
  },
  {
    id: 3,
    name: "Aloo Gobi",
    ingredients: ["potato", "cauliflower", "onion", "tomato", "cumin seeds", "turmeric", "coriander powder", "garam masala", "oil", "salt"],
    steps: [
      "Cut potatoes and cauliflower into medium florets.",
      "Heat oil, add cumin seeds and let them sizzle.",
      "Add onion and cook until translucent.",
      "Add tomato, turmeric, coriander powder and cook for 5 minutes.",
      "Add potato and cauliflower, mix well, cover and cook on low heat for 20 minutes.",
      "Sprinkle garam masala and serve hot."
    ],
    cookTime: 30,
  },
  {
    id: 4,
    name: "Chicken Biryani",
    ingredients: ["chicken", "basmati rice", "onion", "yogurt", "tomato", "mint leaves", "saffron", "ghee", "biryani masala", "salt"],
    steps: [
      "Marinate chicken with yogurt, biryani masala, and salt for 30 minutes.",
      "Fry onions in ghee until crispy golden brown.",
      "Cook marinated chicken in a heavy pot until half done.",
      "Parboil basmati rice with whole spices until 70% cooked.",
      "Layer rice over chicken, add saffron milk, fried onions, and mint.",
      "Seal the pot and cook on dum (low heat) for 25 minutes."
    ],
    cookTime: 75,
  },
  {
    id: 5,
    name: "Palak Paneer",
    ingredients: ["paneer", "spinach", "onion", "garlic", "ginger", "tomato", "cream", "cumin seeds", "garam masala", "oil", "salt"],
    steps: [
      "Blanch spinach in boiling water for 2 minutes, then blend to a puree.",
      "Heat oil, add cumin seeds, then sauté onion, garlic, and ginger.",
      "Add tomato and cook until soft.",
      "Add spinach puree and simmer for 8 minutes.",
      "Add paneer cubes and garam masala. Cook for 5 more minutes.",
      "Finish with a swirl of cream and serve."
    ],
    cookTime: 30,
  },
  {
    id: 6,
    name: "Rajma Chawal",
    ingredients: ["kidney beans", "onion", "tomato", "ginger", "garlic", "cumin seeds", "rajma masala", "oil", "coriander leaves", "salt"],
    steps: [
      "Soak kidney beans overnight and pressure cook until soft.",
      "Heat oil and sauté cumin seeds, onion, ginger, and garlic.",
      "Add tomatoes and cook until the oil separates.",
      "Add rajma masala and the cooked beans with some water.",
      "Simmer for 15 minutes until the gravy thickens.",
      "Garnish with coriander and serve with steamed basmati rice."
    ],
    cookTime: 50,
  },
  {
    id: 7,
    name: "Chole Bhature",
    ingredients: ["chickpeas", "onion", "tomato", "ginger", "garlic", "chole masala", "tea bag", "maida", "yogurt", "oil", "salt"],
    steps: [
      "Soak chickpeas overnight with a tea bag for color, then pressure cook.",
      "Make a masala by blending onion, tomato, ginger, and garlic.",
      "Cook the masala in oil until thick and fragrant.",
      "Add chickpeas, chole masala, and water. Simmer for 20 minutes.",
      "Knead maida dough with yogurt and rest for 1 hour.",
      "Roll into discs and deep fry the bhature until puffed and golden."
    ],
    cookTime: 60,
  },
  {
    id: 8,
    name: "Jeera Rice",
    ingredients: ["basmati rice", "cumin seeds", "ghee", "bay leaf", "cloves", "water", "salt"],
    steps: [
      "Wash and soak basmati rice for 20 minutes.",
      "Heat ghee in a pot, add bay leaf, cloves, and cumin seeds.",
      "Let the cumin seeds splutter and become aromatic.",
      "Add drained rice and gently toast for 2 minutes.",
      "Add water (1:2 ratio), salt, and bring to a boil.",
      "Cover and cook on very low heat for 15 minutes. Fluff and serve."
    ],
    cookTime: 25,
  },
  {
    id: 9,
    name: "Sambar",
    ingredients: ["toor dal", "mixed vegetables", "sambar powder", "tamarind", "mustard seeds", "curry leaves", "dry red chili", "oil", "turmeric", "salt"],
    steps: [
      "Cook toor dal with turmeric until soft and mash it.",
      "Soak tamarind in warm water and extract the juice.",
      "Add vegetables and tamarind water to the dal, cook for 10 minutes.",
      "Add sambar powder and salt, simmer for 8 minutes.",
      "Prepare tadka: heat oil, add mustard seeds, dry red chili, and curry leaves.",
      "Pour tadka into sambar and serve hot with idli or rice."
    ],
    cookTime: 40,
  },
  {
    id: 10,
    name: "Masoor Dal Soup",
    ingredients: ["masoor dal", "onion", "tomato", "garlic", "cumin seeds", "turmeric", "lemon juice", "oil", "coriander leaves", "salt"],
    steps: [
      "Rinse masoor dal and cook with water, turmeric, and onion until soft.",
      "Heat oil in a small pan and fry garlic until golden.",
      "Add cumin seeds and let them pop, then add tomato and cook for 5 minutes.",
      "Combine the tadka with the dal and blend partially for a creamy texture.",
      "Add lemon juice and salt, adjust consistency with water.",
      "Garnish with coriander and serve as a soup or with rice."
    ],
    cookTime: 25,
  },
  {
    id: 11,
    name: "Butter Chicken",
    ingredients: ["chicken", "butter", "tomato", "cream", "onion", "garlic", "ginger", "kashmiri red chili", "garam masala", "salt"],
    steps: [
      "Marinate chicken in yogurt and spices, then grill or pan fry.",
      "Melt butter and sauté onion, garlic, and ginger until soft.",
      "Add tomatoes and kashmiri red chili, cook until oil separates.",
      "Blend the sauce smooth and return to pan.",
      "Add grilled chicken and simmer for 10 minutes.",
      "Stir in cream, adjust seasoning, and serve with naan."
    ],
    cookTime: 45,
  },
  {
    id: 12,
    name: "Aloo Paratha",
    ingredients: ["whole wheat flour", "potato", "onion", "green chili", "coriander leaves", "ajwain", "ghee", "salt"],
    steps: [
      "Knead whole wheat flour with water and salt into a soft dough.",
      "Boil and mash potatoes, mix with onion, green chili, coriander, and ajwain.",
      "Divide dough into balls and roll each into a small disc.",
      "Place potato filling in center, seal the edges, and roll out gently.",
      "Cook on a hot tawa with ghee until golden spots appear on both sides.",
      "Serve hot with yogurt and pickle."
    ],
    cookTime: 35,
  },
  {
    id: 13,
    name: "Matar Paneer",
    ingredients: ["paneer", "green peas", "onion", "tomato", "garlic", "ginger", "cumin seeds", "coriander powder", "garam masala", "oil", "salt"],
    steps: [
      "Heat oil and fry cumin seeds until they crackle.",
      "Sauté onion until golden, add garlic and ginger paste.",
      "Add tomato puree and cook until oil separates.",
      "Add coriander powder, garam masala, and salt.",
      "Add green peas and cook for 5 minutes, then add paneer cubes.",
      "Simmer for 8 minutes and serve with roti."
    ],
    cookTime: 30,
  },
  {
    id: 14,
    name: "Egg Curry",
    ingredients: ["eggs", "onion", "tomato", "garlic", "ginger", "cumin seeds", "turmeric", "red chili powder", "garam masala", "oil", "salt"],
    steps: [
      "Hard boil eggs, peel and make small slits on the surface.",
      "Heat oil and lightly fry the eggs until golden. Set aside.",
      "In the same oil, fry cumin seeds, onion, garlic, and ginger.",
      "Add tomato, turmeric, red chili powder and cook to a thick masala.",
      "Add water and bring to a simmer, then add eggs.",
      "Cook for 10 minutes, sprinkle garam masala, and serve with rice."
    ],
    cookTime: 30,
  },
  {
    id: 15,
    name: "Vegetable Pulao",
    ingredients: ["basmati rice", "mixed vegetables", "onion", "whole spices", "mint leaves", "ghee", "cumin seeds", "ginger", "garlic", "salt"],
    steps: [
      "Wash and soak rice for 20 minutes.",
      "Heat ghee and add whole spices (bay leaf, cardamom, cloves).",
      "Add onion and cook until golden brown.",
      "Add ginger-garlic paste and vegetables, sauté for 5 minutes.",
      "Add soaked rice and water, season with salt.",
      "Add mint leaves, cover and cook on low heat until rice is done."
    ],
    cookTime: 30,
  },
  {
    id: 16,
    name: "Poha",
    ingredients: ["flattened rice", "onion", "potato", "green chili", "mustard seeds", "curry leaves", "turmeric", "lemon juice", "oil", "salt"],
    steps: [
      "Rinse flattened rice under water and let it soften for 5 minutes.",
      "Heat oil and add mustard seeds and curry leaves.",
      "Add onion, green chili, and potato. Cook until potato is tender.",
      "Add turmeric and softened poha, mix gently.",
      "Cook on low heat for 3–4 minutes, stirring occasionally.",
      "Squeeze lemon juice, add salt, and serve with tea."
    ],
    cookTime: 20,
  },
  {
    id: 17,
    name: "Upma",
    ingredients: ["semolina", "onion", "green chili", "mustard seeds", "curry leaves", "cashews", "oil", "water", "salt"],
    steps: [
      "Dry roast semolina in a pan on low heat until aromatic. Set aside.",
      "Heat oil, add cashews and fry until golden. Remove and set aside.",
      "Add mustard seeds, curry leaves, green chili, and onion to the oil.",
      "Sauté until onion is soft, then add boiling water and salt.",
      "Gradually add roasted semolina while stirring continuously to avoid lumps.",
      "Cook until the mixture is thick, top with cashews, and serve warm."
    ],
    cookTime: 20,
  },
  {
    id: 18,
    name: "Baingan Bharta",
    ingredients: ["eggplant", "onion", "tomato", "garlic", "green chili", "mustard seeds", "cumin seeds", "turmeric", "oil", "coriander leaves", "salt"],
    steps: [
      "Roast eggplant directly over flame until charred all over.",
      "Peel the skin and mash the flesh, set aside.",
      "Heat oil, add mustard and cumin seeds until they pop.",
      "Add onion, garlic, and green chili. Cook until golden.",
      "Add tomato and turmeric, cook for 5 minutes.",
      "Mix in the mashed eggplant, cook for 8 minutes, garnish with coriander."
    ],
    cookTime: 35,
  },
  {
    id: 19,
    name: "Kadhi Pakora",
    ingredients: ["yogurt", "gram flour", "onion", "cumin seeds", "mustard seeds", "curry leaves", "turmeric", "fenugreek seeds", "oil", "salt"],
    steps: [
      "Whisk yogurt with gram flour, turmeric, and water to make the kadhi base.",
      "Heat the kadhi on low heat for 25 minutes, stirring often.",
      "For pakoras: mix gram flour, onion, salt, and water into a batter and deep fry.",
      "Prepare tadka with oil, mustard, cumin, fenugreek, and curry leaves.",
      "Pour tadka into the kadhi.",
      "Add pakoras just before serving, garnish with coriander."
    ],
    cookTime: 45,
  },
  {
    id: 20,
    name: "Rice Kheer",
    ingredients: ["rice", "full fat milk", "sugar", "cardamom", "saffron", "cashews", "almonds", "raisins", "ghee", "rose water"],
    steps: [
      "Wash rice and soak for 20 minutes.",
      "Boil milk in a heavy-bottomed pan, add rice and cook on low heat.",
      "Stir continuously for 30–35 minutes until rice breaks down and milk thickens.",
      "Add sugar and cardamom powder, stir well.",
      "Fry nuts in ghee and add to the kheer along with saffron and raisins.",
      "Add rose water, mix and serve warm or chilled."
    ],
    cookTime: 50,
  },
];

module.exports = recipes;
