import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"

export default function MenuPage() {
  return (
    <main className="bg-wedding-cream min-h-screen">
      <FloatingNavbar />

      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-wedding-text text-center mb-8">Wedding Menu</h1>
          <p className="text-lg text-wedding-text/80 text-center mb-12 max-w-2xl mx-auto">
            Discover our carefully curated menu featuring seasonal ingredients and dishes that celebrate our love story.
          </p>

          {/* Welcome drinks and canapes - 2 blocks */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl text-wedding-text text-center mb-8">Welcome drinks and canapes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/50 p-8 rounded-lg">
                <h3 className="font-serif text-2xl text-wedding-text mb-6">Welcome Drinks</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-wedding-text">Amy's Garden Spritz</h4>
                    <p className="text-wedding-text/70">Elderflower, prosecco, and fresh herbs</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Daniel's Old Fashioned</h4>
                    <p className="text-wedding-text/70">Premium bourbon with orange and cherry</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Non-alcoholic option</h4>
                    <p className="text-wedding-text/70">Sparkling elderflower and cucumber water</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 p-8 rounded-lg">
                <h3 className="font-serif text-2xl text-wedding-text mb-6">Canapes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-wedding-text">Seasonal Bruschetta</h4>
                    <p className="text-wedding-text/70">Fresh tomatoes, basil, and mozzarella on artisan bread</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Prosciutto & Fig Crostini</h4>
                    <p className="text-wedding-text/70">With honey goat cheese and arugula</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Stuffed Mushrooms</h4>
                    <p className="text-wedding-text/70">Wild mushrooms with herbs and parmesan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wedding breakfast - 3 blocks */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl text-wedding-text text-center mb-8">Wedding breakfast</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/50 p-8 rounded-lg">
                <h3 className="font-serif text-2xl text-wedding-text mb-6">Starter</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-wedding-text">Roasted Butternut Squash Soup</h4>
                    <p className="text-wedding-text/70">With sage and toasted pumpkin seeds</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Smoked Salmon Terrine</h4>
                    <p className="text-wedding-text/70">With dill cream cheese and capers</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 p-8 rounded-lg">
                <h3 className="font-serif text-2xl text-wedding-text mb-6">Main Course</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-wedding-text">Herb-Crusted Salmon</h4>
                    <p className="text-wedding-text/70">With lemon butter sauce and seasonal vegetables</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Beef Tenderloin</h4>
                    <p className="text-wedding-text/70">With red wine reduction and roasted potatoes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Vegetarian Wellington</h4>
                    <p className="text-wedding-text/70">Roasted vegetables in puff pastry with mushroom gravy</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 p-8 rounded-lg">
                <h3 className="font-serif text-2xl text-wedding-text mb-6">Dessert</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-wedding-text">Wedding Cake</h4>
                    <p className="text-wedding-text/70">Three-tier vanilla cake with berry filling</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Chocolate Mousse</h4>
                    <p className="text-wedding-text/70">Rich chocolate mousse with fresh berries</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Seasonal Fruit Tart</h4>
                    <p className="text-wedding-text/70">Pastry cream tart with fresh seasonal fruits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Evening food - 1 block */}
          <div>
            <h2 className="font-serif text-3xl text-wedding-text text-center mb-8">Evening food</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/50 p-8 rounded-lg">
                <h3 className="font-serif text-2xl text-wedding-text mb-6 text-center">Late Night Bites</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-wedding-text">Gourmet Sliders</h4>
                    <p className="text-wedding-text/70">Mini beef and chicken burgers with artisan toppings</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Wood-Fired Pizza</h4>
                    <p className="text-wedding-text/70">Selection of margherita, pepperoni, and vegetarian pizzas</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Loaded Nachos</h4>
                    <p className="text-wedding-text/70">With guacamole, salsa, and sour cream</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Sweet Treats</h4>
                    <p className="text-wedding-text/70">Mini donuts and chocolate-dipped strawberries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
