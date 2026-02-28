import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Leaf, WheatOff, ChevronDown } from "lucide-react";

interface MenuItem {
  name: string;
  price?: string;
  desc?: string;
  sub?: { label: string; price: string }[];
  tags?: ("gf" | "v")[];
  note?: string;
}

interface MenuCategory {
  title: string;
  note?: string;
  items: MenuItem[];
}

const drinks: MenuCategory = {
  title: "Drinks",
  items: [
    { name: "House Espresso", price: "$4" },
    { name: "Guest Espresso", price: "Market Price" },
    { name: "Cortado", price: "$4.50" },
    { name: "Cappuccino", price: "$5" },
    {
      name: "Latte",
      sub: [
        { label: "Regular", price: "$5.50" },
        { label: "Large", price: "$6" },
      ],
      note: "Add Housemade Vanilla, Caramel, or Chocolate +$0.75 · Sub Alt Milk +$1",
    },
    {
      name: "House Cup",
      price: "$3.50",
      desc: "Only available in a ceramic cup. Free refills while in-house. Transfer to paper cup +$1.",
    },
    {
      name: "To Go Cup",
      sub: [
        { label: "Small", price: "$3" },
        { label: "Large", price: "$4" },
      ],
    },
    { name: "Pour Over", price: "Market Price" },
    {
      name: "Cold Brew",
      sub: [
        { label: "Small", price: "$5.50" },
        { label: "Large", price: "$6" },
      ],
      note: "Light Ice +$0.50 · No Ice +$1",
    },
    { name: "Hot / Iced Tea", price: "$4" },
    {
      name: "Chai",
      sub: [
        { label: "Small", price: "$4.50" },
        { label: "Large", price: "$5.50" },
      ],
    },
    {
      name: "Matcha",
      sub: [
        { label: "Small", price: "$5" },
        { label: "Large", price: "$6" },
      ],
    },
    {
      name: "Fresh Juice",
      sub: [
        { label: "Small", price: "$5" },
        { label: "Large", price: "$7" },
      ],
      desc: "Carrot, Apple, Beet, Ginger",
    },
    {
      name: "Kombucha",
      sub: [
        { label: "Small", price: "$5" },
        { label: "Large", price: "$5.50" },
      ],
    },
  ],
};

const food: MenuCategory = {
  title: "Food",
  items: [
    { name: "Granola", price: "$8", desc: "With yogurt, fruit and mint", tags: ["v"] },
    { name: "Bruleed Grapefruit", price: "$7.50", desc: "With greens", tags: ["v", "gf"] },
    {
      name: "Breakfast Burrito",
      sub: [
        { label: "Veggie", price: "$8" },
        { label: "Meat", price: "$9" },
      ],
      note: "Hurry — burritos sell out fast!",
    },
    { name: "Waffle", price: "$10.50", tags: ["gf"], note: "Contains nuts" },
    { name: "Daily Veggie / Meat Quiche", price: "$11.50", desc: "With greens" },
    { name: "Beet Salad", price: "$10", tags: ["v", "gf"] },
  ],
};

const sandwiches: MenuCategory = {
  title: "Sandwiches",
  note: "All sandwiches include a side of your choice · All available as a salad · Add Bacon +$3 · Sub Tofu for meat (no charge)",
  items: [
    { name: "PB&J", price: "$12.50", desc: "Yes — the PB&J is worth it!", tags: ["v"] },
    { name: "Rotating Veggie Sandwich", price: "Market Price", desc: "The ingredients rotate, not the sandwich", tags: ["v"] },
    { name: "Tofu Banh Mi", price: "$15.50", tags: ["v"] },
    { name: "Pork Belly Banh Mi", price: "$15.50" },
    { name: "Moroccan Meatball", price: "$16.50" },
  ],
};

const sides: MenuCategory = {
  title: "Sides",
  items: [
    { name: "Greens", price: "$4", tags: ["v", "gf"] },
    { name: "Quinoa", price: "$4", tags: ["v", "gf"] },
    { name: "Chickpea Salad", price: "$4", tags: ["v", "gf"] },
    { name: "Potato Salad", price: "$4", tags: ["v"] },
  ],
};

const categories = [drinks, food, sandwiches, sides];

const Tag = ({ type }: { type: "gf" | "v" }) => (
  <span
    className={`inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
      type === "gf"
        ? "bg-latte text-espresso"
        : "bg-green-100 text-green-800"
    }`}
  >
    {type === "gf" ? <><WheatOff size={10} /> GF</> : <><Leaf size={10} /> Veg</>}
  </span>
);

const MenuItemRow = ({ item }: { item: MenuItem }) => (
  <div className="py-4 border-b border-border/50 last:border-b-0">
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-heading text-base md:text-lg font-semibold text-foreground">{item.name}</h3>
          {item.tags?.map((t) => <Tag key={t} type={t} />)}
        </div>
        {item.desc && <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>}
      </div>
      {item.price && (
        <span className="font-heading font-semibold text-foreground text-base md:text-lg shrink-0">
          {item.price}
        </span>
      )}
    </div>

    {item.sub && (
      <div className="mt-2 ml-4 space-y-1">
        {item.sub.map((s) => (
          <div key={s.label} className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{s.label}</span>
            <span className="font-medium text-foreground">{s.price}</span>
          </div>
        ))}
      </div>
    )}

    {item.note && (
      <p className="text-muted-foreground text-xs mt-2 italic">{item.note}</p>
    )}
  </div>
);

const CollapsibleCategory = ({ cat }: { cat: MenuCategory }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SectionWrapper>
      <div className="container mx-auto max-w-2xl">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between md:pointer-events-none mb-2"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            {cat.title}
          </h2>
          <ChevronDown
            size={24}
            className={`md:hidden text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        {cat.note && (
          <p className="text-muted-foreground text-sm mb-4 border-l-2 border-accent pl-3">
            {cat.note}
          </p>
        )}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 md:max-h-[2000px] md:opacity-100"
          }`}
        >
          <div className="bg-card rounded-xl shadow-sm px-5 md:px-6">
            {cat.items.map((item) => (
              <MenuItemRow key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const MenuPage = () => (
  <div className="pt-16">
    <section className="bg-primary text-primary-foreground section-padding-sm text-center">
      <div className="container mx-auto max-w-2xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
        <p className="text-primary-foreground/80 text-lg">
          Handcrafted drinks, house-baked pastries, and eclectic bites.
        </p>
      </div>
    </section>

    {categories.map((cat) => (
      <CollapsibleCategory key={cat.title} cat={cat} />
    ))}
  </div>
);

export default MenuPage;
