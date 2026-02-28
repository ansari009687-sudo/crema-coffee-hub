import SectionWrapper from "@/components/SectionWrapper";

const categories = [
  {
    title: "Coffee & Espresso",
    items: [
      { name: "Espresso", desc: "Bold, rich, and perfectly extracted." },
      { name: "Cortado", desc: "Equal parts espresso and steamed milk." },
      { name: "Latte", desc: "Silky steamed milk meets third-wave espresso." },
      { name: "Vanilla Latte", desc: "House-made vanilla syrup with expertly pulled shots." },
      { name: "Seasonal Specialty", desc: "Rotating craft drinks inspired by the season." },
    ],
  },
  {
    title: "Breakfast & Pastries",
    items: [
      { name: "Butter Croissant", desc: "Flaky, buttery, golden perfection." },
      { name: "Daily House-Baked Pastries", desc: "Fresh from the oven every morning." },
      { name: "Sweet Potato Waffle", desc: "Crispy, fluffy, and perfectly spiced." },
      { name: "Daily Quiche Selection", desc: "Fresh-baked with seasonal fillings." },
    ],
  },
  {
    title: "Salads & Light Bites",
    items: [
      { name: "Seasonal Salad", desc: "Locally sourced greens with house dressing." },
    ],
  },
  {
    title: "Sandwiches",
    items: [
      { name: "Breakfast Burrito", desc: "Hearty, savory, and made to order." },
      { name: "Pork Belly Banh Mi", desc: "Bold flavors on a toasted baguette." },
    ],
  },
  {
    title: "Specialties",
    items: [
      { name: "Rotating Seasonal Menu Items", desc: "Chef-curated dishes that change with the seasons." },
    ],
  },
];

const MenuPage = () => (
  <div className="pt-16">
    {/* Hero */}
    <section className="bg-primary text-primary-foreground section-padding text-center">
      <div className="container mx-auto max-w-2xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
        <p className="text-primary-foreground/80 text-lg">
          Handcrafted drinks, house-baked pastries, and eclectic bites.
        </p>
      </div>
    </section>

    {categories.map((cat) => (
      <SectionWrapper key={cat.title}>
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-border pb-3">
            {cat.title}
          </h2>
          <div className="grid gap-4">
            {cat.items.map((item) => (
              <div
                key={item.name}
                className="bg-card rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground">{item.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    ))}
  </div>
);

export default MenuPage;
