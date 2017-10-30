define(["backbone"],function (Backbone) {
    var Item = Backbone.Model.extend({
        defaults: {
            "newCode": "1N",
            "usedCode": "1U",
            "scratchedCode": "1S",
            "basePrice": 10,
            "name": "Marvel Puzzle Quest",
            "category": "Xbox",
            "section": "Games",
            "extra": {
                //Games
                "genre": "Puzzle",
                //Consoles
                //N/A
                //Game Accessories
                "color": "Black",
                "wireless": false,
                //PC Components
                "manufacturer": "AMD",
                //Toys
                "brand":"Hasbro"
            }

        }
    });
    return Item;
});
