define(["backbone"],function (Backbone) {
    var Category = Backbone.Model.extend({
        defaults: {
            "name": "Games",
            "extraFields":
            [
                //Game
                {
                    "name": "genre",
                    "label": "Genre",
                    "type": "string"
                },
                //Consoles
                //N/A
                //Game Accessories
                {
                    "name": "color",
                    "label": "Color",
                    "type": "string"
                },
                {
                    "name": "wireless",
                    "label": "Wireless",
                    "type": "boolean"
                },
                //PC Components
                {
                    "name": "manufacturer",
                    "label": "Manufacturer",
                    "type": "string"
                },
                //Toys
                {
                    "name": ""
                }
                "brand":"Hasbro"
            ]

        }
    });
    return Item;
});
