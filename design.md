GreenCart — UI/UX Design Document
Product: Grocery ecommerce platform
Scope: Frontend look, feel, and shopping experience
Version: 1.0

1. Overview
GreenCart lets users browse groceries, add items to a cart, checkout, and track delivery. The app is functionally complete — this document covers UI and UX only. Backend, cart logic, and APIs stay unchanged.

Design goal: Fresh, warm, and trustworthy — like a modern food brand, not a generic tech site.

Primary user: Household shoppers on mobile and desktop.

2. Tech stack
Layer	Choice
Framework
React 18 + TypeScript + Vite
Routing
React Router v6
State
Zustand
Styling
Tailwind CSS (dark mode: class)
Motion
Framer Motion (UI), GSAP (loader), Lenis (home scroll), CSS utilities
API
Axios
3. Typography
Role	Font	Use
Display
Clash Display
Headlines, page titles, hero
Body
Space Grotesk
Nav, labels, descriptions
Mono
JetBrains Mono
Prices, units ($4.99 / lb)
Rules

Headlines: font-display, tight letter-spacing
Body: font-body on <body>
Every price shows amount + unit in font-mono
4. Colors & theme
Token	Hex	Use
Primary
#E07A5F
Add to cart, Shop now, cart badge
Secondary
#3D5A80
Navbar, checkout, trust sections
Accent
#81936A
In stock, organic, active category
Success
#4ADE80
Deals, delivered
Warning
#FBBF24
Low stock
Error
#EF4444
Out of stock, errors
Background (light)
#FAFAF9
Page bg
Background (dark)
#0F0E0D
Page bg
Theme: Light and dark via CSS variables + .dark on <html>. User preference saved in localStorage.

Effects: Glass navbar (blur 12px), soft gradient orbs in hero, rounded-2xl cards, subtle hover lift on products.

5. Layout
Utility	Spec
Container
max-w-7xl, centered, responsive padding
Section spacing
py-16 mobile → py-24 desktop
Product grid
2 col mobile · 3 tablet · 4 desktop
Touch targets
Minimum 44×44px
6. Components
Navbar
Logo · Search · Categories · Cart (with item count) · Account
Sticky, glass background on scroll.

Delivery banner
Free delivery on orders over $35

Product card
Square image
Name (2-line max)
Price + unit (font-mono)
Stock badge (in stock / low / out)
Add to cart button
Badge variants
Variant	Meaning
Accent
In stock, Organic
Success
Deal, Fresh today
Warning
Low stock
Muted
Out of stock
Button variants
Variant	Use
Primary
Add to cart, Shop now, Place order
Secondary
View details, Continue shopping
Ghost
Cancel, back
Danger
Remove item
Quantity stepper
[ − ] quantity [ + ] — respect max stock.

Cart drawer / cart page
Line items with image, name, price, stepper, remove.
Summary: subtotal, delivery fee, promo, total.
CTA: Proceed to checkout.

Order status tracker
Confirmed → Packed → Out for delivery → Delivered

Mobile cart bar (fixed bottom)
3 items · $24.97 · View cart

7. Pages
Page	Route	Key content
Home
/
Hero, category strip, featured deals, how it works, footer
Shop
/shop
Filters, sort, product grid
Category
/shop/:category
Category header + filtered grid
Product
/product/:slug
Gallery, price, stock, stepper, add to cart, related items
Cart
/cart
Line items, summary, checkout CTA
Checkout
/checkout
Address → time slot → payment → review
Orders
/orders
Order list + status tracker
Search
/search?q=
Results grid + empty state
Account
/account
Profile, addresses, theme toggle
8. UX rules
Cart item count always visible in navbar.
Price and unit always visible on cards and product page.
Out-of-stock items: disable Add, show clear badge.
Checkout shows full total before payment (subtotal + delivery − discount).
Empty states on cart, search, and orders with a clear next action.
Loading: skeleton cards with shimmer — no blank screens.
Errors: inline message + retry — no silent failures.
Mobile first: sticky cart bar, bottom-sheet filters, large tap targets.
9. Motion
Where	What
Home hero
Staggered headline fade-up
Product grid
Light stagger on load
Product card
Subtle scale on hover
Cart drawer
Slide in from right
Home page
Smooth scroll (Lenis)
App load
Progress bar (GSAP)
Accessibility: Honor prefers-reduced-motion — shorten or disable animations. No custom cursor on mobile.

10. Modification scope
Change: fonts, colors, spacing, components, layouts, copy, empty/loading states, motion.
Do not change: API contracts, cart/checkout logic, auth, database, routing structure.

11. Implementation order
Fonts + color tokens + CSS variables
Button, Badge, Card, ProductCard
Navbar, footer, delivery banner
Home → Shop → Product → Cart
Checkout → Orders
Mobile cart bar + motion polish
12. Sign-off checklist

 Fonts and colors applied globally

 Product cards show price, unit, stock badge

 Cart count in navbar

 Mobile sticky cart bar

 Checkout steps clear with visible total

 Order tracker on order detail

 Dark mode works on all pages

 Empty and loading states on cart, search, orders

 Touch targets ≥ 44px on mobile

 Reduced motion respected