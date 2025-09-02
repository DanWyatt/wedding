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
            Discover our carefully curated menu featuring local ingredients.
          </p>

          {/* Welcome drinks and canapes - 2 blocks */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl text-wedding-text text-center mb-8">Welcome drinks and canapes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/50 p-8 rounded-lg">
                <h3 className="font-serif text-2xl text-wedding-text mb-6">Welcome Drinks</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-wedding-text">Somerset Orchard Mist Cocktail</h4>
                    <p className="text-wedding-text/70">The 'Somerset Pimms' &ndash; Kingston Black Aperitif, farm‑pressed apple juice, lemonade</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Elderflower Presse</h4>
                    <p className="text-wedding-text/70">Non-alcoholic sparkling elderflower</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 p-8 rounded-lg">
                <h3 className="font-serif text-2xl text-wedding-text mb-6">Canapes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-wedding-text">Bruschetta <small className="text-wedding-text/60">(v)</small></h4>
                    <p className="text-wedding-text/70">Topped with tomato, basil & red onion</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Smoked salmon</h4>
                    <p className="text-wedding-text/70">With chive crème fraîche, served on blinis</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">East Coker pork sausages</h4>
                    <p className="text-wedding-text/70">Honey & mustard glazed</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Panko & sesame breaded chicken</h4>
                    <p className="text-wedding-text/70">With sweet chilli</p>
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
                    <h4 className="font-semibold text-wedding-text">Goat’s cheese and sundried tomato tartlet <small className="text-wedding-text/60">(v)</small></h4>
                    <p className="text-wedding-text/70">With rocket salad and basil mayo</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Prawn cocktail</h4>
                    <p className="text-wedding-text/70">With smoked salmon shavings</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 p-8 rounded-lg">
                <h3 className="font-serif text-2xl text-wedding-text mb-6">Main Course</h3>
                <p className="text-wedding-text/70 mb-4">Served with sharing bowls of roasted new potatoes, seasonal salads, crusty bread</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-wedding-text">Roast Pork Sharing Platter</h4>
                    <p className="text-wedding-text/70">Joints of slow roasted Somerset pork with thyme & apricots</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Mushroom Wellington <small className="text-wedding-text/60">(v)</small></h4>
                    <p className="text-wedding-text/70">A meat-free twist on the classic</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 p-8 rounded-lg">
                <h3 className="font-serif text-2xl text-wedding-text mb-6">Dessert</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-wedding-text">Profiteroles <small className="text-wedding-text/60">(v)</small></h4>
                    <p className="text-wedding-text/70">Cream filled profiteroles served with warm chocolate sauce</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Berry pavlova <small className="text-wedding-text/60">(v)</small></h4>
                    <p className="text-wedding-text/70">Served with raspberry coulis</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Lemon tart <small className="text-wedding-text/60">(v)</small></h4>
                    <p className="text-wedding-text/70">Served with raspberry coulis and lemon sorbet</p>
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
                <h3 className="font-serif text-2xl text-wedding-text mb-6 text-center">Woodfired Pizzas</h3>
                <p className="mb-4 text-center">Fresh dough, rolled, topped and baked in Cott Farm's own woodfired pizza oven</p>
                <div className="space-y-4 flex flex-wrap gap-2 justify-between">
                  <div>
                    <h4 className="font-semibold text-wedding-text">Classic Margherita <small className="text-wedding-text/60">(v)</small></h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Meat Special</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Florentine <small className="text-wedding-text/60">(v)</small></h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Hawaiian</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-wedding-text">Spicy Pepperoni</h4>
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
