'use strict';

const categories = {
    womens: "women's collection",
    mens: "men's collection"
};

const dataGoods = {
    womens: {
        dresses: [
            {
                id: "10",
                photo: ["Zoom_1-Front.jpg", "Zoom_2-Back.jpg", "Zoom_3-Full_Length.jpg"],
                name: "Franki Floral Mini Dress Black",
                brand: "DON'T ASK AMANDA",
                size: ["XS", "S", "M", "L"],
                color: "black",
                description: "The Franki Dress by Don't Ask Amanda is a floral mini dress in a black and white colourway. This style features a plunging, V-shaped neckline, short puff sleeves with ruffle detail at the hemline as well as an adjustable tie and an A-line skirt. Pair with chunky gold jewellery for a look that's right on trend.",
                quantity: "13",
                price: "69.95"
            },
            {
                id: "12",
                photo: ["1000084741_010_Zoom_1-Front.jpg", "1000084741_010_Zoom_2-Back.jpg", "1000084741_010_Zoom_3-Full_Length.jpg"],
                name: "Nicole Square Neck Linen Dress White",
                brand: "ALICE IN THE EVE",
                size: ["XS", "S", "M", "L", "XL"],
                color: "white",
                description: "The Nicole Dress by Alice In The Eve is a lightweight linen dress with a flattering square neckline This mini dress features a side split at the thigh, thick shoulder straps, made from a soft linen fabrication and comes in a white colourway. Keep it fresh on the hot days in this summer ready mini that can be teamed with sandals or sneakers for different looks.",
                quantity: "5",
                price: "59.95"
            },

            {
                id: "14",
                photo: ["12262590-2144723254324867.jpg", "12262590-2014723254420627.jpg", "12262590-1164723274008128.jpg"],
                name: "Ted Baker Women's Avii Pearl V Neck Bodycon Dress - Dark Blue",
                brand: "Ted Baker",
                size: ["XS", "S", "M", "L"],
                color: "Dark Blue",
                description: "Ted Baker’s ‘Avii’ bodycon dress in contrasting white and dark blue. Cut with short sleeves, a V-neck and pencil midi skirt. Floral detailing above the hem of the skirt and cuffs of the top. Minimalistic belt with silver tone hardware at the waist. Zip closure to the rear.",
                quantity: "2",
                price: "126.00"
            },
        ],

        shirts: [
            {
                id: "24",
                photo: ["12299881-1584750004274537.jpg", "12299881-2054750004354979.jpg", "12299881-1784750004708094.jpg"],
                name: "Joules Women's Rosamund Woven Top - Cream Bee",
                brand: "Joules",
                size: ["XS", "S", "M", "L"],
                color: "White",
                description: "Cream ‘Rosamund’ top with all-over bee print from Joules. Cut with a curved, vented hem, V-neckline and long sleeves.",
                quantity: "5",
                price: "48.95"
            },
            {
                id: "25",
                photo: ["12443550-3074746858925413.jpg", "12443550-1174746858947340.jpg", "12443550-1394746858968970.jpg"],
                name: "Levi's Women's Gracie Shirt - Icy Ecru",
                brand: "Levi's",
                size: ["XS", "S", "M", "L"],
                color: "White",
                description: "Make a simple statement with the ‘Gracie’ shirt, created by Levi’s. Long, cuffed sleeves complement a spread collar. The shirt is adorned with silver-toned metallic buttons, along with two slip pockets at the chest. Finished with a small branded label at the left pocket.",
                quantity: "5",
                price: "65.95"
            },
            {
                id: "125",
                photo: ["12443555-5594752289647993.jpg", "12443555-1554752289842276.jpg", "12443555-3824752289918329.jpg"],
                name: "Levi's Women's Alina Tie Shirt - Icy Ecru",
                brand: "Levi's",
                size: ["XS", "S", "M", "L"],
                color: "White",
                description: "‘Alina’ tie shirt from Levi’s. Crafted from pure cotton. Sleeveless. Knot detail. Button-up fastening. Pointed collar. Two chest pockets. Branding patch. Relaxed, cropped fit.",
                quantity: "5",
                price: "32.95"
            },
        ],

        jeans: [
            {
                id: "13",
                photo: ["5000004662_098_Zoom_1-Front.jpg", "5000004662_098_Zoom_2-Back.jpg", "5000004662_098_Zoom_3-Full_Length.jpg"],
                name: "Pointer Slash Jeans Karma",
                brand: "Ksubi",
                size: ["W25/L30", "W25/L32", "W26/L32", "W27/L30", "W29/L30", "W30/L32"],
                color: "blue",
                description: "The Pointer Jeans by Ksubi are high waisted jeans with slight distressing and slashes at the knees. This design features a relaxed leg which tapers at the hem, cropped ankle, contrasting tobacco stitch, five pocket styling, zip fly with branded button fastening, signature ksubi cross embroidery, t-box detail, made from a rigid cotton denim and comes in a blue colourway with light vintage stonewash.",
                quantity: "5",
                price: "189.95"
            },
            {
                id: "16",
                photo: ["12301220-1014731324560286.jpg", "12301220-1014731324636882.jpg", "12301220-1654731324717600.jpg"],
                name: "Levi's Women's Ribcage Wide Leg Jeans - Black Book",
                brand: "Levi's Women's",
                size: ["W25/L30", "W25/L32", "W26/L32", "W27/L30", "W29/L30", "W30/L32"],
                color: "black",
                description: "Constructed from non-stretch cotton in a black colourway, the ‘Ribcage’ jeans by Levi’s showcases a super high-waisted silhouette with a stylish wide-leg. Fitted through the hips, the trousers showcase classic five-pocket styling with a buttoned waist, zip fly and belt loops. Signature copper rivets and an iconic leather logo patch on the reverse waistline also feature. Complete with a red woven logo tab on the rear pocket.",
                quantity: "3",
                price: "70.00"
            },
            {
                id: "21",
                photo: ["12264011-1274737012964839.jpg", "12264011-1684737013032417.jpg", "12264011-1944737013097580.jpg"],
                name: "Barbour Women's Essential Slim Jeans - Rinse",
                brand: "Barbour",
                size: ["W25/L30", "W25/L32", "W26/L32", "W27/L30", "W29/L30", "W30/L32"],
                color: "Blue",
                description: "Cut in a slim fit, Barbour’s ‘Essential’ jeans have a sleek, streamlined appearance. The blue jeans have a classic five pocket construction with contrasting stitching along the seams. Crafted from stretchy denim for a more comfortable fit. Finished with belt loops and a branded leather waistband patch to the rear. Zip fly with single button.",
                quantity: "7",
                price: "56.00"
            },
        ],

        "t-shirts": [
            {
                id: "113",
                photo: ["12355315-8734739139740469.jpg", "12355315-1154739139855519.jpg", "12355315-1944739139925464.jpg"],
                name: "Champion Women's Small Script T-Shirt - White",
                brand: "Champion",
                size: ["XS", "S", "M", "L"],
                color: "White",
                description: "Champion ‘Small Script’ whiteT-shirt, crafted from premium cotton jersey. Short sleeves and crewneck with ribbed detailing. Stretched ribbed side panels for added flexibility and movement. Skinny fit. Complete with contrast Champion wordmark script at the chest and logo patch branding at the sleeve.",
                quantity: "5",
                price: "35.00"
            },
            {
                id: "123",
                photo: ["12355340-1534739141684790.jpg", "12355340-7434739141790882.jpg", "12355340-1084739141877027.jpg"],
                name: "Champion Women's Long Sleeve Crew Neck Cropped T-Shirt - Black",
                brand: "Champion",
                size: ["XS", "S", "M", "L"],
                color: "Black",
                description: "Black longsleeve crew neck tee shirt by Champion, featuring a white script logo to the chest and an embroidered emblem to the sleeve.",
                quantity: "15",
                price: "32.00"
            },
            {
                id: "128",
                photo: ["12316708-2214739599981872.jpg", "12316708-1624739600060796.jpg", "12316708-1664739600137587.jpg"],
                name: "Puma Women's TFS Graphic Crop Top - Puma Black",
                brand: "Puma",
                size: ["XS", "S", "M", "L"],
                color: "Black",
                description: "Black crop top by Puma, featuring a rainbow logo design with white Puma cat outline. Short sleeves and a crew neck.",
                quantity: "10",
                price: "18.00"
            },
        ]
    },

    mens: {
        jeans: [
            {
                id: "33",
                photo: ["1000087469_076_Zoom_1-Front.jpg", "1000087469_076_Zoom_2-Back.jpg", "1000087469_076_Zoom_3-Full_Length.jpg"],
                name: "501 ’93 Pride Shorts Faded Tie Dye Pink",
                brand: "patagonia",
                size: ["W25/L30", "W25/L32", "W26/L32", "W27/L30", "W29/L30", "W30/L32"],
                color: "Grey",
                description: "The P-6 Uprisal Crew by Patagonia is a classic crewneck jumper with a bold logo chest. This design features long sleeves, adjustable hood, woven logo, made of a recycled cotton /polyester fabrication and comes in a grey colourway. Pair back with jeans or chinos for a relaxed vibe.",
                quantity: "5",
                price: "119.95"
            },
            {
                id: "333",
                photo: ["12303369-1444743988930428.jpg", "12303369-1364743989284080.jpg", "12303369-4184743989517093.jpg"],
                name: "Tommy Hilfiger Men's Denton Straight Jeans - Park Blue",
                brand: "Tommy Hilfiger",
                size: ["W25/L30", "W25/L32", "W26/L32", "W27/L30", "W29/L30", "W30/L32"],
                color: "Blue",
                description: "‘Denton’ jeans crafted from 10oz stretch cotton denim with a straight fit from Tommy Hilfiger’s menswear line. Classic five-pocket construction with a buttoned waist, zip fly and belt loops. Made with Flex Technology for a snug and comfortable fit. Contrast ochre stitching throughout. Brown leather logo patch on reverse waistband and signature Tommy stripe detailing on watch and rear pockets.",
                quantity: "6",
                price: "77.00"
            },
            {
                id: "334",
                photo: ["12138244-3274732361577924.jpg", "12138244-1964732361616738.jpg", "12138244-7294732310465274.jpg"],
                name: "Nudie Jeans Men's Grim Tim Slim Jeans - Dry Open Navy",
                brand: "Nudie Jeans",
                size: ["W25/L30", "W25/L32", "W26/L32", "W27/L30", "W29/L30", "W30/L32"],
                color: "Navy",
                description: "Navy slim fit jeans with a dry finish from Scandinavian denim label, Nudie Jeans. Crafted from 11.5 oz. comfort stretch denim and cut for a slim fit, the ‘Grim Tim’ jeans are designed to be worn for six months before washing to achieve an authentic worn-in look. Fastened with a button fly, the jeans are detailed with orange coloured topstitching and signature navy embroidery on the back pockets. Complete with a jacron brand patch to the rear waistband and branded copper hardware.",
                quantity: "14",
                price: "80.00"
            }
        ],

        jackets: [
            {
                id: "31",
                photo: ["1000085095_001_Zoom_5-Optional_Extra_1.jpg", "1000085095_001_Zoom_2-Back.jpg", "1000085095_001_Zoom_3-Full_Length.jpg"],
                name: "Eli Jacket Black",
                brand: "ARVUST",
                size: ["S", "M", "L", "XL", "2XL"],
                color: "black",
                description: "The Eli Jacket by Arvust is a suede bomber jacket with tonal sherpa collar and lining. This design features a zip through front, side slip pockets, woven logo at the chest, elasticised hemline, made from a blended cotton polyester fabrication and comes in a jet black colourway. Wear over black skinny jeans for a nighttime look.",
                quantity: "3",
                price: "149.95"
            },
            {
                id: "32",
                photo: ["1000080984_004_Zoom_1-Front.jpg", "1000080984_004_Zoom_2-Back.jpg", "1000080984_004_Zoom_3-Full_Length.jpg"],
                name: "P-6 Logo Uprisal Hoodie Gravel Heather Grey",
                brand: "patagonia",
                size: ["S", "M", "L", "XL"],
                color: "Grey",
                description: "The P-6 Uprisal Crew by Patagonia is a classic crewneck jumper with a bold logo chest. This design features long sleeves, adjustable hood, woven logo, made of a recycled cotton /polyester fabrication and comes in a grey colourway. Pair back with jeans or chinos for a relaxed vibe.",
                quantity: "5",
                price: "119.95"
            },
            {
                id: "432",
                photo: ["12373049-9524742237408097.jpg", "12373049-2224742237465586.jpg", "12373049-1514742237589993.jpg"],
                name: "Barbour International Men's Impeller Quilt Jacket - Navy",
                brand: "Barbour",
                size: ["S", "M", "L", "XL", "XXL"],
                color: "Navy",
                description: "Black Barbour International jacket with a slim baffle-quilted outer and a fitted design. The men’s ‘Impeller’ padded jacket is filled with Barbour Fibre Down insulation to provide warmth even in wet weather conditions and it dries incredibly quickly. Fastened with a two-way zip, the lightweight jacket has a stand collar for increased protection, side pockets and an internal patch pocket. Bound cuffs to trap warmth inside and a Barbour International logo badge on the left sleeve add the finishing touches.",
                quantity: "8",
                price: "112.00"
            }
        ],

        shirts: [
            {
                id: "531",
                photo: ["12440116-1544746323342790.jpg", "12440116-1784746323411997.jpg", "12440116-1604746323489484.jpg"],
                name: "Ted Baker Men's Yesway Shirt - Navy",
                brand: "Ted Baker",
                size: ["S", "M", "L", "XL", "XXL"],
                color: "Navy",
                description: "British fashion label Ted Baker’s ‘Yesway’ dress shirt with a button-down construction in breathable, lightweight oxford cotton. Classic point collar and long sleeves with buttoned barrel cuffs. Casual rounded hemline with polka-dot side seam gussets. Buttoned patch pocket on chest. Embroidered Ted Baker logo tape along inside placket and patterned lining at cuffs and collar. Straight yoke. Signature branded buttons.",
                quantity: "13",
                price: "63.00"
            },
            {
                id: "532",
                photo: ["12270897-1934726126814559.jpg", "12270897-1494726126956972.jpg", "12270897-4264726127153067.jpg"],
                name: "BOSS Men's Mypop Shirt - Red",
                brand: "BOSS Hugo Boss",
                size: ["S", "M", "L"],
                color: "Burgundy",
                description: "Burgundy BOSS shirt with small logo embroidery on the left chest. Crafted from stretch cotton, the shirt is designed with a pointed collar, button cuffs and a curved hem. Darts at the back provide an enhanced fit.",
                quantity: "13",
                price: "99.00"
            },
            {
                id: "533",
                photo: ["12272575-9644732363067727.jpg", "12272575-4474732340607225.jpg", "12272575-9774732340699799.jpg"],
                name: "HUGO Men's Ermann Shirt - White",
                brand: "HUGO",
                size: ["S", "M", "L", "XL"],
                color: "White",
                description: "White HUGO shirt with contrasting logo print on the chest pocket. The cotton shirt is designed with a point collar, a central button placket and buttoned cuffs. A curved hem with side slits add the finishing touches to the shirt.",
                quantity: "23",
                price: "79.00"
            }
        ]
    }   
};