def getInventory():
    happy_variable = "one hundred percent happy"
    return happy_variable

spirits_options = [
        "Vodka",
        "Whiskey",
        "Gin",
        "Tequila",
        # "Rum",
    ]

bottles = [
        {
            "title": "Absolut",
            "class_name": "absolut",
            "type": "Vodka",
            "category": "Vodka",
            "category_order":1,
            "category_size":2,
            "image_path": "bottle_absolut.png",
            "bottle_recommendation_amount": 222,
            "reservebar_id": 18142454874209,
            "drinksandco_id": 0,
            "cocktail_title": "Cosmopolitan",
            "cocktail_image_path": "cocktail_stock_1.png",
            "cocktail_description": "Absolut, fresh lime juice, triple-sec, cranberry juice",
            "reservebar_handle": "https://www.reservebar.com/products/absolut-original-vodka-1.json",
        },
        {
            "title": "Asolut Elyx",
            "class_name": "absolut_elyx",
            "type": "Vodka",
            "category_order": 2,
            "category_size": 2,
            "image_path": "bottle_absolut_elyx.png",
            "bottle_recommendation_amount": 333,
            "reservebar_id": "18143272501345",
            "drinksandco_id": 0,
            "cocktail_title": "Cosmopolitan",
            "cocktail_image_path": "cocktail_stock_1.png",
            "cocktail_description": "Absolut Elyx, fresh lime juice, triple-sec, cranberry juice",
            "reservebar_handle": "https://www.reservebar.com/products/absolut-elyx-750ml.json"
        },
        {
            "title": "Jameson",
            "class_name": "jameson",
            "type": "Whiskey",
            "category_order": 1,
            "category_size": 3,
            "image_path": "bottle_jameson.png",
            "bottle_recommendation_amount": 333,
            "reservebar_id": 18142617534561,
            "drinksandco_id": 0,
            "cocktail_title": "Old-fashioned",
            "cocktail_image_path": "cocktail_stock_oldfashioned.png",
            "cocktail_description": "Jameson Black - barrel, Benedictine, angostura bitters, orange slice",
            "reservebar_handle": "https://www.reservebar.com/products/jameson-irish-whiskey-1.json"
        },
        {
            "title": "The Glenlivet",
            "class_name": "theglenlivet",
            "type": "Whiskey",
            "category_order": 2,
            "category_size": 3,
            "image_path": "bottle_theglenlivet.png",
            "bottle_recommendation_amount": 333,
            "reservebar_id": "18142398677089",
            "drinksandco_id": 0,
            "cocktail_title": "Old-fashioned",
            "cocktail_image_path": "cocktail_stock_oldfashioned.png",
            "cocktail_description": "Jameson Black - barrel, Benedictine, angostura bitters, orange slice",
            "reservebar_handle": "https://www.reservebar.com/products/the-glenlivet-founders-reserve.json"
        },
        {
            "title": "Red Breast 12 year",
            "class_name": "redbreast12",
            "type": "Whiskey",
            "category_order": 3,
            "category_size": 3,
            "image_path": "bottle_redbreast_12a.png",
            "bottle_recommendation_amount": 333,
            "reservebar_id": "18142619598945",
            "drinksandco_id": 0,
            "cocktail_title": "Old-fashioned",
            "cocktail_image_path": "cocktail_stock_oldfashioned.png",
            "cocktail_description": "Redbreast, Benedictine, angostura bitters, orange slice",
            "reservebar_handle": "https://www.reservebar.com/products/redbreast-12-year-old.json"
        },
        {
            "title": "Beefeater",
            "class_name": "beefeater",
            "type": "Gin",
            "category_order": 1,
            "category_size": 2,
            "image_path": "bottle_beefeater.png",
            "bottle_recommendation_amount": 333,
            "reservebar_id": 18142632149089,
            "drinksandco_id": 0,
            "cocktail_title": "Gin and Tonic",
            "cocktail_image_path": "cocktail_stock_ginandtonic.png",
            "cocktail_description": "Beefeater gin, fresh lime juice, tonic",
            "reservebar_handle":"https://www.reservebar.com/products/beefeater-london-dry.json"
        },
        {
            "title": "Plymouth",
            "class_name": "plymouth",
            "type": "Gin",
            "category_order": 2,
            "category_size": 2,
            "image_path": "bottle_plymouth.png",
            "bottle_recommendation_amount": 0,
            "reservebar_id": 18142632280161,
            "drinksandco_id": 0,
            "cocktail_title": "Gin and Tonic",
            "cocktail_image_path": "cocktail_stock_ginandtonic.png",
            "cocktail_description": "Plymouth gin, fresh lime juice, tonic",
            "reservebar_handle": "https://www.reservebar.com/products/plymouth-original-strength.json"
        },
        # {
        #     "title": "Monkey 47",
        #     "class_name": "monkey47",
        #     "type": "Gin",
        #     "category_order": 3,
        #     "category_size": 3,
        #     "image_path": "bottle_monkey47.png",
        #     "bottle_recommendation_amount": 0,
        #     "reservebar_id": 18142632280161,
        #     "drinksandco_id": 0,
        #     "cocktail_title": "Gin and Tonic",
        #     "cocktail_image_path": "cocktail_stock_ginandtonic.png",
        #     "cocktail_description": "Beefeater gin, fresh lime juice, tonic",
        #     "reservebar_handle": "https://www.reservebar.com/products/beefeater-london-dry.json"
        # },
        {
            "title": "Altos",
            "class_name": "altos",
            "type": "Tequila",
            "category_order": 1,
            "category_size": 2,
            "image_path": "bottle_altos.png",
            "bottle_recommendation_amount": 333,
            "reservebar_id": "18142610030689",
            "drinksandco_id": 0,
            "cocktail_title": "Tequila Margarita",
            "cocktail_image_path": "cocktail_stock_oldfashioned.png",
            "cocktail_description": "Altos tequila, fresh lime juice, tonic",
            "reservebar_handle": "https://www.reservebar.com/products/olmeca-altos-plata.json"
        },
        {
            "title": "Avion",
            "class_name": "avion",
            "type": "Tequila",
            "category_order": 2,
            "category_size": 2,
            "image_path": "bottle_avion.png",
            "bottle_recommendation_amount": 333,
            "reservebar_id": "18142637686881",
            "drinksandco_id": 0,
            "cocktail_title": "Tequila Margarita",
            "cocktail_image_path": "cocktail_stock_oldfashioned.png",
            "cocktail_description": "Avion tequila, fresh lime juice, tonic",
            "reservebar_handle": "https://www.reservebar.com/products/avion-silver-2.json"
        },
        {
            "title": "G.H. Mumm Grand Cordon",
            "class_name": "ghmumm_grand_cordon",
            "type": "Champagne",
            "category_order": 1,
            "category_size": 1,
            "image_path": "bottle_mumm.png",
            "bottle_recommendation_amount": 333,
            "reservebar_id": "18142629757025",
            "drinksandco_id": "12208228794493",
            "cocktail_title": "French 77",
            "cocktail_image_path": "cocktail_stock_champagnecocktail.png",
            "cocktail_description": "Mumm champagne, elderflower, lemon juice",
            "reservebar_handle":"https://www.reservebar.com/products/gh-mumm-grand-cordon.json"
        },
        {
            "title": "Kenwood Six Ridges Pinot Noir",
            "class_name": "kenwood_sixridges_pinotnoir",
            "type": "Red Wine",
            "category_order": 1,
            "category_size": 1,
            "image_path": "bottle_kenwood_sixridges_pinotnoir.png",
            "bottle_recommendation_amount": 333,
            "reservebar_id": "18143311364193",
            "drinksandco_id": "12208229711997",
            # "cocktail_title": "Red Wine",
            "cocktail_image_path": "cocktail_stock_redwine.png",
            "cocktail_description": "Densely-concentrated character and rich flavor from Dry Creek Valley.",
            "reservebar_handle": "https://www.reservebar.com/products/kenwood-six-ridges-russian-river-valley-pinot-noir.json"
        },
        {
            "title": "Kenwood Chardonnay",
            "class_name": "kenwood_chardonnay",
            "type": "White Wine",
            "category_order": 1,
            "category_size": 1,
            "image_path": "bottle_kenwood_chardonnay.png",
            "bottle_recommendation_amount": 333,
            "reservebar_id": "18143310970977",
            "drinksandco_id": "12208229744765",
            # "cocktail_title": "White Wine",
            "cocktail_image_path": "cocktail_stock_redwine.png",
            "cocktail_description": "Densely-concentrated character and rich flavor from Dry Creek Valley.",
            "reservebar_handle": "https://www.reservebar.com/products/kenwood-vineyards-sonoma-series-chardonnay.json"
        },

    ]