export const menuCategories = [
  { id: "all", label: "All Offerings" },
  { id: "small-plates", label: "Small Plates" },
  { id: "garden", label: "From The Garden" },
  { id: "sea", label: "From The Sea" },
  { id: "grill", label: "From The Grill" },
  { id: "dessert", label: "Dessert" },
  { id: "drinks", label: "Cellar & Bar" },
];

export const signatureDishes = [
  {
    id: "sig-01",
    index: "01",
    name: "Charred Octopus",
    category: "sea",
    tagline: "Slow-tenderized Mediterranean octopus crisped over hardwood coal.",
    description: "Smoked fingerling potato, preserved Meyer lemon emulsion, fermented chili oil, oregano blossoms.",
    price: "৳ 2,850",
    dietary: ["GF", "Signature"],
    pairing: "2021 Assyrtiko, Santorini",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
    alt: "Charred Mediterranean octopus with smoked potato and preserved lemon",
  },
  {
    id: "sig-02",
    index: "02",
    name: "Wild Morel & Porcini Risotto",
    category: "garden",
    tagline: "Acquerello aged carnaroli simmered in 36-hour roasted mushroom jus.",
    description: "Foraged morels, 24-month Parmigiano Reggiano, thyme-infused brown butter, crisp garlic chips.",
    price: "৳ 3,200",
    dietary: ["V", "GF", "Signature"],
    pairing: "2019 Nebbiolo, Piedmont",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=1200&q=85",
    alt: "Wild mushroom risotto with aged parmesan and thyme brown butter",
  },
  {
    id: "sig-03",
    index: "03",
    name: "Burnt Basque Cheesecake",
    category: "dessert",
    tagline: "Caramelized crust with a molten, velvety center.",
    description: "Macerated wild blackberries, Madagascar Bourbon vanilla pod cream, Maldon smoked sea salt flake.",
    price: "৳ 1,900",
    dietary: ["V", "GF", "Signature"],
    pairing: "10-Year Tawny Port / Espresso Roast",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=85",
    alt: "Burnt Basque cheesecake with macerated blackberries and vanilla bean cream",
  },
];

export const fullMenuItems = [
  // Small Plates
  {
    id: "sp-01",
    name: "Heirloom Sourdough & Smoked Butter",
    category: "small-plates",
    description: "48-hour fermented rye boule, house-churned butter infused with charred leek ash & sea salt.",
    price: "৳ 1,450",
    dietary: ["V"],
    pairing: "Sparkling Crémant de Bourgogne"
  },
  {
    id: "sp-02",
    name: "Yellowfin Tuna Crudo",
    category: "small-plates",
    description: "Hand-sliced sashimi grade tuna, blood orange ponzu, white sesame, pickled sea fennel, crispy capers.",
    price: "৳ 2,450",
    dietary: ["GF", "DF"],
    pairing: "Dry Riesling, Mosel"
  },
  {
    id: "sp-03",
    name: "Bone Marrow & Oxtail Marmalade",
    category: "small-plates",
    description: "Split roasted beef marrow bones, caramelized shallot & sherry reduction, grilled pain de campagne.",
    price: "৳ 2,750",
    dietary: [],
    pairing: "Côtes du Rhône, 2020"
  },
  {
    id: "sp-04",
    name: "Stracciatella & Charred Figs",
    category: "small-plates",
    description: "Pugliese pulled curd, warm black mission figs, wild thyme honey, toasted pistachio crumb.",
    price: "৳ 2,150",
    dietary: ["V", "GF"],
    pairing: "Pinot Grigio, Alto Adige"
  },

  // From The Garden
  {
    id: "gd-01",
    name: "Wild Morel & Porcini Risotto",
    category: "garden",
    description: "Acquerello carnaroli rice, foraged morels, 24-month Parmigiano Reggiano, thyme-infused brown butter.",
    price: "৳ 3,200",
    dietary: ["V", "GF", "Chef's Choice"],
    pairing: "Nebbiolo d'Alba"
  },
  {
    id: "gd-02",
    name: "Miso Glazed Aubergine",
    category: "garden",
    description: "Charcoal-roasted Japanese eggplant, white saikyo miso glaze, toasted sesame crunch, scallion ribbons.",
    price: "৳ 2,250",
    dietary: ["VG", "GF", "DF"],
    pairing: "Junmai Daiginjo Sake"
  },
  {
    id: "gd-03",
    name: "Heritage Beetroot & Smoked Labneh",
    category: "garden",
    description: "Salt-baked golden and ruby beets, house goat labneh, candied walnuts, aged balsamic reduction.",
    price: "৳ 1,950",
    dietary: ["V", "GF"],
    pairing: "Sauvignon Blanc, Sancerre"
  },
  {
    id: "gd-04",
    name: "Handmade Truffle Tagliolini",
    category: "garden",
    description: "Fresh egg pasta extruded daily, shaved black Norcia truffle, mountain butter, aged pecorino.",
    price: "৳ 3,800",
    dietary: ["V"],
    pairing: "Chardonnay, Meursault"
  },

  // From The Sea
  {
    id: "se-01",
    name: "Charred Mediterranean Octopus",
    category: "sea",
    description: "Smoked fingerling potato, preserved Meyer lemon emulsion, fermented chili oil, oregano blossoms.",
    price: "৳ 2,850",
    dietary: ["GF"],
    pairing: "Assyrtiko, Santorini"
  },
  {
    id: "se-02",
    name: "Pan-Seared Chilean Sea Bass",
    category: "sea",
    description: "Brown butter dashi broth, braised baby bok choy, lotus root crisp, kaffir lime essence.",
    price: "৳ 4,650",
    dietary: ["GF"],
    pairing: "Pouilly-Fuissé, Burgundy"
  },
  {
    id: "se-03",
    name: "Diver Scallops in Brown Butter",
    category: "sea",
    description: "Pan-roasted Hokkaido scallops, Jerusalem artichoke velouté, crispy guanciale crumb, green apple batons.",
    price: "৳ 3,950",
    dietary: ["GF"],
    pairing: "Champagne Brut Reserve"
  },
  {
    id: "se-04",
    name: "Black Cod en Papillote",
    category: "sea",
    description: "Steamed in parchment with fennel fronds, saffron fumet, baby leeks, and finger lime pearls.",
    price: "৳ 4,400",
    dietary: ["GF", "DF"],
    pairing: "Albariño, Rías Baixas"
  },

  // From The Grill
  {
    id: "gr-01",
    name: "45-Day Dry Aged Ribeye (350g)",
    category: "grill",
    description: "Prime black angus cooked over binchotan embers, black garlic emulsion, smoked sea salt, marrow jus.",
    price: "৳ 5,800",
    dietary: ["GF"],
    pairing: "Cabernet Sauvignon, Napa Valley"
  },
  {
    id: "gr-02",
    name: "Crispy Skin Duck Breast",
    category: "grill",
    description: "Lavender and spiced honey lacquer, celeriac puree, glazed baby turnips, blackberry jus.",
    price: "৳ 4,250",
    dietary: ["GF"],
    pairing: "Pinot Noir, Willamette Valley"
  },
  {
    id: "gr-03",
    name: "Wood-Fired Lamb Cutlets",
    category: "grill",
    description: "Herb-crusted Pyrenees lamb, smoked eggplant puree, charred pearl onions, pomegranate molasses.",
    price: "৳ 4,950",
    dietary: ["GF"],
    pairing: "Syrah, Northern Rhône"
  },
  {
    id: "gr-04",
    name: "Spatchcocked Young Poussin",
    category: "grill",
    description: "Marinated with sumac, preserved lemon and wild thyme, ember-roasted sweet garlic, pan drippings.",
    price: "৳ 3,650",
    dietary: ["GF", "DF"],
    pairing: "Grenache / Syrah Blend"
  },

  // Dessert
  {
    id: "ds-01",
    name: "Burnt Basque Cheesecake",
    category: "dessert",
    description: "Caramelized crust, molten center, macerated wild blackberries, Madagascar Bourbon vanilla bean cream.",
    price: "৳ 1,900",
    dietary: ["V", "GF"],
    pairing: "10-Year Tawny Port"
  },
  {
    id: "ds-02",
    name: "70% Valrhona Dark Chocolate Ganache Tart",
    category: "dessert",
    description: "Single-origin Guanaja chocolate, salted hazelnut praline, smoked fleur de sel, tonka bean gelato.",
    price: "৳ 2,050",
    dietary: ["V"],
    pairing: "Pedro Ximénez Sherry"
  },
  {
    id: "ds-03",
    name: "Poached Quince & Cardamom Mille-Feuille",
    category: "dessert",
    description: "Caramelized inverted puff pastry, whipped mascarpone cream, spiced Bengal quince compote.",
    price: "৳ 1,750",
    dietary: ["V"],
    pairing: "Late Harvest Tokaji"
  },
  {
    id: "ds-04",
    name: "Smoked Thyme Sorbet & Meyer Lemon Granita",
    category: "dessert",
    description: "Herbal house-spun sorbet, crisp citrus ice, cold-pressed olive oil drizzle.",
    price: "৳ 1,550",
    dietary: ["VG", "GF", "DF"],
    pairing: "Moscato d'Asti"
  },

  // Drinks / Cellar & Bar
  {
    id: "dr-01",
    name: "The Smoked Thyme Old Fashioned",
    category: "drinks",
    description: "Small-batch Bourbon, burned wild thyme cordial, Angostura bitters, hand-cut clear ice sphere, orange oils.",
    price: "৳ 2,150",
    dietary: ["Signature Cocktail"],
    pairing: "Pre-dinner or alongside Grilled Cuts"
  },
  {
    id: "dr-02",
    name: "Botanical Gulshan Spritz",
    category: "drinks",
    description: "Artisanal London dry gin, elderflower liqueur, local kaffir lime leaf, prosecco, sparkling mineral water.",
    price: "৳ 1,900",
    dietary: ["Signature Cocktail"],
    pairing: "Aperitif"
  },
  {
    id: "dr-03",
    name: "Noir Fig Negroni",
    category: "drinks",
    description: "Fig-infused gin, Carpano Antica Formula sweet vermouth, Campari, ignited rosemary sprig.",
    price: "৳ 2,250",
    dietary: ["Cocktail"],
    pairing: "Digestif"
  },
  {
    id: "dr-04",
    name: "Cold Brew Smoked Oolong & Tonic (Zero Proof)",
    category: "drinks",
    description: "24-hour steeped Taiwanese high mountain oolong, Mediterranean tonic, charred orange slice.",
    price: "৳ 1,450",
    dietary: ["Non-Alcoholic"],
    pairing: "Refreshing"
  }
];
